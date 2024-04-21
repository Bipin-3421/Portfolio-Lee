import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  return (
    <div className="w-full h-screen  bg-[#0f1056] text-slate-300">
      <section className="max-w-[1000px] w-full h-full p-4 flex flex-col   ">
        <div className="mt-[5rem]">
          <p className="text-4xl font-bold inline-block border-b-4 border-pink-600 mb-4 ">
            Projects
          </p>
          <p>Check out some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((project) => (
            <div
              key={project.id}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              style={{ backgroundImage: `url(${project.img})` }}
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {project.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={project.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={project.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
