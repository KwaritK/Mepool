"use client"
import React from 'react'


function ProblemPage() {
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


                    <span className='flex items-center justify-center text-red-600 font-bold text-xl'> รายงานการตรวจเช็ค </span>


                    <div class="flex w-full md:max-w-xl mx-4 rounded shadow">
                        <a href="#" aria-current="false"
                            class="w-full flex justify-center font-medium rounded-l px-5 py-2 border bg-white text-red-600 border-gray-200 hover:bg-gray-100">
                            สภาพทั่วไป
                        </a>

                        <a href="#" aria-current="false"
                            class="w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-white text-red-600 border-gray-200 hover:bg-gray-100">
                            ประสิทธิภาพ
                        </a>

                        <a href="#" aria-current="false"
                            class="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-red-600 border-gray-200 hover:bg-gray-100">
                            ความพร้อม
                           
                        </a>
                    </div>





                </div>



            </div>
        </div>




    )
}

export default ProblemPage
