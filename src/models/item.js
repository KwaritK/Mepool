import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({
  Item_ID: { type: String, required: true, unique: true }, // P0001, P0002
  Type: { type: String, enum: ["Infusion pump", "Syringe pump"], required: true },
  Asset_Number: { type: String, required: true },
  Status: { type: Number, enum: [0, 1, 2, 3, 4]},
  Ward_ID: { type: String, required: true },
  Brands: { type: String, enum: ["TERUMO", "FRESENIUS"], required: true },
  Models: { type: String, enum: ["TE-135", "TE-171", "TE-LF600", "TE-LM700", "AGILIA","TE-331","TE-SS700","TE-SS730","INJECTOMAT AGILIA"], required: true },
  Image: { type: String }, // URL ของรูปภาพ
  Last_Check: { type: Date },
  End_Time: { type: Date } // คำนวณอัตโนมัติถ้า Status เป็น 1
});

const Equipment = mongoose.models.Equipment || mongoose.model("Equipment", EquipmentSchema);
export default Equipment;
