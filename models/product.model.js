import mongoose from "mongoose";
import { formatMoney } from "../utils/index.utils.js";
import { Order } from "./order.model.js";
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      default: true,
      type: Boolean,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
    }
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    isActive: {
      default: true,
      type: Boolean,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    price: {
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
    quantityInStock: {
      type: Number,
      required: true,
      default: 1,
    },
    description: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    socialMediaLinks: [
      {
        url: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

productSchema.pre('remove', async function (next) {
  try {
    const orders = await Order.find({ 'products.product_id': this._id });
    orders.forEach((order) => {
      order.products = order.products.filter((product) => product.product_id.toString() !== this._id.toString());
      order.save();
    });
    next();
  } catch (err) {
    next(err);
  }
});


const Product = mongoose.model("Product", productSchema); 
export const Category = mongoose.model("Category", categorySchema);

export default Product;
