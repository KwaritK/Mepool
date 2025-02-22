import React from "react"
import Link from "next/link"
import Image from "next/image"
import Data from "../../../public/Group.png"
import Main from "../../../public/mainicon.png"
import I3 from "../../../public/Vector.png"

function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white  p-4">
      <div className="flex justify-around items-center">
        <Link href='/History'>
          <div className="flex flex-col items-center gap-1">
            <Image src={Data} alt="ข้อมูล " className="text-blue-500" width={40} height={32} />
            <span className="text-xs text-[#5D9AEA] font-bold">ข้อมูลการใช้งาน</span>
          </div>
        </Link>

        <Link href="/Nurse/Ready">
          <div className="flex flex-col items-center gap-1">
            <Image src={Main} alt=" สถานะ " width={50} height={40} />
            <span className="text-xs text-[#5D9AEA] font-bold ">อุปกรณ์</span>
          </div>
        </Link>

        <Link href="/Nurse/Allitems">
          <div className="flex flex-col items-center gap-1">

            <Image src={I3} alt=" อุปกรณ์ " className="text-blue-500" width={40} height={32} />
            <span className="text-xs text-[#5D9AEA] font-bold ">อุปกรณ์ทั้งหมด</span>
          </div>
        </Link>
      </div>
    </nav>

  )
}

export default Footer
