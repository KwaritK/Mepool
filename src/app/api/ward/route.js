import { connectDB } from "@/lib/mongodb";
import Ward from "@/models/ward";
import { NextResponse } from "next/server";

// POST /api/wards
export async function POST(req) {
  try {
    await connectDB();
    const { Ward_ID, Name_ward } = await req.json();

    // ตรวจสอบว่ามีแผนกนี้อยู่แล้วหรือไม่
    const existingWard = await Ward.findOne({  Name_ward });
    if (existingWard) {
      return NextResponse.json({ error: "Ward นี้มีอยู่แล้ว!" }, { status: 400 });
    }

    const newWard = new Ward({
      Ward_ID,
      Name_ward
    });
    await newWard.save();

    return NextResponse.json({ message: "เพิ่มแผนกสำเร็จ!", ward: newWard }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const wards = await Ward.find();
    return NextResponse.json(wards);
  } catch (error) {
    return NextResponse.json({ error: "ไม่สามารถดึงข้อมูลแผนกได้" }, { status: 500 });
  }
}
