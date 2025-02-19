"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AddWard() {
  const [wardID, setWardID] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("http://localhost:3000/api/ward", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Ward_ID: wardID, Name_ward: name }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ เพิ่มแผนกสำเร็จ!");
      setWardID("");
      setName("");
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  return (
    <div > 
      <Navbar/>
    
    <div className="mt-10 max-w-md mx-auto p-6 bg-slate-500 rounded-xl shadow-md space-y-4 ">
      
      <h2 className="text-xl font-semibold">🏥 เพิ่มข้อมูลแผนก</h2>

      {message && <p className="text-sm text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Ward ID</label>
          <input
            type="text"
            value={wardID}
            onChange={(e) => setWardID(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
            required
          />
        </div>
        <div>
          <label className="block font-medium">ชื่อแผนก</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          เพิ่มแผนก
        </button>
      </form>
    </div>
    </div>
  );
}
