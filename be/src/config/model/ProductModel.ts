import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    idShop: { type: Schema.Types.ObjectId, required: true, ref: "Shopper" },
    name: { type: String, required: true, trim: true },
    description: {
      content: { type: String },
      imgs: [{ type: String }],
      country: { type: String },
      brand: { type: String },
      material: { type: String },
      style: { type: String },
      sendFrom: { type: String },
      design: { type: String },
    },
    price: { type: Number, required: true, trim: true },
    freeShip: {
      type: { type: Boolean },
      minPrice: { type: Number, min: 0 },
    },
    discountCode: {
      type: { type: Boolean },
      value: { type: Number, min: 0 },
    },
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
    totalProducts: { type: Number },
    type: [{ type: String, trim: true }],
    reviews: [{ idReview: { type: Schema.Types.ObjectId, ref: "Review" } }],
    totalStar: { type: Number, required: true, default: 5 },
    sold: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", productSchema);
