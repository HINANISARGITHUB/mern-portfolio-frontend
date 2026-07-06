import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <>

    
      <BrowserRouter>
     

        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>  
    </>
  );
}

export default App;
