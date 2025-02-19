import { connectDB } from "@/lib/mongodb";
import Ward from "@/models/ward";
import { NextResponse } from "next/server";

// POST /api/wards
export async function POST(req) {
    try {
        await connectDB();
        const { Ward_ID, Name_ward } = await req.json();

        // ตรวจสอบว่ามีแผนกนี้อยู่แล้วหรือไม่
        const existingWard = await Ward.findOne({ Ward_ID });
        if (existingWard) {
            return NextResponse.json({ error: "Ward_ID นี้มีอยู่แล้ว!" }, { status: 400 });
        }

        const newWard = new Ward({ Ward_ID, Name_ward });
        await newWard.save();

        return NextResponse.json({ message: "เพิ่มแผนกสำเร็จ!", ward: newWard }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const ward = await Ward.find();
        return NextResponse.json(ward);

    } catch (error) {
        return NextResponse.json({ error: "ไม่สามารถดึงข้อมูลได้" })
    }
}
