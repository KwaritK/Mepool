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

                            <div className="text-red-500 mt-2">
                                <li>โครงสร้างเครื่อง</li>
                                <li> หน้าปัดและจอแสดงผล</li>
                            </div>
                        </div>



                        <div className=" flex flex-col  p-3 border rounded-t-md   items-center justify-center  gap-2 mb-2 shadow-md" >
                            <Image
                                src={Note}
                                alt="note"
                                width={20}
                                height={20}
                                size={40} />
                            <span className='text-black' > รูปถ่ายอุปกรณ์ </span>


                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">อัปโหลดภาพถ่าย</span> </p>

                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>


                        <div className=" flex flex-col  p-3 border rounded-t-md   items-center justify-center  gap-2 mb-2 shadow-md" >
                            <Image
                                src={Note}
                                alt="note"
                                width={20}
                                height={20}
                                size={40} />
                            <span className='text-black' > หมายเหตุ</span>
                            <textarea className='block bg-[#E7E7E7] border border-black rounded-xl w-full ' ></textarea>

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
                                    <input type="radio" name="location" className="mr-2" value="" checked />
                                    <span>เก็บกลับคลัง</span>
                                </label>
                            </div>
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
