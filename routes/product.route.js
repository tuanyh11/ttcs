import express from "express";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import upload, { uploadImage } from "../config/multer.js";
import { __dirname } from "../index.js";
import { getProduct } from "../middlewares/middleware.js";
import Product from "../models/product.model.js";
import { formatMoney } from "../utils/index.utils.js";
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one product
router.get("/:id", getProduct, (req, res) => {
  res.status(200).json(req.product);
});

// Create a product
router.post("/", upload.array("images", 5), async (req, res) => {
  const images = await Promise.all(req.files.map((file) => uploadImage(file)));
  console.log(JSON.parse(req.body.price));
  const price = JSON.parse(req.body.price);
  const product = new Product({
    name: req.body.name,
    isActive: req.body.isActive,
    inStock: req.body.inStock,
    price: {
      raw: Number(price.raw),
      formatted: formatMoney(price.raw),
    },
    quantityInStock: req.body.quantityInStock,
    description: req.body.description,
    sku: req.body.sku,
    images: images.map((image) => image.secure_url),
    rating: req.body.rating,
    socialMediaLinks: req.body.socialMediaLinks,
    category: req.body.category,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // Delete the product's images from Cloudinary
    console.log(product.images);
    if (product.images.length > 0) {
      const publicIds = product.images.map((imageUrl) => {
        const parts = imageUrl.split("/");
        const filename = parts[parts.length - 1];
        const publicId = filename.split(".")[0];
        return publicId;
      });
      await cloudinary.v2.api.delete_resources(publicIds);
    }

    // Delete the product from the database
    await Product.findByIdAndDelete(product._id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const updateProduct = async (productId, data, files, deletedImages) => {
  let product = await Product.findById(productId);
  const price = JSON.parse(data.price);
  if (!product) {
    throw new Error("Product not found");
  }

  // Upload new images to Cloudinary
  const newImages =
    files?.length > 0
      ? await Promise.all(files.map((file) => uploadImage(file)))
      : [];

  // Delete images from Cloudinary
  if (deletedImages?.length > 0) {
    if (!Array.isArray(deletedImages)) {
      const publicIds = [deletedImages]?.map((imageUrl) => {
        const parts = imageUrl.split("/");
        const filename = parts[parts.length - 1];
        const publicId = filename.split(".")[0];
        return publicId;
      });
      await cloudinary.v2.api.delete_resources(publicIds);
    }

    // Remove deleted images from the product's images array
    product.images = product.images.filter(
      (imageUrl) => !deletedImages.includes(imageUrl)
    );
  }

  // Map the new image URLs to the product's images array
  const newImageUrls = newImages.map((image) => image.secure_url);
  const updatedImages =
    newImageUrls.length > 0
      ? [...product.images, ...newImageUrls]
      : product.images;

  // Update the product with the new data
  const updatedProduct = Object.assign(product, {
    name: data.name || product.name,
    inStock: data.inStock || product.inStock,
    price: {
      raw: price.raw,
      formatted: formatMoney(price.raw),
    },
    quantityInStock: data.quantityInStock || product.quantityInStock,
    description: data.description || product.description,
    sku: data.sku || product.sku,
    images: updatedImages,
    rating: data.rating || product.rating,
    socialMediaLinks: data.socialMediaLinks || product.socialMediaLinks,
    category: data.category || product.category,
    reviews: data.reviews || product.reviews,
  });

  // Save the updated product to the database
  const savedProduct = await updatedProduct.save();

  return savedProduct;
};

router.patch("/:id", upload.array("images", 5), async (req, res) => {
  try {
    const product = await updateProduct(
      req.params.id,
      req.body,
      req.files,
      req.body.deletedImages
    );

    res.status(200).json(product);
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ msg: error.message });
  }
});

// Update a product


router.post("/:id/duplicate", getProduct, async (req, res) => {
  const { id } = req.params;
  const product = req.product;
  try {
    const newProduct = new Product({
      ...product.toObject(),
      _id: new mongoose.Types.ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/search/query", async (req, res) => {
  const { name } = req.query;

  try {
    const products = await Product.find({
      name: { $regex: new RegExp(name, "i") },
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//  Stat

router.get("/statistics/total", async (req, res) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;

  const currentMonthProducts = await Product.countDocuments({
    createdAt: {
      $gte: new Date(currentYear, currentMonth - 1, 1),
      $lt: new Date(currentYear, currentMonth, 1),
    },
  });

  const previousMonthProducts = await Product.countDocuments({
    createdAt: {
      $gte: new Date(previousYear, previousMonth - 1, 1),
      $lt: new Date(previousYear, previousMonth, 1),
    },
  });

  const totalProducts = await Product.countDocuments();

  if (currentMonthProducts !== null && previousMonthProducts !== null) {
    const productsDifference = currentMonthProducts - previousMonthProducts;

    const percentChange =
      previousMonthProducts === 0
        ? 0
        : Math.round((productsDifference / previousMonthProducts) * 100);

    const productsTrend =
      productsDifference > 0
        ? "up"
        : productsDifference < 0
        ? "down"
        : "no change";

    res.json({
      currentMonthProducts,
      previousMonthProducts,
      totalProducts,
      percentChange,
      productsTrend,
    });
  } else {
    res.status(404).json({
      message: "Product data not available for current or previous month",
    });
  }
});

export default router;
