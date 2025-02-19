"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";


export default function AddEquipmentForm() {
    const [Type, setType] = useState("");
    const [Asset_Number, setAsset_Number] = useState("");
    const [Status, setStatus] = useState("");
    const [Ward_ID, setWard_ID] = useState("");
    const [Brands, setBrands] = useState("");
    const [Models, setModels] = useState("");
    const [Last_Check, setLast_Check] = useState("");
    const [Image, setImage] = useState("");
    const [message, setMessage] = useState("");
    const [wards, setWards] = useState([]);

    

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

        const res = await fetch("http://localhost:3000/api/item", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  Type, Asset_Number, Status, Ward_ID ,Brands,Models,Last_Check,Image}),
        });

        const data = await res.json();
        if (res.ok) {
            
            setMessage("✅ เพิ่มอุปกรณ์สำเร็จ!");
                setType("");
                setAsset_Number("");
                setStatus("");
                setWard_ID("");
                setBrands("");
                setModels("");
                setLast_Check("");
                setImage("");
            
        } else {
            
            setMessage(`❌ ${data.error}`);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-md mx-auto mt-10 p-4 bg-slate-500 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">🩺 เพิ่มอุปกรณ์</h2>
                {message && <p className="mb-2 text-green-500">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white">ประเภท</label>
                        <select className="w-full px-3 py-2 border rounded-lg text-black" 
                        name="Type" 
                        value={Type} 
                        onChange={(e) => setType(e.target.value)}
                        required>
                            <option className="w-full px-3 py-2 border rounded-lg text-black" >เลือกประเภท</option>
                            <option value="Infusion pump">Infusion pump</option>
                            <option value="Syringe pump">Syringe pump</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">รหัสสินทรัพย์</label>
                        <input type="text"
                            className="w-full px-3 py-2 border rounded-lg text-black"
                            name="Asset_Number"
                            placeholder="Asset Number 00-00-0000-0000"
                            value={Asset_Number}
                            onChange={(e) => setAsset_Number(e.target.value)} 
                            required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">สถานะ</label>
                        <select className="w-full px-3 py-2 border rounded-lg text-black" 
                        name="Status" 
                        value={Status} 
                        onChange={(e) => setStatus(e.target.value)}>
                            <option value="">เลือกสถานะ</option>
                            <option value="0">On Duty</option>
                            <option value="1">Ready</option>
                            <option value="2">Used</option>
                            <option value="3">Waiting for Repair</option>
                            <option value="4">In Store</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">แผนก</label>
                        <select className="w-full px-3 py-2 border rounded-lg text-black" 
                        name="Ward_ID" 
                        value={Ward_ID} 
                        onChange={(e) => setWard_ID(e.target.value)} >
                            <option value="">เลือกแผนก</option>
                            {wards.map((ward) => (
                                <option key={ward.Ward_ID} value={ward.Ward_ID}>
                                    {ward.Name_ward}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">ยี่ห้อ</label>
                        <select className="w-full px-3 py-2 border rounded-lg text-black" 
                        name="Brands" 
                        value={Brands} 
                        onChange={(e) => setBrands(e.target.value)}
                         required>
                            <option value="">เลือกยี่ห้อ</option>
                            <option value="TERUMO">TERUMO</option>
                            <option value="FRESENIUS">FRESENIUS</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">รุ่น</label>
                        <select className="w-full px-3 py-2 border rounded-lg text-black" 
                        name="Models" 
                        value={Models} 
                        onChange={(e) => setModels(e.target.value)} 
                        required>
                            <option value="">เลือกรุ่น</option>
                            <option value="TE-135">TE-135</option>
                            <option value="TE-171">TE-171</option>
                            <option value="TE-LF600">TE-LF600</option>
                            <option value="TE-LM700">TE-LM700</option>
                            <option value="AGILIA">AGILIA</option>
                            <option value="TE-331">TE-331</option>
                            <option value="TE-SS700">TE-SS700</option>
                            <option value="TE-SS730">TE-SS730</option>
                            <option value="INJECTOMAT AGILIA"> INJECTOMAT AGILIA</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">วันที่ตรวจ</label>
                        <input type="datetime-local"
                            className="w-full px-3 py-2 border rounded-lg text-black"
                            name="Last_Check"
                            value={Last_Check}
                            onChange={(e) => setLast_Check(e.target.value)}  />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">รูปภาพ</label>
                        <input className="w-full px-3 py-2 border rounded-lg text-black" 
                        type="text" name="Image" 
                        placeholder="Image URL" 
                        value={Image} 
                        onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        เพิ่มอุปกรณ์
                    </button>
                </form>
            </div>
        </div>
    );
}
