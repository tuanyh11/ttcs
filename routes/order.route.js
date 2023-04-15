import express from "express";
import { Order } from "../models/order.model.js";
import { formatMoney } from "../utils/index.utils.js";

const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate({
      path: "products.product_id",
      select: "-__v",
      populate: {
        path: "category",
        select: "-__v",
      },
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single order by ID
router.get("/:id", getOrder, (req, res) => {
  res.json(res.order);
});

// Create a new order
router.post("/", async (req, res) => {
  const { customer_id, products, total, shipping_address, status } = req.body;
  console.log({
    raw: shipping_address.amount,
    formatted: formatMoney(shipping_address.amount),
  });
  const order = new Order({
    customer_id,
    products,
    total,
    shipping_address: {
      ...shipping_address,
      amount: {
        raw: shipping_address.amount,
        formatted: formatMoney(shipping_address.amount),
      },
    },
    status,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

// Update an existing order
router.patch("/:id", getOrder, async (req, res) => {
  const updates = req.body;
  Object.assign(res.order, updates);

  try {
    const updatedOrder = await res.order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an order
router.delete("/:id", getOrder, async (req, res) => {
  try {
    await Order.findByIdAndRemove(res.order._id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single order by ID
async function getOrder(req, res, next) {
  try {
    const order = await Order.findById(req.params.id);

    if (order == null) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.order = order;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

router.get("/statistic/products/sales",getDataOrderChart, async (req, res) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
 
  const currentMonthSales = await Order.aggregate([
    {
      $match: {
        status: "completed",
        createdAt: {
          $gte: new Date(currentYear, currentMonth - 1, 1),
          $lt: new Date(currentYear, currentMonth, 1),
        },
      },
    },
    {
      $unwind: "$products",
    },
    {
      $lookup: {
        from: "products",
        localField: "products.product_id",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: "$product",
    },
    {
      $group: {
        _id: "$product._id",
        name: { $first: "$product.name" },
        totalSales: {
          $sum: { $multiply: ["$product.price.raw", "$products.quantity"] },
        },
        totalQuantity: {
          $sum: "$products.quantity",
        },
      },
    },
  ]);

  const previousMonthSales = await Order.aggregate([
    {
      $match: {
        status: "completed",
        createdAt: {
          $gte: new Date(previousYear, previousMonth - 1, 1),
          $lt: new Date(previousYear, previousMonth, 1),
        },
      },
    },
    {
      $unwind: "$products",
    },
    {
      $lookup: {
        from: "products",
        localField: "products.product_id",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: "$product",
    },
    {
      $group: {
        _id: "$product._id",
        name: { $first: "$product.name" },
        totalSales: {
          $sum: { $multiply: ["$product.price", "$products.quantity"] },
        },
        totalQuantity: {
          $sum: "$products.quantity",
        },
      },
    },
  ]);

  const currentMonthSalesMap = new Map();
  currentMonthSales.forEach((item) => {
    currentMonthSalesMap.set(item._id.toString(), item.totalSales);
  });

  const previousMonthSalesMap = new Map();
  previousMonthSales.forEach((item) => {
    previousMonthSalesMap.set(item._id.toString(), item.totalSales);
  });

  const productSales = [];
  currentMonthSales.forEach((item) => {
    const productId = item._id.toString();
    const productName = item.name;
    const currentMonthSales = item.totalSales;
    const previousMonthSales = previousMonthSalesMap.get(productId) || 0;
    const percentChange =
      previousMonthSales === 0
        ? 0
        : ((currentMonthSales - previousMonthSales) / previousMonthSales) * 100;
    const totalQuantity = item.totalQuantity;
    const salesTrend =
      percentChange > 0 ? "up" : percentChange < 0 ? "down" : "no-change";
    productSales.push({
      product_id: productId,
      product_name: productName,
      current_month_sales: currentMonthSales,
      previous_month_sales: previousMonthSales,
      percent_change: percentChange,
      total_quantity: totalQuantity,
      sales_trend: salesTrend,
    });
  });

  const totalItemsSold = currentMonthSales.reduce((acc, item) => {
    return acc + item.totalQuantity;
  }, 0);

  res.json({
    product_sales: productSales,
    current_month: currentMonth,
    previous_month: previousMonth,
    current_year: currentYear,
    previous_year: previousYear,
    total_items_sold: totalItemsSold,
    chartData: req.chartData
  });
});

router.get("/statistic/total", async (req, res) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;

  const currentMonthOrders = await Order.countDocuments({
    createdAt: {
      $gte: new Date(currentYear, currentMonth - 1, 1),
      $lt: new Date(currentYear, currentMonth, 1),
    },
  });

  const previousMonthOrders = await Order.countDocuments({
    createdAt: {
      $gte: new Date(previousYear, previousMonth - 1, 1),
      $lt: new Date(previousYear, previousMonth, 1),
    },
  });

  console.log(previousMonthOrders, currentMonthOrders);

  if (currentMonthOrders !== null && previousMonthOrders !== null) {
    const ordersDifference = currentMonthOrders - previousMonthOrders;

    const percentChange =
      previousMonthOrders === 0
        ? 0
        : Math.round((ordersDifference / previousMonthOrders) * 100);

    const ordersTrend =
      ordersDifference > 0 ? "up" : ordersDifference < 0 ? "down" : "no change";

    res.json({
      currentMonthOrders,
      previousMonthOrders,
      percentChange,
      totalOrderAmount: previousMonthOrders + currentMonthOrders,
      ordersTrend,
    });
  } else {
    res.status(404).json({
      message: "Order data not available for current or previous month",
    });
  }
});



 async function getDataOrderChart (req, res, next) {
  const orders = await Order.aggregate([
    {
      $match: {
        status: "completed",
      },
    },
    {
      $unwind: "$products",
    },
    {
      $group: {
        _id: {
          month: { $month: "$createdAt" },
          year: { $year: "$createdAt" },
          product_id: "$products.product_id",
        },
        totalQuantity: { $sum: "$products.quantity" },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "_id.product_id",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: "$product",
    },
    {
      $sort: {
        "_id.year": 1,
        "_id.month": 1,
      },
    },
  ]);

  let data = Array(12).fill(0);


  orders.forEach((order) => {
    const month = order?._id?.month - 1;
    data.map((_, i) => {
      if (month === i) {
        data[i] += order.totalQuantity;
      }
    });
  });

  req.chartData = data
  next()
};

export default router;
