"use client"
import React from 'react'
import Check from '../../../../public/check.png'
import Image from 'next/image';


function ReadyPage() {
  return (
    <div className='min-h-screen bg-[#F9F9F7] overflow-y-auto  ' >

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
              <div className="bg-gray-400 rounded-lg p-4 mb-4 shadow-xl w-44 h-48  ">  </div>
            </div>

            <div className=' shadow-xl'>

            <div className="bg-[#C1E9D0] p-3 rounded-t-md  flex items-center justify-center  gap-2 mb-2">
              <Image
                src={Check}
                alt="status"
                width={20}
                height={20}
                className="text-[#0E9247]" size={40} />
              <span className="text-[#0E9247] text-lg font-bold ">พร้อมใช้งาน</span>
            </div>

            <div className="py-3 px-6 gap-2 text-[#284D76] shadow-md">
              <p>สถานที่ : Ward 7</p>
              <p>วันที่ตรวจสอบล่าสุด : 15/01/68</p>
              <p>วันที่ครบกำหนด: 22/01/68</p>
            </div>
            </div>
              {/* Action button */}
          <div className='flex items-center justify-center py-4'>
            <button className="w-36 bg-[#4CAF50] text-white py-2 rounded-lg text-lg">
              ใช้
            </button>
          </div>
          </div>

        

        </div>
      </div>


     

    </div>




  )
}

export default ReadyPage;
