import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    idConversation: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: String,
    img: [String],
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
