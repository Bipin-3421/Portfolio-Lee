import React from "react";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
const Header = ({ mobileMenu, setMobileMenu }) => {
  const navigate = useNavigate();
  return (
    <header className="fixed w-full h-[70px] bg-[#000042] flex justify-between items-center ">
      <img
        src={Logo}
        alt="Logo"
        className="w-[150px]"
        onClick={() => navigate("/")}
      />
      <nav>
        <ul className="hidden md:flex md:text-[1.5rem]  cursor-pointer">
          <li className="mr-8">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-8">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-8">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="mr-8">
            <Link to="/work">Work</Link>
          </li>
          <li className="mr-8">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <nav className="md:hidden z-10">
        {mobileMenu ? (
          <AiOutlineClose
            onClick={() => setMobileMenu(false)}
            className="mr-4  text-slate-100 text-2xl "
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setMobileMenu(true)}
            className="mr-4  text-slate-100 text-2xl  "
          />
        )}
      </nav>
      <div
        className={
          mobileMenu
            ? "absolute  top-0 right-0 bg-inherit w-[55%] h-screen flex justify-center flex-col items-center "
            : "hidden"
        }
      >
        <ul className="text-[20px] ">
          <li className="py-8 ">
            <Link to="/">Home</Link>
          </li>
          <li className="py-8">
            <Link to="/about">About</Link>
          </li>
          <li className="py-8">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="py-8">
            <Link to="/work">Work</Link>
          </li>
          <li className="py-8">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
