import React from "react";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="w-full h-[100px] bg-[#000042] flex justify-between items-center ">
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "200px" }}
        onClick={() => navigate("/")}
      />
      <nav>
        <ul className="hidden md:flex md:text-2xl  cursor-pointer">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="mr-5">
            <Link to="/work">Work</Link>
          </li>
          <li className="mr-5">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <nav className="md:hidden  z-10 ">
        {mobileMenu ? (
          <AiOutlineClose
            onClick={() => setMobileMenu(false)}
            className="mr-2 text-slate-100 text-2xl "
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setMobileMenu(true)}
            className="mr-2 text-slate-100 text-2xl "
          />
        )}
      </nav>
      <div
        className={
          mobileMenu
            ? "absolute top-0 left-0 bg-inherit w-full h-full flex justify-center flex-col items-center"
            : "hidden"
        }
      >
        <ul className="text-[20px]">
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
