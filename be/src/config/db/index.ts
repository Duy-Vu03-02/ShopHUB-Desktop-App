import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url = process.env.URL_DB;
    await mongoose.connect(url, {});
    console.log("Connect DB:: Success");
  } catch (err) {
    console.error(err);
  }
};
