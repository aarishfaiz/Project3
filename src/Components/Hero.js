import React from "react";
import background from "../Assets/Hero Background.jpg";
import heroImage from "../Assets/Hero Image.png";
import hand from "../Assets/Wave.jpg";
import facebook from "../Assets/Facebook.jpg";
import insta from "../Assets/Instagram.png";
import twiter from "../Assets/Twitter.png";
import git from "../Assets/GitHub.png";
import linkedin from "../Assets/LinkedIn.png";
import tele from "../Assets/Telegram.png";

const Hero = ({ isDarkMode }) => {
  return (
    <>
      <div
        className={`flex justify-evenly h-200 ${
          isDarkMode ? "bg-white text-black" : ""
        }`}
      ></div>
      <div className="flex justify-evenly h-200">
        <div className=" mt-10 w-1/2 h-200">
          <span className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold  rounded-l-full rounded-es-lg rounded-r-full border-r-0 p-2 mt-2 ">
            Hello!
          </span>
          <p className="font-bold text-3xl mt-2">
            I'm <span className="underline text-gray-500 font-bold">Anish</span>
          </p>
          <p className="text-xl text-gray-500 mt-2">
            UI/UX designer, Front-End developer & Thinker based in India{" "}
          </p>
          <div className="flex gap-10 mt-16">
            <button className=" shadow-lg  shadow-black bg-gradient-to-r from-orange-500 to-orange-300 text-xl p-4 text-white font-bold border rounded-lg ">
              Download CV
            </button>
            <button className="shadow-lg  shadow-black bg-gradient-to-r from-black to-black text-xl p-4 text-white font-bold border rounded-lg ">
              Get in Touch!
            </button>
          </div>
          <div className="mt-10 ml-2">
            <ul className=" mt-4 flex gap-2 flex-col">
              <li>
                <img src={facebook} alt="" srcset="" />
              </li>
              <li>
                <img src={insta} alt="" srcset="" />
              </li>
              <li>
                <img src={twiter} alt="" srcset="" />
              </li>
              <li>
                <img src={git} alt="" srcset="" />
              </li>
              <li>
                <img src={linkedin} alt="" srcset="" />
              </li>
              <li>
                <img src={tele} alt="" srcset="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <img src={background} alt="" className="z-10" srcset="" />
          <img
            src={heroImage}
            className="z-20 absolute top-20 right-50"
            alt=""
          />
          <div className=" font-bold text-xl absolute -rotate-90 bottom-40 right-0 mr-0 z-40">
            sinhaanishkumar@outlet.com
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
