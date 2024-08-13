import mongoose, { Schema } from "mongoose";

const ShopperSchema = new mongoose.Schema(
  {
    phone: { type: String, unique: true, trim: true },
    shopName: { type: String, required: true, trim: true },
    email: { type: String, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    avatar: {
      type: String,
      trim: true,
      required: true,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ03zfL1HoCzxH95M_Q6RL8_WQx_2vkANDzQ&s",
    },
    address: {
      street: String,
      city: String,
      country: String,
    },
    myProduct: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    payment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    totalReviews: { type: Number, required: true, default: 0 },
    totalProduct: { type: Number, required: true, default: 0 },
    percenReponse: { type: Number, required: true, default: 100 },
    lastActive: { type: String },
    timeJoin: { type: Date, required: true, default: new Date() },
    follow: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const ShopperModel = mongoose.model("Shopper", ShopperSchema);
