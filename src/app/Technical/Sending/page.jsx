"use client"
import React, { useState } from 'react'
import Swal from 'sweetalert2';




const DailyCheckPage = () => {

    async function handleClick() {
        const result = await Swal.fire({
          title: 'ยืนยันการเบิกจ่าย ?',
          text: "กดปุ่มยืนยันเพื่อบันทึกข้อมูลการเบิกจ่าย",
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
            title: 'เบิกจ่ายสำเร็จ',
            text: 'เครื่องนี้ถูกเบิกจ่ายจากคลังไปที่แผนก......สำเร็จ',
            confirmButtonText: 'ตกลง',
    
    
          });
        }
      }


   
    // เพิ่ม state สำหรับเก็บ ID ของปุ่มที่ถูกเลือก
    const [selectedButton, setSelectedButton] = useState(null);

    


    const actionButtons = [
        {
            id: 1,

            label: 'Ward 4',
        },
        {
            id: 2,

            label: 'Ward 5',
        },
        {
            id: 3,

            label: 'OPD-3',
        },
        {
            id: 4,

            label: 'ICU',
        },
        {
            id: 5,

            label: 'Ward 6',
        },
        {
            id: 6,

            label: 'Ward 7',
        },
        {
            id: 7,

            label: 'ไตเทียม 2',
        },
        {
            id: 8,

            label: 'ไตเทียม 3',
        }, {
            id: 9,

            label: 'วิสัญญี',
        },
        {
            id: 10,

            label: 'ER',
        },
        {
            id: 11,

            label: 'LR/NS',
        },



    ];

    // ปรับ Component ให้รับ props เพิ่มและจัดการ click event
    const ActionButton = ({ id, label }) => (
        <button
            onClick={() => setSelectedButton(id)}
            className={`
               flex flex-col items-center justify-center p-9 rounded-xl text-xl font-bold
               ${selectedButton === id
                    ? 'bg-[#007B6E] text-white'
                    : 'border text-[#007B6E]'}
               transition-colors duration-200
           `}
        >

            <span>{label}</span>
        </button>
    );


    return (
        <div className=' min-h-screen bg-[#F9F9F7] overflow-y-auto'>
            {/* Header user info*/}

            <div className='bg-[#A0D1E4] p-4 shadow-sm   rounded-br-full '>

                <div className='flex items-center gap-4'>


                    <div>
                        <h1 className='text-xl font-bold text-[#284D76] py-1'>
                            การเบิกจ่าย
                        </h1>
                        <p className="text-[#284D76] font-bold  text-xl py-1">Infusion pump S7003</p>
                        <p className="text-[#284D76] font-bold text-xl  py-1">Terumo, TE-130</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-6 mb-4 shadow-xl items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-4">
                    {actionButtons.map((button) => (
                        <ActionButton
                            key={button.id}
                            {...button}
                        />
                    ))}
                </div>



                {/* Action button */}
                <div className='flex items-center justify-between py-5 p-8 '>
                    <div >
                        <button className="w-28 bg-[#E14E2D] text-white py-2  rounded-xl text-lg font-semibold">
                            ย้อนกลับ
                        </button>
                    </div>
                    <div>
                        <button className="w-28 bg-[#1976D2] text-white py-2 rounded-xl text-lg font-semibold" onClick={handleClick}>
                            ยืนยัน
                        </button>
                    </div>
                </div>
            </div>
           

        </div>








    )
}

export default DailyCheckPage
