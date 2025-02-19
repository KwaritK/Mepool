import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["user", "admin", "technical"], required: true },
  wardID: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
