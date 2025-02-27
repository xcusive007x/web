import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import kurumiImage from "../assets/kuromi.png"; // เพิ่มรูปภาพ
import Photo3 from "../assets/3.jpg"
import Photo4 from "../assets/4.jpg"
import Photo6 from "../assets/6.jpg"
import Photo10 from "../assets/10.jpg"

const FinalPage = () => {
    const navigate = useNavigate();
    const [showInput, setShowInput] = useState(false);
    const [reason, setReason] = useState("");
    const [actionType, setActionType] = useState("");

    const handleClick = (choice) => {
        setActionType(choice);
        setShowInput(true);
    };

    const handleSubmit = async () => {
        if (reason.trim() === "") {
            alert("กรุณากรอกเหตุผล");
            return;
        }
        await axios.post("http://localhost:5000/save-action", {
            passcode: "0429",
            action: actionType,
            message: reason
        });
        alert("บันทึกข้อมูลเรียบร้อย");
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-purple-600 text-white">
            <img src={kurumiImage} alt="Kurumi" className="w-48 mb-4 rounded-full shadow-lg" />
            <img src={Photo3} alt="2" class="img3" />
            <img src={Photo4} alt="2" class="img4" />
            <img src={Photo6} alt="2" class="img8" />
            <img src={Photo10} alt="2" class="img10" />
            <h1 className="text-4xl font-bold mb-6">อยากให้กลับมาจังเลย</h1>
            {!showInput ? (
                <div className="flex space-x-4">
                    <button 
                        onClick={() => handleClick("อยากกลับไป")} 
                        className="bg-purple-800 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md transition duration-300"
                    >
                        อยากกลับไป
                    </button>
                    <button 
                        onClick={() => handleClick("ไม่อยากกลับไป")} 
                        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition duration-300"
                    >
                        ไม่อยากกลับไป
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center w-full px-4">
                    <textarea 
                        value={reason} 
                        onChange={(e) => setReason(e.target.value)} 
                        className="p-3 border-2 border-purple-300 rounded-xl w-80 text-black"
                        placeholder="อยากบอกจะบอกอะไรกันมั้ย"
                    />
                    <button 
                        onClick={handleSubmit} 
                        className="mt-4 bg-green-500 hover:bg-green-400 text-white px-5 py-2 rounded-xl shadow-md transition duration-300"
                    >
                        ส่งคำตอบ
                    </button>
                </div>
            )}
        </div>
    );
};

export default FinalPage;
