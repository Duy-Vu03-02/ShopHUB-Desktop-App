import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phone: { type: String, unique: true, trim: true },
    username: { type: String, required: true, trim: true },
    email: { type: String, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    avatar: { type: String, trim: true },
    address: {
      street: String,
      city: String,
      country: String,
    },
    myProduct: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    payment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
