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
    <div className="w-full  bg-[#0f1056]  text-slate-200">
      <section className="p-4 max-w-[1000px] h-full flex items-center flex-wrap gap-8 ">
        <div className="mt-[5rem]">
          <p className="text-4xl font-bold inline-block border-b-4 border-pink-600 mb-4 ">
            Skills
          </p>
          <p>This are the technologies that I have worked with</p>
        </div>
        <div className=" py-4 px-4 ">
          <img className="w-20" src={Html} alt="html" />
          <p>HTML</p>
        </div>
        <div className=" py-4 px-4">
          <img className="w-20" src={Css} alt="css" />
          <p>CSS</p>
        </div>
        <div className=" py-4 px-4">
          <img className="w-20" src={JavaScript} alt="js" />
          <p>JavaScript</p>
        </div>
        <div className=" py-4 px-4">
          <img className="w-20" src={ReactJs} alt="react" />
          <p>React</p>
        </div>
        <div className=" py-4 px-4">
          <img className="w-20" src={Tailwind} alt="tailwind" />
          <p>Tailwind</p>
        </div>
        <div className=" py-4 px-4">
          <img className="w-20" src={Node} alt="node" />
          <p>Node</p>
        </div>
        <div className="py-4 px-4">
          <img className="w-20" src={Github} alt="github" />
          <p>Github</p>
        </div>
        <div className="py-4 px-4">
          <img className="w-20" src={firebase} alt="firebase" />
          <p>Firebase</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
