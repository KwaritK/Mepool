import { connectDB } from "@/lib/mongodb";
import Equipment from "@/models/item";
import { NextResponse } from "next/server";

// ฟังก์ชันสร้าง Item_ID อัตโนมัติ (P0001, P0002, ...)
const generateItemID = async () => {
  const lastItem = await Equipment.findOne().sort({ Item_ID: -1 }).exec();
  let newId = "P0001";
  if (lastItem && lastItem.Item_ID) {
    const lastNumber = parseInt(lastItem.Item_ID.substring(1)) + 1;
    newId = `P${lastNumber.toString().padStart(4, "0")}`;
  }
  return newId;
};


// POST - เพิ่มอุปกรณ์ใหม่
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    console.log("Received data:", data);

    // ตรวจสอบการซ้ำของ Asset_Number
    const existingEquipment = await Equipment.findOne({ 
      Asset_Number: data.Asset_Number 
    });

    if (existingEquipment) {
      return NextResponse.json({ 
        error: "รหัสสินทรัพย์นี้มีในระบบแล้ว" 
      }, { status: 400 });
    }
    
    // กำหนดค่า Item_ID อัตโนมัติ
    const Item_ID = await generateItemID();

    // // คำนวณ End_Time ถ้า Status เป็น 1 (ready)
    let End_Time = null;
    if (data.Status === "1"&& data.Last_Check) {
      End_Time = new Date(data.Last_Check);
      End_Time.setDate(End_Time.getDate() + 7); // บวก 7 วัน
    }
    
    // สร้างอุปกรณ์ใหม่
    const newEquipment = new Equipment({
      Item_ID,
      ...data,
      End_Time
    });

    await newEquipment.save();
    return NextResponse.json({ message: "Equipment added", Item_ID }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding equipment", error: error.message }, { status: 500 });
  }
}
