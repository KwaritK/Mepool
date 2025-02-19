import { connectDB } from "@/lib/mongodb";
import User from "@/models/user"; // ให้ตรวจสอบว่ามีไฟล์ User.js ใน models แล้ว
import { NextResponse } from "next/server";

// POST /api/users
export async function POST(req) {
  const { id, password, name, role, wardID } = await req.json();

  try {
    await connectDB();

    // ตรวจสอบว่าผู้ใช้มีอยู่แล้วหรือไม่
    const existingUser = await User.findOne({ id });
    if (existingUser) {
      return NextResponse.json({ error: "ผู้ใช้มีอยู่แล้ว" }, { status: 400 });
    }

    // สร้างผู้ใช้ใหม่
    const user = new User({
      id,
      password,
      name,
      role,
      wardID,
    });

    await user.save();
    return NextResponse.json({ message: "เพิ่มผู้ใช้สำเร็จ" });
  } catch (error) {
    return NextResponse.json({ error: "ไม่สามารถเพิ่มผู้ใช้ได้" }, { status: 500 });
  }
}
