import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen  bg-[#0f1056] text-slate-200">
      <section className=" w-full h-full px-5  flex flex-col justify-center ">
        <div>
          <h2 className=" mb-8 text-4xl inline-block text-[#ccd6f6] font-bold border-b-4  border-pink-700 ">
            About
          </h2>
        </div>
        <div className="max-w-[1000px]  mb-4">
          <span className="text-4xl font-bold">
            Hi. I'm Lee, nice to meet you. Please take a look around.
          </span>
        </div>
        <p className="mt-4">
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips?
        </p>
      </section>
    </div>
  );
};

export default About;
