"use client";
import React, { useContext } from "react";
import { MyContext } from "./ContextAPI";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <footer
      className={`py-6 z-[-1] text-center ${
        isDarkMode ? "bg-black text-gray-300" : "bg-white text-gray-700"
      }`}
    >
      <div className="flex justify-center gap-6 mb-4">
       <Link
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-2xl hover:text-blue-500 transition-colors duration-300" />
      </Link>

      <Link
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors duration-300" />
      </Link>

      <Link
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className="text-2xl hover:text-blue-500 transition-colors duration-300" />
      </Link>
      </div>

      <p className="text-sm z-[-1] xl:text-lg opacity-70">
        © {new Date().getFullYear()} Muhammad Aqib · Full Stack Developer
      </p>
    </footer>
  );
};

export default Footer;
