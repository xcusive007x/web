import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import kuromiImage from "../assets/kuromi.png";
import "../styles.css";
// import Photo3 from "../assets/3.jpg"
// import Photo4 from "../assets/4.jpg"
// import Photo6 from "../assets/6.jpg"
import Photo8 from "../assets/8.jpg"
import Photo9 from "../assets/9.jpg"
// import Photo10 from "../assets/10.jpg"
import Photo11 from "../assets/11.jpg"

const HomePage = () => {
    const navigate = useNavigate();
    const [noButtonStyle, setNoButtonStyle] = useState({
        position: "relative",
        transition: "all 0.3s ease-in-out",
        transform: "translate(0, 0)"
    });

    const handleYesClick = async () => {
        await axios.post("http://localhost:5000/save-action", {
            passcode: "0429",
            action: "คิดถึง"
        });
        navigate("/final");
    };

    const moveNoButton = () => {
        const randomX = Math.random() * (window.innerWidth - 120);
        const randomY = Math.random() * (window.innerHeight - 60);
        setNoButtonStyle({
            position: "absolute",
            left: `${randomX}px`,
            top: `${randomY}px`,
            transition: "all 0.3s ease-in-out",
            transform: "translate(0, 0)",
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-purple-300 text-white">
            <img src={kuromiImage} alt="Kuromi" className="w-48 mb-4 rounded-full shadow-lg" />
            <h1 className="text-4xl font-bold mb-6">คิดถึงกันบ้างมั้ย</h1>
            <img src={Photo11} alt="1" class="img11" />
            <img src={Photo9} alt="1" class="img9" />
            <img src={Photo8} alt="1" class="img8" />
            <div className="flex gap-8">
                <button 
                    onClick={handleYesClick} 
                    className="bg-white text-black px-6 py-3 rounded-xl shadow-md transition duration-300 min-w-[120px] text-lg"
                >
                    คิดถึง
                </button>
                <button 
                    style={noButtonStyle} 
                    onMouseEnter={moveNoButton} 
                    onClick={moveNoButton} 
                    className="bg-white text-black px-6 py-3 rounded-xl shadow-md transition duration-300 min-w-[120px] text-lg"
                >
                    ไม่คิดถึง
                </button>
            </div>
        </div>
    );
};

export default HomePage;
