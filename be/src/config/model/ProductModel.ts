import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    idShop: { type: Schema.Types.ObjectId, required: true, ref: "Shopper" },
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, trim: true },
    images: { type: String, trim: true },
    color: { type: String, trim: true },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL", "XXXL"],
      trim: true,
    },
    type: { type: String, trim: true },
    total: { type: Number, min: 0, trim: true },
    reviews: [
      {
        content: { type: String, trim: true },
        idUser: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          trim: true,
        },
        like: { type: Number, default: 0, required: true, trim: true },
      },
    ],
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", productSchema);
