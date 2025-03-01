"use client"

import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function ALLitemPage() {
    const wards = [
        { name: 'MDQ', total: 11,repair: 9, ready: 5, inUse: 2, available: 4 },
        { name: 'WARD 7', total: 21, ready: 3, inUse: 2, available: 18 },
        { name: 'WARD 6', total: 24, ready: 4, inUse: 0, available: 20 },
        { name: 'ICU', total: 8, ready: 2, inUse: 1, available: 5 },
    ];

    const Allwards = [
        { name: 'All', total: 136,repair: 9, ready: 25, inUse: 11, available: 100 },
        
    ];

    return (
        <div className='min-h-screen bg-[#CEEDF9]'>
            <div className="space-y-1">
                <div className='relative top-0 w-full'>
                    <div className="bg-[#284D76] shadow-sm h-[125px] w-full rounded-b-[30%] flex flex-col justify-center items-center">
                        <div className='p-4 py-4 flex items-center justify-center'>
                            <h2 className="text-white text-3xl font-bold">อุปกรณ์ทั้งหมด</h2>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[#284D76] px-16 py-6">
                        <span>ประเภท</span>
                        <div className="flex-1">
                            <Select defaultValue="infusion">
                                <SelectTrigger className="w-48 rounded-xl ">
                                    <SelectValue placeholder="เลือกประเภทปั๊ม" />
                                </SelectTrigger>
                                <SelectContent className=" rounded-xl">
                                    <SelectItem value="infusion">Infusion Pump</SelectItem>
                                    <SelectItem value="syringe">Syringe Pump</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>



                
                <div className="flex items-center justify-between text-md text-center px-2">
                    <div className="flex-1" />
                    <div className="flex flex-1 justify-end pr-3">
                    <div className="w-16 text-center text-[#852C2C] ">ซ่อม</div>
                        <div className="w-16 text-center text-green-600 ">พร้อมใช้</div>
                        <div className="w-16 text-center text-red-500 ml-2">ใช้แล้ว</div>
                        <div className="w-16 text-center text-blue-500 ">ใช้อยู่</div>
                    </div>
                </div>

                <div className="space-y-2">
                    {Allwards.map((Allwards) => (
                        <div key={Allwards.name} className="bg-[#FDDD94] p-4 rounded-xl shadow-md">
                            <div className="flex items-center justify-between">
                                <div className='flex flex-col items-center justify-center px-5'>
                                    <span className="font-bold text-blue-900">{Allwards.name}</span>
                                    <div className="w-12 h-8 border-2 bg-white border-blue-900 rounded flex items-center justify-center">
                                        <span className="text-blue-900 font-bold">{Allwards.total}</span>
                                    </div>
                                </div>
                                


                                <span className="text-3xl font-bold text-[#852C2C]">{Allwards.repair}</span>

                                <div className="flex space-x-2">
                                     
                              
                                        
                                        
                                    
                                    <div className="w-16 h-16 border-2 border-[#0E9247] bg-white rounded-lg flex items-center justify-center">
                                        
                                        <span className="text-3xl font-bold text-[#0E9247]">{Allwards.ready}</span>
                                    </div>
                                    <div className="w-16 h-16 border-2 border-[#E14E2D] bg-white rounded-lg flex items-center justify-center">
                                        <span className="text-3xl font-bold text-[#E14E2D]">{Allwards.inUse === 0 ? '-' : Allwards.inUse}</span>
                                    </div>
                                    <div className="w-16 h-16 border-2 border-[#1976D2] bg-white rounded-lg flex items-center justify-center">
                                        <span className="text-3xl font-bold text-[#1976D2]">{Allwards.available}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    {wards.map((ward) => (
                        <div key={ward.name} className="bg-white p-4 rounded-xl shadow">
                            <div className="flex items-center justify-between">
                                <div className='flex flex-col items-center justify-center px-5'>
                                    <span className="font-bold text-blue-900">{ward.name}</span>
                                    <div className="w-12 h-8 border-2 border-blue-900 rounded flex items-center justify-center">
                                        <span className="text-blue-900 font-bold">{ward.total}</span>
                                    </div>
                                </div>
                                

                                <span className="text-3xl font-bold text-[#852C2C]">{ward.repair}</span>

                                <div className="flex space-x-2">
                                    
                                    <div className="w-16 h-16 bg-[#C1E9D0] rounded-lg flex items-center justify-center">
                                        
                                        <span className="text-3xl font-bold text-[#0E9247]">{ward.ready}</span>
                                    </div>
                                    <div className="w-16 h-16 bg-[#FFD5D5] rounded-lg flex items-center justify-center">
                                        <span className="text-3xl font-bold text-[#E14E2D]">{ward.inUse === 0 ? '-' : ward.inUse}</span>
                                    </div>
                                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-3xl font-bold text-blue-500">{ward.available}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

              

               
            </div>
        </div>
    )
}

export default ALLitemPage