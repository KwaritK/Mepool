import { Schema, model } from "mongoose";

const EquipmentSchema = new Schema({
  Item_ID: { type: String, required: true, unique: true }, // Primary Key (P0000, P0001,...)
  Type: { type: String, enum: ["Infusion pump", "Syringe pump"], required: true },
  Asset_Number: { type: String, required: true },
  Status: { type: Number, enum: [0, 1, 2, 3, 4], required: true },
  Ward_ID: { type: String, ref: "Ward" }, // Foreign Key
  Brands: { type: String, required: true },
  Models: { type: String, required: true },
  Image: { type: String },
  Last_Check: { type: Date, required: true },
  End_Time: { type: Date },
});

// ✅ Auto calculate `End_Time` เมื่อ Status = 1 (ready)
EquipmentSchema.pre("save", function (next) {
  if (this.Status === 1) {
    this.End_Time = new Date(this.Last_Check);
    this.End_Time.setDate(this.End_Time.getDate() + 7); // เพิ่ม 7 วัน
  }
  next();
});

export default model("Equipment", EquipmentSchema);
