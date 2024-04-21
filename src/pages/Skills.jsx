import React from "react";
import Html from "../assets/images/html.png";
import ReactJs from "../assets/images/react.png";
import JavaScript from "../assets/images/javascript.png";
import Css from "../assets/images/css.png";
import Tailwind from "../assets/images/tailwind.png";
import Node from "../assets/images/node.png";
import MongoDB from "../assets/images/mongo.png";
import firebase from "../assets/images/firebase.png";
import Github from "../assets/images/github.png";
const Skills = () => {
  return (
    <main className="w-full sm:h-screen  bg-[#0f1056]  text-slate-200">
      <section className="p-4 max-w-[1000px] mx-auto h-full flex items-center sm:justify-center sm:flex-nowrap sm:flex-col  flex-wrap">
        <div className="mt-[5rem] md:w-full ">
          <div className="sm:text-center  ">
            <p className="text-2xl sm:text-4xl font-bold inline-block border-b-4 border-pink-600 mb-4 ">
              Skills
            </p>
          </div>
          <p className="font-bold sm:text-xl sm:mb-[2rem] sm:px-4 sm:mt-6">
            This are the technologies that I am working with:
          </p>
        </div>
        <div className="flex gap-10 flex-wrap">
          <div className=" py-4 px-4 ">
            <img className="w-20" src={Html} alt="html" />
            <p className="text-center pt-2">HTML</p>
          </div>
          <div className=" py-4 px-4">
            <img className="w-20" src={Css} alt="css" />
            <p className="text-center pt-2">CSS</p>
          </div>
          <div className=" py-4 px-4">
            <img className="w-20" src={JavaScript} alt="js" />
            <p className="text-center pt-2">JavaScript</p>
          </div>
          <div className=" py-4 px-4">
            <img className="w-20" src={ReactJs} alt="react" />
            <p className="text-center pt-2">React</p>
          </div>
          <div className=" py-4 px-4">
            <img className="w-20" src={Tailwind} alt="tailwind" />
            <p className="text-center pt-2">Tailwind</p>
          </div>
          <div className=" py-4 px-4">
            <img className="w-20" src={Node} alt="node" />
            <p className="text-center pt-2">Node</p>
          </div>
          <div className="py-4 px-4">
            <img className="w-20" src={Github} alt="github" />
            <p className="text-center pt-2">Github</p>
          </div>
          <div className="py-4 px-4">
            <img className="w-20" src={firebase} alt="firebase" />
            <p className="text-center pt-2">Firebase</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
