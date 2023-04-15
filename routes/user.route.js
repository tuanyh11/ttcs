import User from "../models/user.model.js";
import { getUser, getUserByEmail } from "../middlewares/middleware.js";
import { Router } from "express";
import bcrypt from "bcrypt";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/:id", getUser, async (req, res) => {
  res.json(req.user);
});

router.patch("/:id", getUser, async (req, res, next) => {
  try {
    let { userName, email, password, admin } = req.body;
    const user = req.user;
    password = password || user.password;
    Object.assign(user, { userName, email, password, admin });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User đã được xoá" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/", getUserByEmail, async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const newUser = new User({
      userName,
      email,
      password,
    });

    await newUser.save();

    // Respond with the new user's details
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Create a route for user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists with the given email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Thông tin không hợp lệ" });
    }

    // Check if password matches the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Thông tin không hợp lệ" });
    }

    // Respond with the user's details
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/statistics/compare", async (req, res, next) => {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get number of users this month
    const thisMonthUsers = await User.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $month: "$createdAt" }, currentMonth + 1] },
              { $eq: [{ $year: "$createdAt" }, currentYear] },
            ],
          },
        },
      },
      { $group: { _id: null, count: { $sum: 1 } } },
    ]);

    // Get number of users last month
    const lastMonthUsers = await User.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $month: "$createdAt" }, currentMonth] },
              { $eq: [{ $year: "$createdAt" }, currentYear] },
            ],
          },
        },
      },
      { $group: { _id: null, count: { $sum: 1 } } },
    ]);

    const totalUsers = await User.countDocuments();

    // Compare the two values and return the result
    const thisMonthCount =
      thisMonthUsers.length > 0 ? thisMonthUsers[0].count : 0;
    const lastMonthCount =
      lastMonthUsers.length > 0 ? lastMonthUsers[0].count : 0;
    const percentChange =
      lastMonthCount === 0
        ? 0
        : ((thisMonthCount - lastMonthCount) / lastMonthCount) * 100;

    console.log(thisMonthCount, lastMonthCount);

    res.json({ percentChange, totalUsers });
  } catch (err) {
    next(err);
  }
});

export default router;
