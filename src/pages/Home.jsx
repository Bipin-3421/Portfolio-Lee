import React from "react";
import { ReactTyped } from "react-typed";

const Home = ({ mobileMenu }) => {
  return (
    <main className="w-full h-custom  bg-[#0f1056]">
      <section className="max-w-[1000px] px-8 mx-auto h-full flex flex-col justify-center">
        <p className="text-pink-700 text-2xl md:text-2xl">hi, my name is</p>
        <h1 className="text-[27px] md:text-7xl text-[#ccd6f6] font-bold">
          Lee Baral
        </h1>
        <h2 className="text-[25px] mb-[40px] font-bold md:text-5xl max-w-[1000px] h-[20px] text-[#ccd6f6] ">
          I'm a{" "}
          <ReactTyped
            strings={["Full Stack Software Developer", "React Developer"]}
            typeSpeed={20}
            loop
            backSpeed={20}
            cursorChar={mobileMenu ? "" : "!"}
            showCursor={!mobileMenu}
          />
        </h2>
        <p className="text-[21px] max-w-[1000px] text-[#a3a7b4] py-4">
          I'm a Full Stack Software Developer specializing in building scalable
          and robust full stack web applications so feel free to contact me as
          soon as possible
        </p>
        <div>
          <button className="text-white px-3 py-3 bg-pink-600 flex-grow-0 flex-shrink-0 hover:bg-pink-800 md:text-3xl text-[20px]">
            View Work
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
