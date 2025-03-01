"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function HistoryPage() {
  return (
   
    <div className=' min-h-screen bg-[#F9F9F7]'>
        <div className='relative top-0 w-full'>
            <div className="  bg-white  shadow-sm   h-[140px] w-full rounded-b-[45%] flex flex-col justify-center items-center ">
                <div className='p-4 r mb-4  flex items-center justify-center'>
                    <div className="">
                        <h2 className="text-[#284D76] text-2xl mb-1 font-bold">Infusion pump S7003</h2>

                        <div className='flex justify-center'>
                            <p className="text-[#284D76] font-bold">Terumo, TE-130</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
        
        
        <h1 className="text-3xl font-bold py-6  text-center text-[#284D76]">ข้อมูลการใช้งาน</h1>

        <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[#284D76] px-16 py-6">
                        <span>รายการ</span>
                        <div className="flex-1">
                            <Select defaultValue="">
                                <SelectTrigger className="w-48 rounded-xl ">
                                    <SelectValue placeholder="เลือกประเภทรายการ" />
                                </SelectTrigger>
                                <SelectContent className=" rounded-xl">
                                    <SelectItem value="Check">ตรวจเช็ค</SelectItem>
                                    <SelectItem value="use">เบิกใช้</SelectItem>
                                    <SelectItem value="used">เก็บ</SelectItem>
                                    <SelectItem value="usedboorow">ยืมใช้</SelectItem>
                                    <SelectItem value="senttrans">เบิกจ่าย</SelectItem>
                                    <SelectItem value="report">รายงาน</SelectItem>
                                    <SelectItem value="reportfix">แจ้งซ่อม</SelectItem>
                                    <SelectItem value="backstore">เก็บกลับ</SelectItem>
                                    <SelectItem value="resultfix">สรุปซ่อม</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
          
          
          <div className="overflow-x-auto">
            <table className="min-w-full text-[#284D76] text-sm">
              <thead>
                <tr className="">
                <th className="py-2 px-4 border-b text-center">วันที่</th>
                  <th className="py-2 px-4 border-b text-center">ผู้ทำรายการ</th>
                  <th className="py-2 px-4 border-b text-center">สถานที่</th>
                  <th className="py-2 px-4 border-b text-center">รายการ</th>
                
                </tr>
              </thead>
              
            </table>


    </div>
</div>


  )
}

export default HistoryPage
