import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/index.tsx";
import Home from "../pages/Home/index.tsx";
import About from "../pages/About/index.tsx";
import Company from "../pages/Company/index.tsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="company" element={<Company />} />
      </Routes>
    </div>
  );
}

export default App;
