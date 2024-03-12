import React, { useState } from "react";
import logo from "../Assets/Logo.jpg";
import moon from "../Assets/Moon.jpg";
import About from "./About";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex justify-between p-8 border ${
        isDarkMode ? "bg-white text-black" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className="font-bold cursor-pointer">
          <Link to={"/"}>ANISH KUMAR SINHA</Link>
        </p>
      </div>
      <div>
        <ul className="flex gap-10 font-bold items-center ">
          <li>Home</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Resume</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>
            <img src={moon} alt="" onClick={handleDarkModeToggle} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
