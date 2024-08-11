import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema(
  {
    idUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: String,
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Notification = mongoose.model("Notification", notificationSchema);
