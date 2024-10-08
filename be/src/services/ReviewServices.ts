import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    idUser: { type: Schema.Types.ObjectId, ref: "User" },
    idProduct: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    content: {
      idUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
      rating: { type: Number, min: 1, max: 5, required: true },
      comment: String,
      img: [String],
    },
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);
