import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Photo5 from "../assets/5.JPG"
import Photo7 from "../assets/7.JPG"

const LoginPage = () => {
    const [passcode, setPasscode] = useState("");
    const [pass, setPass] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [reason, setReason] = useState("");
    const [actionType, setActionType] = useState("");
    const navigate = useNavigate();


    const waitClick = (choice) => {
        setActionType(choice);
        setShowInput(true);
    };
    const handleLogin = async () => {
        if (passcode === "0429") {
            await axios.post("http://localhost:5000/save-action", {
                passcode,
                action: "Login Successful",
                message: "User logged in successfully"
            });
            navigate("/firsthome");
        } else {
            alert("รหัสผ่านผิด!");
        }
    }
    const passButton = async () => {
        if (pass) {
            await axios.post("http://localhost:5000/save-action", {
                pass,
                action: "ผ่าน",
                message: "ขอบคุณครับ"
            });
            navigate("/");
        }
    }
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
        <div className="flex flex-col items-center justify-center h-screen bg-purple-200">
            <img src={Photo5} alt="1" class="img5" />
            <img src={Photo7} alt="1" class="img7" />
            <h2 className="text-3xl font-bold mb-4">เค้ามาง้อ แต่ถ้ารู้สึกไม่ดีกับเว็บนี้ กดปุ่มขอผ่านได้เลยนะครับ</h2>
            <h1 className="text-3xl font-bold mb-4">กรอก Passcode</h1>
            <h1 className="text-3xl font-bold mb-4">passcodeเป็นวันเกิดของเราสองคนรวมกันคนละ2ตัวเลขแบบนี้ -> 0000</h1>
            <h6>ถ้าไม่รู้จริงๆ ทักมาถาม</h6>

            {!showInput ? (
                <div className="flex space-x-4">
                    <input
                        type="password"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        className="p-2 border rounded-lg"
                    />
                    <button
                        onClick={handleLogin}
                        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg"
                    >
                        เข้าสู่ระบบ✅
                    </button>
                    <button 
                        onClick={() => waitClick("ผ่าน")} 
                        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition duration-300"
                    >
                        ผ่าน
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center w-full px-4">
                    <textarea 
                        value={reason} 
                        onChange={(e) => setReason(e.target.value)} 
                        className="p-3 border-2 border-purple-300 rounded-xl w-80 text-black"
                        placeholder="บอกเหตุผลหน่อยได้มั้ย"
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


export default LoginPage;