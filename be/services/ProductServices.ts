import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [String],
    color: [String],
    type: { type: String },
    total: Number,
    reviews: [
      {
        content: { type: String },
        idUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        like: { type: Number, default: 0, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
