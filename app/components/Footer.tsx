"use client";
import React, { useContext } from "react";
import { MyContext } from "./ContextAPI";
import { Github, Linkedin, Twitter } from "lucide-react"; 
import Link from "next/link";

const Footer = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <footer
      className={`py-6 text-center ${
        isDarkMode ? "bg-black text-gray-300" : "bg-white text-gray-700"
      }`}
    >
      <div className="flex justify-center gap-6 mb-4">
        <Link
          href="https://github.com/Aqib2110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6 hover:text-gray-500 transition-colors duration-300" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/muhammad-aqib-478940324?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors duration-300" />
        </Link>

        <Link
          href="https://x.com/MuhammadAq36776"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter className="w-6 h-6 hover:text-sky-500 transition-colors duration-300" />
        </Link>
      </div>

      <p className="text-sm xl:text-lg opacity-70">
        © {new Date().getFullYear()} Muhammad Aqib · Full Stack Developer
      </p>
    </footer>
  );
};

export default Footer;

