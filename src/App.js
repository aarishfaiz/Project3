import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar isDarkMode={false} />
        <Routes>
          <Route path="/" element={<Hero isDarkMode={false} />} />
          <Route path="/about" element={<About isDarkMode={false} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
