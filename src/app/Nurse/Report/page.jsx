"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Note from '../../../../public/note 1.png'
import Alarm from '../../../../public/assets/icons/alarm.svg'
import Battery from '../../../../public/assets/icons/battery.png'
import Plus from '../../../../public/assets/icons/plus.svg'
import Swal from 'sweetalert2';
import Link from 'next/link'

const ReportPage = () => {
    async function handleClick() {
        const result = await Swal.fire({
          title: 'ยืนยันการเก็บ ?',
          text: "กดปุ่มยืนยันเพื่อบันทึกข้อมูลการเก็บ",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ยืนยัน',
          cancelButtonText: 'ยกเลิก'
        });
    
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'เก็บสำเร็จ',
            text: 'เครื่องนี้ถูกเก็บหลังจากใช้งานรอตรวจสอบ',
            confirmButtonText: 'ตกลง',
    
    
          });
        }
      }

    // เพิ่ม state สำหรับเก็บ ID ของปุ่มที่ถูกเลือก
    const [selectedButton, setSelectedButton] = useState(null);

    const actionButtons = [
        {
            id: 1,
            imgSrc: Alarm,
            label: 'เสียง Alarm',
        },
        {
            id: 2,
            imgSrc: Battery,
            label: 'แบตเตอรี่',
        },
        {
            id: 3,
            imgSrc: Plus,
            label: 'อื่นๆ',
        },
        {
            id: 4,
            imgSrc: Plus,
            label: 'อื่นๆ',
        }
    ];

    // ปรับ Component ให้รับ props เพิ่มและจัดการ click event
    const ActionButton = ({ id, imgSrc, label }) => (
        <button
            onClick={() => setSelectedButton(id)}
            className={`
                flex flex-col items-center justify-center p-4 rounded-lg font-semibold
                ${selectedButton === id
                    ? ' text-[#E14E2D]  border-4 border-red-600'  //  ? เมื่อถูกเลือก  : ค่าเริ่มต้น
                    : 'border text-[#E14E2D] marker:fill-red-600 stroke-red'}    
                transition-colors duration-200
            `}
        >
            <Image
                src={imgSrc}
                alt={label}
                width={24}
                height={24}
                className={`
                mb-2 object-contain 
              
            `}
                priority
            />
            <span >
                {label}
            </span>
        </button>
    );

    return (
        <div className='min-h-screen bg-[#F9F9F7] overflow-y-auto'>
            <div className='bg-[#A0D1E4]'>
                <div className='bg-white p-4 shadow-sm rounded-br-full'>
                    <div className='flex items-center gap-4'>
                        <div className="w-16 h-16 rounded-full bg-gray-500" />
                        <div>
                            <h1 className='text-xl text-[#284D76]'>
                                ชื่อ : พยาบาล ใจดี
                            </h1>
                            <p className="text-[#284D76]">12-xxxx-7890</p>
                            <p className="text-[#284D76]">แผนก : Ward 7</p>
                        </div>
                    </div>
                </div>

                <div className='p-4 r mb-4 flex items-center justify-center'>
                    <div className="">
                        <h2 className="text-[#284D76] text-2xl mb-1 font-bold">Infusion pump S7003</h2>
                        <div className='flex justify-center'>
                            <p className="text-[#284D76] font-bold">Terumo, TE-130</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5'>
                <div className="bg-white rounded-3xl p-6  mb-4 shadow-xl items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 p-4">
                        {actionButtons.map((button) => (
                            <ActionButton
                                key={button.id}
                                {...button}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col p-3 border rounded-t-md items-center justify-center gap-2 mb-2 shadow-md">
                        <Image
                            src={Note}
                            alt="note"
                            width={20}
                            height={20}
                            size={40}
                        />
                        <span className='text-black'>ปัญหา</span>
                        <textarea className='bg-[#E7E7E7] border border-black rounded-xl w-full' ></textarea>
                    </div>

                    <div className='flex items-center justify-between py-5 p-8'>
                        <div>
                            <Link href={'/Nurse/Duty'} >
                            <button className="w-28 bg-[#E14E2D] text-white py-3 rounded-xl text-lg font-semibold">
                                ย้อนกลับ
                            </button>
                            </Link>
                        </div>
                        <div>
                            <button className="w-28 bg-[#1976D2] text-white py-3 rounded-xl text-lg font-semibold" onClick={handleClick}>
                                บันทึก
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPage;