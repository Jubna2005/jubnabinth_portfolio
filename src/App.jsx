import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";;
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ParticleBackground from "./components/ParticleBackground";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ParticleBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;