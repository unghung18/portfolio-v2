"use client";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

function Header() {
  const [activeLink, setActiveLink] = useState("#");
  return (
    <nav className="fixed z-20 bottom-5 left-1/2 -translate-x-1/2 px-5 py-[0.5rem] w-max flex items-center gap-[0.8rem] rounded-[3rem] bg-white/40 backdrop-blur-[15px]">
      <a
        onClick={() => setActiveLink("#")}
        className={`${
          activeLink === "#" ? "bg-emerald-300 text-white" : ""
        } size-10 flex items-center justify-center rounded-full text-light text-[1.1rem] hover:bg-black/20`}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveLink("#about")}
        className={`${
          activeLink === "#about" ? "bg-emerald-300 text-white" : ""
        } size-10 flex items-center justify-center rounded-full text-light text-[1.1rem] hover:bg-black/20`}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveLink("#experience")}
        className={`${
          activeLink === "#experience" ? "bg-emerald-300 text-white" : ""
        } size-10 flex items-center justify-center rounded-full text-light text-[1.1rem] hover:bg-black/20`}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveLink("#contact")}
        className={`${
          activeLink === "#contact" ? "bg-emerald-300 text-white" : ""
        } size-10 flex items-center justify-center rounded-full text-light text-[1.1rem] hover:bg-black/20`}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Header;
