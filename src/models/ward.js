import mongoose from "mongoose";

const WardSchema = new mongoose.Schema({
  Ward_ID: { type: String, required: true, unique: true }, // Primary Key
  Name_ward: { type: String, required: true }
});

// ตรวจสอบว่ามี Model แล้วหรือยัง ป้องกันการ re-compile ใน Next.js
const Ward = mongoose.models.Ward || mongoose.model("Ward", WardSchema);

export default Ward;
