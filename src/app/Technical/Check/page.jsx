"use client"
import React from 'react'
import Image from 'next/image'
import Note from '../../../../public/note 1.png'
import Link from 'next/link'


function CheckPage() {
    return (
        <div className=' min-h-screen bg-[#F9F9F7] overflow-y-auto'>
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


            <div className=' p-4 '>



                {/* Status card */}
                <div className="bg-white rounded-3xl p-4 mb-4 shadow-xl items-center justify-center">
                    <div className='flex flex-col ' >

                        <div className=" flex flex-col p-3 border rounded-t-md   items-center justify-center  gap-2 mb-2 shadow-md">
                            <Image
                                src={Note}
                                alt="note"
                                width={20}
                                height={20}
                                size={40} />
                            <span className='text-black' > ผลการเช็คเครื่อง </span>
                            <Link href='/Technical/Problem'>
                                <button> Edit </button>
                            </Link>

                            <div className="text-gray-500 mt-2">-- ปกติทั้งหมด --</div>
                        </div>



                        <div className=" flex flex-col  p-3 border rounded-t-md   items-center justify-center  gap-2 mb-2 shadow-md" >
                            <Image
                                src={Note}
                                alt="note"
                                width={20}
                                height={20}
                                size={40} />
                            <span className='text-black' > รูปถ่ายอุปกรณ์ </span>
                            <input type='file'></input>

                        </div>



                        <div className=" flex flex-col p-3 border rounded-t-md   items-center justify-center  gap-2 mb-2 shadow-md" >
                            <Image
                                src={Note}
                                alt="note"
                                width={20}
                                height={20}
                                size={40} />
                            <span className='text-black' > สถานที่ตั้งอุปกรณ์ </span>
                            <div className="flex gap-4 mt-2">
                                <label className="flex items-center">
                                    <input type="radio" name="location" className="mr-2" />
                                    <span>ที่เดิม</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="location" className="mr-2" />
                                    <span>เก็บกลับคลัง</span>
                                </label>
                            </div>
                        </div>



                        <div className="  flex flex-col p-3 border rounded-t-md   items-center justify-center  gap-2 mb-2 shadow-md">
                            <Image
                                src={Note}
                                alt="note"
                                width={20}
                                height={20}
                                size={40} />
                            <span className='text-black' > การดูแลความสะอาด </span>
                            <label className="flex items-center mt-2">
                                <input type="checkbox" className="mr-2" />
                                <span>ยืนยันดำเนินการเรียบร้อย</span>
                            </label>

                        </div>

                    </div>
                    {/* Action button */}
                    <div className='flex items-center justify-between py-5 p-8 '>
                        <div >
                            <button className="w-28 bg-[#E14E2D] text-white py-2  rounded-xl text-lg font-semibold">
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

        </div >












    )
}

export default CheckPage
