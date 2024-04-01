import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <main className="w-full h-custom px-8 bg-[#0f1056] ">
      <section className=" h-full flex flex-col justify-center">
        {/* <TypeAnimation
          className="text-4xl font-bold md:text-7xl  max-w-[1000px] h-[20px] text-[#ccd6f6] "
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Full Stack Software Development",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Web Development",
            1000,
          ]}
          wrapper="h2"
          speed={50}
          // style={{
          //   fontSize: "10px",
          //   height: "20px",
          //   backgroundColor: "black",
          //   display: "inline-block",
          //   color: "#fff",
          // }}
          repeat={Infinity}
        /> */}
        <p className="text-pink-700 md:text-2xl">hi,my name is</p>
        <h1 className="text-[20px] md:text-7xl text-[#ccd6f6] font-bold">
          Lee Baral
        </h1>
        <TypeAnimation
          className=" cursor-inline inline-block text-[20px] mb-8  font-bold md:text-5xl  max-w-[1000px] h-[20px]  text-[#ccd6f6]  "
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Full Stack Software Development",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Web Development",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={false}
        />
        {/* <h2 className="text-4xl md:text-7xl text-[#8892b0] font-bold">
          I'm a Full Stack Software Developer.
        </h2> */}
        <p className="text-xl max-w-[1000px]  text-[#a3a7b4] py-4">
          I'm a Full Stack Software Developer specializing in building scalable
          and robust full stack web applications so feel free to contact me as
          soon as possible
        </p>
        <div>
          <button className="text-white px-3 py-3  bg-pink-600 flex-grow-0 flex-shrink-0  ">
            View Work
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
