import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ กรุณาเพิ่ม MONGODB_URI ในไฟล์ .env");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};
