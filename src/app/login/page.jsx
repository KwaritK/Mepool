"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Mascot from '../../../public/Meepool.png';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import { useAuth } from '@/context/AuthContext';
// import apiService from '@/services/api';

const LoginPage = () => {
    // const [credentials, setCredentials] = useState({
    //     id: '',
    //     password: ''
    // });
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const router = useRouter();
    // const { login } = useAuth();

    // const handleChange = (e) => {
    //     setCredentials({
    //         ...credentials,
    //         [e.target.name]: e.target.value
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //     setLoading(true);
        
    //     try {
    //         const data = await apiService.login(credentials);
            
    //         // ใช้ฟังก์ชัน login จาก AuthContext
    //         login(data.user, data.token);
            
    //         // นำทางไปยังหน้าที่เหมาะสมตาม role
    //         if (data.user.role === 'admin') {
    //             router.push('/Admin/Dashboard');
    //         } else if (data.user.role === 'technical') {
    //             router.push('/Technical/Ready');
    //         } else {
    //             router.push('/Nurse/Ready');
    //         }
    //     } catch (error) {
    //         setError(
    //             error.response?.data?.error || 
    //             'เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง'
    //         );
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="min-h-screen bg-[#CEEDF9] w-full flex flex-col relative items-center">
            {/* Top curves */}
            <div className='relative top-0 w-full'>
                <div className="bg-white shadow-sm mb-[40px] h-[130px] w-full rounded-b-[70%] flex flex-col justify-center items-center">
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
            <div className="flex justify-center">
                <div className="relative w-72 h-72">
                    <div className="rounded-xl p-4">
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
                className="space-y-5 px-4 max-w-md w-full"
                
            >
                {/* {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )} */}
                
                <div>
                    <input
                        type="text"
                        name="id"
                        placeholder="รหัสผู้ใช้"
                        className="w-full px-6 py-4 shadow-sm rounded-3xl border border-gray-200 focus:outline-none focus:border-blue-500 text-black"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="รหัสผ่าน"
                        className="w-full px-6 py-4 shadow-sm rounded-3xl border border-gray-200 focus:outline-none focus:border-blue-500 text-black"
                    />
                </div>

                <div className='flex justify-center'>
                    <Link href='/Nurse/Ready'>
                    <button
                        type="submit"
                        className="w-36 bg-[#2F519B] text-white py-3 rounded-2xl hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 font-bold"
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
            <div className='relative bottom-0 w-full mt-auto'>
                <div className="bg-white shadow-sm mt-[40px] h-[130px] w-full rounded-t-[70%] flex flex-col justify-center items-center">
                    <div className="text-[#2F519B] font-medium">
                        <p className='text-xl mt-4 font-bold'>Medical Equipment Pool</p>
                        <p className="mt-1 font-bold">การให้บริการเครื่องมือแพทย์ส่วนกลาง</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;