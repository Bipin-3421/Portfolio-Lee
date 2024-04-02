import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <Router>
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <Routes>
        <Route path="/" element={<Home mobileMenu={mobileMenu} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
