"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Mascot from '../../../public/Meepool.png';
import Link from 'next/link';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

const LoginPage = () => {

    //  const [id, setId] = useState("");
    //  const [password, setPassword] = useState("");
    //  const [error, setError] = useState("");

    //  const router = useRouter();

    //  const handleSubmit = async (e) => {
    //      e.preventDefault();
    //     try {
            
    //         const res = await signIn("credentials",{
    //             id,password,redirect:false
    //         })

    //         if(res.error){
    //             setError("Invalid credentials");
    //             return
    //         }
    //         router.replace("welcome");

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (

        <div className="min-h-screen bg-[#CEEDF9] w-full flex flex-col relative items-center">



            {/* Top curves */}
            <div className='relative top-0 w-full'>
                <div className="  bg-white  shadow-sm   mb-[40px]  h-[130px] w-full rounded-b-[70%] flex flex-col justify-center items-center ">

                    <Image
                        src={Logo}
                        alt="Hospital Logo"
                        width={250}
                        height={50}
                        className="object-contain"
                    />

                </div>
            </div>


            {/* Mascot Icon */}
            <div className="flex justify-center ">
                <div className="relative w-72 h-72">
                    <div className=" rounded-xl p-4">
                        <Image
                            src={Mascot}
                            alt="Medical Equipment Pool Mascot"
                            width={310}
                            height={320}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>



            {/* Login Form */}
            <form 
            className="space-y-5 px-4 max-w-md">

                {/* {error && (
                    <div className=' bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                        {error}
                    </div>
                )} */}
                <div>
                    <input
                        // onChange={(e) => setId(e.target.value)}
                        type="text"
                        placeholder="รหัสผู้ใช้"
                        className="w-full px-6 py-4  shadow-sm rounded-3xl border border-gray-200 focus:outline-none focus:border-blue-500 text-black"
                    />
                </div>
                <div>
                    <input
                        // onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="รหัสผ่าน"
                        className="w-full px-6 py-4 shadow-sm rounded-3xl border border-gray-200 focus:outline-none focus:border-blue-500 text-black"
                    />
                </div>

                <div className='flex justify-center'>
                    <Link href='/Ready'>
                    <button
                        type="submit"
                        className="w-36 bg-[#2F519B] text-white py-3 rounded-2xl hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
                    >
                        <span>เข้าสู่ระบบ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    </Link>
                </div>

            </form>



            {/* Footer Text */}
            <div className='relative bottom-0 w-full'>
                <div className="  bg-white  shadow-sm   mt-[40px]  h-[130px] w-full rounded-t-[70%] flex flex-col justify-center items-center ">
                    <div className=" text-[#2F519B] font-medium ">
                        <p className=' text-xl mt-4 font-bold'>Medical Equipment Pool</p>
                        <p className="mt-1 font-bold">การให้บริการเครื่องมือแพทย์ส่วนกลาง</p>
                    </div>
                </div>
            </div>
        </div>
     
    );
};


export default LoginPage;