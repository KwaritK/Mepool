import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
// app/page.tsx หรือ page.js
import { redirect } from 'next/navigation';



export default function Home() {
   redirect('/Login');
}
