import React from "react";
import rectangle from "../Assets/Rectangle.png";
import vector3 from "../Assets/Vector 3.png";
import vector5 from "../Assets/Vector 5.png";
import vector4 from "../Assets/Vector 4.png";
const About = () => {
  return (
    <>
      <div className=" ">
        <img src={rectangle} className="absolute -left-40 top-5 h-90" alt="" />
        <img
          src={vector3}
          alt=""
          className="absolute h-30 h-40 right-3 top-60"
        />
        <img
          src={vector5}
          alt=""
          className="absolute h-30 h-40  bottom-10 right-20"
        />
        <img
          src={vector4}
          alt=""
          className="absolute h-30 h-40  bottom-10 left-20"
        />
        <div className="flex justify-center items-center">
          <div className="flex  flex-col justify-center items-center w-1/2 border mt-20">
            <div>
              <h3 className="text-2xl">
                <span className="font-bold">T</span>his is It :{")"}
              </h3>
            </div>
            <div>
              <br />
              <p className="text-gray-500">
                Anish Kr. Sinha is an Indian{" "}
                <span className="text-black">
                  {" "}
                  UI/UX Designer & Front End Developer
                </span>
                with a passion for designing beautiful and fuctional user
                experiences. Typically, hes Driven & permanently Curious. Hes
                obsessed with designing things and even more obsessed with
                designing cool & clean stuff for the web and mobile. He has been
                in the business of creating since he hung his first painting on
                the wall when he was 11.
              </p>
              <br />
              <p className="text-gray-500">
                He holds a{" "}
                <span className="text-black">
                  bachelor degree in Computer Applications
                </span>
                . During his graduation, he has been actively involved in the
                web design community for the last 3 years. he has designed
                websites for small businesses, events, nonprofits and more.
                Currently hes based in Bihar, India. Where hes working as an
                independent creative.
              </p>
              <br />
              <p className="text-gray-500">
                His interests, however, extend beyond the web and he loves
                helping people with branding and print design. He even loves
                designing <span className="text-black">3D floor plan</span>
              </p>
              <p className="text-gray-500">
                When hes not designing, hes probably hanging out with his
                girlfriend, watching series, sketching or messing around on
                something inspired by YouTube tutorials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
