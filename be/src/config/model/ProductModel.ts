import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    idShop: { type: Schema.Types.ObjectId, required: true, ref: "Shopper" },
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, trim: true },
    quantity: [
      {
        images: [{ type: String, trim: true }],
        color: { type: String, trim: true, required: true },
        sizes: [
          {
            size: {
              type: String,
              enum: ["S", "M", "L", "XL", "XXL", "XXXL"],
              required: true,
            },
            total: { type: Number, min: 0, required: true },
          },
        ],
      },
    ],
    type: { type: String, trim: true },
    reviews: [
      {
        star: { type: Number, required: true },
        content: { type: String, trim: true },
        idUser: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          trim: true,
        },
        like: { type: Number, default: 0, required: true, trim: true },
      },
    ],
    totalStar: { type: Number, required: true, default: 5 },
    sold: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", productSchema);
