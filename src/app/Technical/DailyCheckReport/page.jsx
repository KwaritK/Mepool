"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import Structure from '../../../../public/assets/icons/StructureMachine.png'
import Monitor from '../../../../public/assets/icons/Monitor.png'
import Power from '../../../../public/assets/icons/power.png'
import Switch from '../../../../public/assets/icons/switch.png'
import Plug from '../../../../public/assets/icons/plug.png'
import Doortag from '../../../../public/assets/icons/doortag.png'
import Stand from '../../../../public/assets/icons/IVSTAND.png'
import TV from '../../../../public/assets/icons/TV.png'
import Button from '../../../../public/assets/icons/button.png'
import Alarm from '../../../../public/assets/icons/alarm.png'
import Battery from '../../../../public/assets/icons/battery.png'
import Charge from '../../../../public/assets/icons/Chargebat.png'
import PM from '../../../../public/assets/icons/pmdue.png'
import Plus from '../../../../public/assets/icons/plus.svg'


const ReportPage = () => {
    // เพิ่ม state สำหรับเก็บ ID ของปุ่มที่ถูกเลือก
    const [selectedButton, setSelectedButton] = useState(null);

    const actionButtons = [
        {
            id: 1,
            imgSrc: Structure,
            label: 'โครงสร้างเคลื่อน',
        },
        {
            id: 2,
            imgSrc: Monitor,
            label: 'หน้าปัดและจอแสดงผล',
        },
        {
            id: 3,
            imgSrc: Power,
            label: 'สวิตซ์ power',
        },
        {
            id: 4,
            imgSrc: Switch,
            label: 'สวิตซ์เลือกการใช้งาน',
        },
        {
            id: 5,
            imgSrc: Plug,
            label: 'ปลั๊กไฟAC,สายไฟAC,สายดินขั้ว GND',
        },
        {
            id: 6,
            imgSrc: Doortag,
            label: 'Door/Clamp Lock',
        },
        {
            id: 7,
            imgSrc: Stand,
            label: 'ที่ยึดเสาน้ำเกลือ',
        },
        {
            id: 8,
            imgSrc: TV,
            label: 'หน้าจอแสดงผลไฟแสดงผล',
        },
        {
            id: 9,
            imgSrc: Button,
            label: 'การทำงานของปุ่มต่างๆ',
        },
        {
            id: 10,
            imgSrc: Alarm,
            label: 'เสียง Alarm',
        },
        {
            id: 11,
            imgSrc: Battery,
            label: 'ทดสอบแบตเตอรี่',
        },
        {
            id: 12,
            imgSrc: Charge,
            label: 'ชาร์จแบตเตอรี่พร้อมใช้งาน',
        },
        {
            id: 13,
            imgSrc: PM,
            label: 'กำหนดการสอบเทียบเครื่องมือ PM DUE',
        },
        {
            id: 14,
            imgSrc: Plus,
            label: 'อื่นๆ',
        },

    ];

    // ปรับ Component ให้รับ props เพิ่มและจัดการ click event
    const ActionButton = ({ id, imgSrc, label }) => (
        <button
            onClick={() => setSelectedButton(id)}
            className={`
                flex flex-col items-center justify-center p-6 rounded-lg
                ${selectedButton === id
                    ? 'bg-red-500 text-white'
                    : 'border text-red-500'}
                transition-colors duration-200
            `}
        >
            <Image
                src={imgSrc}
                alt={label}
                width={24}
                height={24}
                className="mb-2 object-contain"
                priority
            />
            <span className='font-semibold text-xs'>{label}</span>
        </button>
    );

    return (
        <div className='min-h-screen bg-[#F9F9F7] overflow-y-auto'>
            {/* Header user info*/}

            <div className='bg-[#A0D1E4] p-4 shadow-sm   rounded-br-full '>

                <div className='flex items-center gap-4'>


                    <div>
                        <h1 className='text-xl font-bold text-[#284D76] py-1'>
                            การตรวจเช็ค
                        </h1>
                        <p className="text-[#284D76] font-bold  text-xl py-1">Infusion pump S7003</p>
                        <p className="text-[#284D76] font-bold text-xl  py-1">Terumo, TE-130</p>
                    </div>
                </div>
            </div>


            <div className='p-4'>
                <div className="bg-white rounded-3xl p-4 mb-4 shadow-xl items-center justify-center">

                    <span className='flex items-center justify-center text-red-600 font-bold text-xl'> รายงานการตรวจเช็ค </span>
                    
                    <div className="flex w-full  rounded shadow">
                        <a href="#" aria-current="false"
                            className=" w-48 flex justify-center font-medium rounded-l  py-2 border bg-white text-red-600 border-gray-200 hover:bg-gray-100">
                            สภาพทั่วไป
                        </a>

                        <a href="#" aria-current="false"
                            className="w-48 flex justify-center font-medium  py-2 border-t border-b bg-white text-red-600 border-gray-200 hover:bg-gray-100">
                            ประสิทธิภาพ
                        </a>

                        <a href="#" aria-current="false"
                            className="w-48 flex items-center gap-x-2 justify-center font-medium rounded-r  py-2 border bg-white text-red-600 border-gray-200 hover:bg-gray-100">
                            ความพร้อม

                        </a>
                    </div>


                    <div className="grid grid-cols-2 gap-4 p-4">
                        {actionButtons.map((button) => (
                            <ActionButton
                                key={button.id}
                                {...button}
                            />
                        ))}
                    </div>


                    <div className='flex items-center justify-between py-5 p-8'>
                        <div>
                            <button className="w-28 bg-[#E14E2D] text-white py-2 rounded-xl text-lg font-semibold">
                                ย้อนกลับ
                            </button>
                        </div>
                        <div>
                            <button className="w-28 bg-[#1976D2] text-white py-2 rounded-xl text-lg font-semibold">
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