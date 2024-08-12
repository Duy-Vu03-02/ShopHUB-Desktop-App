import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    idProduct: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    star: { type: Number, required: true },
    content: { type: String, trim: true },
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      trim: true,
    },
    like: { type: Number, default: 0, required: true, trim: true },
  },
  { timestamps: true }
);

export const ReviewModel = mongoose.model("Review", reviewSchema);
