import mongoose from "mongoose";
import Product from "./product.model.js";
const paymentSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  method: { type: String, required: true, enum: ['banking', 'cash'] },
  status: { type: String, required: true, enum: ['pending', 'completed', 'failed'] },
  gateway: { type: String },
  transaction_id: { type: String },
  amount: { type: Number, required: true },
}, {
  timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);

const orderSchema = new mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    products: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    shipping_address: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: false },
      amount: {
        type: {
          raw: {
            type: Number,
            required: true,
          },
          formatted: {
            type: String,
            required: true,
          },
        },
        required: true,
      },
      country: { type: String, required: true },
      postal_code: { type: String, required: true },
    },
    status: {
      type: String,
      required: true,
      enum: ["pending payment", "pending delivery", "completed", "canceled"],
      default: "pending payment",
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.pre("save", async function (next) {
  if (this.isModified("status") && this.status === "completed") {
    try {
      const productIds = this.products.map((product) => product.product_id);
      const products = await Product.find({ _id: { $in: productIds } });
      products.forEach((product) => {
        const orderProduct = this.products.find(
          (p) => p.product_id.toString() === product._id.toString()
        );  
        product.quantityInStock -= orderProduct.quantity;
        if (product.quantityInStock === 0) {
          product.inStock = false;
          product.quantityInStock = 0;
        }
        product.save();
      });
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});


const Order = mongoose.model('Order', orderSchema);

export { Order, Payment };