import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import kurumiImage from "../assets/kuromi.png";
import Photo1 from "../assets/1.jpg"
import Photo2 from "../assets/2.jpg"
// import Photo3 from "../assets/3.jpg"
// import Photo4 from "../assets/4.jpg"
// import Photo5 from "../assets/5.jpg"
// import Photo6 from "../assets/6.jpg"
// import Photo7 from "../assets/7.jpg"
// import Photo8 from "../assets/8.jpg"
// import Photo9 from "../assets/9.jpg"
// import Photo10 from "../assets/10.jpg"
// import Photo11 from "../assets/11.jpg"

const FirstHomePage = () => {
    const navigate = useNavigate();
    const [chance, setNewChance] = useState();
    const [nochance, setNoChance] = useState();

    const chanceButton = async () => {
        await axios.post("http://localhost:5000/save-action", {
            passcode: "0429",
            action: "ให้โอกาส"
        });
        navigate("/home");
    }
    const NochanceButton = async () => {
        await axios.post("http://localhost:5000/save-action", {
            passcode: "0429",
            action: "ไม่ให้ให้โอกาส"
        });
        navigate("/");
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-purple-600 text-white">
            <img src={kurumiImage} alt="Kurumi" className="w-48 mb-4 rounded-full shadow-lg" />
            <img src={Photo1} alt="1" class="img1" />
            <img src={Photo2} alt="2" class="img2" />
            <h2 className="text-4xl font-bold mb-6">ก่อนอื่นเลยผมขอโทษที่ผมทำร้ายความรู้สึกแจมนะ ผมแย่มากๆ</h2>
            <h2 className="text-4xl font-bold mb-6">ผมอยากได้โอกาสอีกซักครั้ง ผมจะปรับปรุงตัวอย่างแน่นอน ผมสัญญา</h2>
            <h2 className="text-4xl font-bold mb-6">ผมรู้ว่าผม ผิดอยู่3อย่าง</h2>
            <h2 className="text-4xl font-bold mb-6">1.ผมไม่เคยง้อแจมในตอนที่แจมงอนผมเลย</h2>
            <h2 className="text-4xl font-bold mb-6">2.ผมไม่เคยเซอร์ไพร์สอะไรแจมเลย</h2>
            <h2 className="text-4xl font-bold mb-6">3.ผมไม่มีความโรแมนติกเลย ทำเหมือนทุกวันเป็นธรรมดา แม้จะเป็นวันเทศกาล หรือวันครบรอบ</h2>
            <h2 className="text-4xl font-bold mb-6">ในบางครั้งผมอาจจะอารมณ์ร้อน ผมจะปรับปรุงครับ</h2>
            <h2 className="text-4xl font-bold mb-6">ผมจะทำหน้าที่ให้ดีมากขึ้น ผมขอโทษจริงๆ</h2>
            <div className="flex space-x-4">
                <button
                    onClick={chanceButton}
                    className="bg-white text-black px-6 py-3 rounded-xl shadow-md transition duration-300 min-w-[120px] text-lg"
                >
                    ให้โอกาส
                </button>
                <button
                    onClick={NochanceButton}
                    className="bg-white text-black px-6 py-3 rounded-xl shadow-md transition duration-300 min-w-[120px] text-lg"
                >
                    ไม่ให้โอกาส
                </button>
            </div>
        </div>

    );
};

export default FirstHomePage;
