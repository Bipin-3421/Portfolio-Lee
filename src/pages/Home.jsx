import React from "react";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

const Home = ({ mobileMenu }) => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-screen  bg-[#0f1056] ">
      <section className="max-w-[1000px] mb-8 px-8 mx-auto h-full flex flex-col justify-center  ">
        <p className="text-pink-700  md:text-2xl">hi, my name is</p>
        <h1 className="text-4xl md:text-2xl text-[#ccd6f6] font-bold">
          Lee Baral
        </h1>
        <h2 className="text-3xl mb-[80px] font-bold md:text-5xl max-w-[1000px] h-[20px] text-[#ccd6f6] ">
          I'm a{" "}
          <ReactTyped
            strings={[
              "Full Stack Software Developer",
              "Software Engineer",
              "React Developer",
              "Lead Guitar Player",
            ]}
            typeSpeed={20}
            loop
            backSpeed={20}
            cursorChar={mobileMenu ? "" : "!"}
            showCursor={!mobileMenu}
          />
        </h2>
        <p className="text-[20px]  max-w-[1000px] word-spacing-4 text-[#a3a7b4] mb-6">
          I'm a Full Stack Software Developer specializing in building scalable
          and robust full stack web applications so feel free to contact me as
          soon as possible
        </p>
        <div>
          <button
            onClick={() => navigate("/work")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-blue-900 rounded-md group-hover:bg-opacity-0">
              View Work
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
