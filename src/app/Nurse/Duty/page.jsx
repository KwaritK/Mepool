"use client"

import React from 'react';
import Image from 'next/image';
import Duty from '../../../../public/dutyicon.png';


const InfusionPumpDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
      {/* Header user info*/}
      <div className='bg-[#A0D1E4]' >
        <div className='bg-white p-4 shadow-sm   rounded-br-full '>

          <div className='flex items-center gap-4'>
            <div

              // {/* image user*/}
              className="w-16 h-16 rounded-full bg-gray-500"
            />

            <div>
              <h1 className='text-xl text-[#284D76]'>
                ชื่อ : พยาบาล ใจดี
              </h1>
              <p className="text-[#284D76]">12-xxxx-7890</p>
              <p className="text-[#284D76]">แผนก : ward 7</p>
            </div>
          </div>
        </div>



        {/* Device info */}
      <div className='p-4 r mb-4  flex items-center justify-center'>
        <div className="">
          <h2 className="text-[#284D76] text-2xl mb-1 font-bold">Infusion pump S7003</h2>

           <div className='flex justify-center'>
          <p className="text-[#284D76] font-bold">Terumo, TE-130</p>
          </div>

        </div>
      </div>
      </div>
      <div>



        <div className=' p-4 '>



          {/* Status card */}
          <div className="bg-white rounded-3xl p-4 mb-4 shadow-xl items-center justify-center">
            {/* Device image */}
            <div className='flex items-center justify-center'>
              <div className="bg-gray-400 rounded-lg p-4 mb-4 shadow-sm w-44 h-48  ">  </div>
            </div>

            <div className="bg-[#85E1FB] p-3 rounded-t-md  flex items-center justify-center  gap-2 mb-2">
              <Image
                src={Duty}
                alt="status"
                width={20}
                height={20}
                />
              <span className="text-[#1976D2] text-lg font-bold ">กำลังถูกใช้งาน</span>
            </div>

            <div className="py-3 px-6 gap-2 text-[#284D76] shadow-md">
              <p>สถานที่ใช้งาน : Ward 7</p>
              <p>ผู้เบิกใช้ : คุณ..... </p>
              <p>วันที่เบิกใช้: 22/01/68 </p>
            </div>
            {/* Action button */}
          <div className='flex items-center justify-center py-4'>
            <button className="w-36 bg-[#FDB51D] text-white py-3 rounded-lg text-lg">
              เก็บคืน
            </button>
          </div>
          </div>

          

        </div>
      </div>


    

    </div>
  );
};

export default InfusionPumpDetail;