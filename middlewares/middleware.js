import { Category } from "../models/product.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";


export const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if(!category) return res.status(404).json({message: "Không tìm thấy category"}) ;
    req.category = category
    next()
  } catch (error) {
    res.status(500).json({message: "Server error: " + error.message})
  }
}

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    req.product = product;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Không tìm thấy sản user" });
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

export const getUserByEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (user) return  res.status(404).json({ message: "Người dùng đã tồn tại" });
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}