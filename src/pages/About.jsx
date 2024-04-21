import React from "react";

const About = () => {
  return (
    <main className=" w-full h-screen  bg-[#0f1056] text-slate-200">
      <section className=" max-w-[1000px] w-full h-full px-5  flex flex-col justify-center mx-auto  ">
        <div className=" sm:text-center mb-5">
          <h2 className=" sm:text-4xl mb-4  sm:mb-8 text-2xl inline-block text-[#ccd6f6] font-bold border-b-4  border-pink-700 ">
            About
          </h2>
        </div>
        <div className="  sm:flex sm:items-center  ">
          <span className="inline-block text-xl sm:4xl font-bold sm:w-[40%] mb-5  ">
            Hi. I'm Lee, Nice to meet you. Please take a look around.
          </span>
          <p className=" text-xl sm:w-[60%]  sm:text-justify ">
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
