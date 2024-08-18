import mongoose, { Schema } from "mongoose";

const TransportSchema = new Schema({
  idShop: { type: Schema.Types.ObjectId, ref: "Shopper" },
  address: { type: String, required: true },
  type: [{ type: String, required: true, enum: ["standard", "economy"] }],
});
