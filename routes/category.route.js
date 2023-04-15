import { Router } from "express";
import { Category } from "../models/product.model.js";
import slugify from "slugify";
import upload, { uploadImage } from "../config/multer.js";
import cloudinary from "../config/cloudinary.js";
import { getCategory } from "../middlewares/middleware.js";
import mongoose from "mongoose";
const router = Router(); 




router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);
    const newImage = await uploadImage(req.file);
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
      slug: slugify(req.body.name.toLowerCase()),
      image: newImage.secure_url,
    });
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.patch("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;
    // console.log(req.file);
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    category.name = name || category.name;
    category.description = description || category.description;
    category.slug = slugify(name.toLowerCase());

    // Upload new image to Cloudinary
    if (req?.file) {
      const newImage = await uploadImage(req.file);
      console.log(newImage);
      category.image = newImage.secure_url;
    }

    // Remove deleted image from the category's image field
    if (req?.body?.deletedImage) {
      await cloudinary.v2.uploader.destroy(req.body.deletedImage);
      category.image = null;
    }

    await category.save();
    res.json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});



router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    // Delete the category's image from Cloudinary
    if (category.image) {
      const publicId = category.image.split('/').slice(-1)[0].split('.')[0];
      await cloudinary.v2.uploader.destroy(publicId);
    }

    // Delete the category from the database
    await Category.findByIdAndRemove(category._id);

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/:id/duplicate", getCategory, async (req, res) => {
  const { id } = req.params;
  const category = req.category;
  try {
    const newCategory = new Category({
      ...category.toObject(),
      _id: new mongoose.Types.ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newCategory.save();

    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
