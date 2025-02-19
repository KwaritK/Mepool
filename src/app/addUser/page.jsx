"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function AddUser() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [wardID, setWardID] = useState("");
  const [wards, setWards] = useState([]);
  const [message, setMessage] = useState("");

  // ดึงข้อมูลแผนกจาก API
  useEffect(() => {
    const fetchWards = async () => {
      const res = await fetch("http://localhost:3000/api/ward"); // หรือเส้นทางที่คุณใช้ในการดึงข้อมูลแผนก
      const data = await res.json();
      if (res.ok) {
        setWards(data);
      } else {
        setMessage("❌ ไม่สามารถดึงข้อมูลแผนกได้");
      }
    };
    fetchWards();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // เคลียร์ข้อความก่อน

    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userID, password, name, role, wardID }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ เพิ่มผู้ใช้สำเร็จ!");
      setUserID("");
      setPassword("");
      setName("");
      setRole("user");
      setWardID("");
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  return (
   <div>
    <Navbar/>
    
    <div className=" mt-10 p-6 max-w-md mx-auto bg-slate-500  shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">👤 เพิ่มผู้ใช้ใหม่</h2>
      {message && <p className="mb-2 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white">รหัสผู้ใช้ (ID)</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">รหัสผ่าน</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">ชื่อผู้ใช้</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">บทบาท</label>
          <select
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="technical">Technical</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white">เลือกแผนก</label>
          <select
            className="w-full px-3 py-2 border rounded-lg text-black"
            value={wardID}
            onChange={(e) => setWardID(e.target.value)}
            required
          >
            <option value="">เลือกแผนก</option>
            {wards.map((ward) => (
              <option key={ward.Ward_ID} value={ward.Ward_ID}>
                {ward.Name_ward}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
          บันทึก
        </button>
      </form>
    </div>
    </div> 
  );
}
