import React from "react";

const Home = () => {
  return (
    <main className="w-full h-custom px-8 bg-[#0f1056] ">
      <section className=" max-w-[1000px] h-full flex flex-col justify-center ">
        <p className="text-pink-700">hi,my name is</p>
        <h1 className="text-4xl md:text-7xl text-[#ccd6f6] font-bold">
          Lee Baral
        </h1>
        <h2 className="text-4xl md:text-7xl text-[#8892b0] font-bold">
          I'm a Full Stack Software Developer.
        </h2>
        <p className="text-2xl md:text-4xl text-[#a3a7b4] py-4">
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
