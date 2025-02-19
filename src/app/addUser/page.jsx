"use client";
import { useState } from "react";

export default function AddUser() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [wardID, setWardID] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">เพิ่มผู้ใช้ใหม่</h2>
      {message && <p className="mb-2 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">รหัสผู้ใช้ (ID)</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">รหัสผ่าน</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ชื่อผู้ใช้</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">บทบาท</label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
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
          <label className="block text-gray-700">รหัสแผนก (Ward ID)</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={wardID}
            onChange={(e) => setWardID(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
          บันทึก
        </button>
      </form>
    </div>
  );
}
