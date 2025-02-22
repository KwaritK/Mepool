"use client"
import React from 'react'
import Image from 'next/image'
import Note from '../../../../public/note 1.png'


function DailyCheckPage() {
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
                    {/* Device image */}
                    <div className='flex items-center justify-center'>
                        <div className="bg-gray-400 rounded-lg p-4 mb-4 shadow-xl w-44 h-48  ">  </div>
                    </div>







                    <div className="py-1 px-6 gap-2 text-[#284D76] shadow-md rounded-xl">
                        <div className=" p-3 rounded-t-md  flex items-center justify-center  gap-2 mb-2">
                            <Image
                                src={Note}
                                alt="note"
                                width={20}
                                height={20}
                                 size={40} />
                            <span className="text-[#1976D2] text-lg font-bold " >ผลการตรวจเช็ค</span>
                        </div>


                        <div className='flex flex-wrap '>
                        <li className='px-2'>สภาพทั่วไป     </li>
                        <li className='px-2 ml-2' >ความพร้อม</li>
                        <li className='px-2' >ประสิทธิภาพ</li>
                        <li className='px-2' > ความสะอาด</li>
                        </div>
                    </div>
                    {/* Action button */}
                    <div className='flex items-center justify-between py-5 p-8 '>
                        <div >
                            <button className="w-28 bg-[#E14E2D] text-white py-2  rounded-xl text-lg font-semibold">
                                พบปัญหา
                            </button>
                        </div>
                        <div>
                            <button className="w-28 bg-[#0E9247] text-white py-2 rounded-xl text-lg font-semibold">
                                ปกติ
                            </button>
                        </div>
                    </div>
                </div>


            </div>



        </div>




    )
}

export default DailyCheckPage
