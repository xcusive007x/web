import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FinalPage from "./pages/FinalPage";
import FirstHomePage from "./pages/FirstHomePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/firsthome" element={<FirstHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
