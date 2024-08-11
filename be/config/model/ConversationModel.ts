import mongoose, { Schema } from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    member: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    lastMessage: { type: String },
  },
  { timestamps: true }
);

export const ConversationModel = mongoose.model(
  "Conversation",
  conversationSchema
);
