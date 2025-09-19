"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { MyContext } from "./ContextAPI";
import MobNavbar from "./MobNavbar";
import { useState } from "react";
import dynamic from "next/dynamic";

const RxCross2 = dynamic(() =>
  import("react-icons/rx").then((mod) => mod.RxCross2)
);
const Navbar = () => {
    const [sideBar, setsideBar] = useState(false);
 const {nav,setNav,isDarkMode,setIsDarkMode} = useContext(MyContext);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleClick = ()=>{
    setsideBar(side=>!side);
  }
  return (
    <div className="fixed z-40 top-0 h-16 w-full">
 <div className={`flex flex-col ${sideBar ? "translate-x-0":"-translate-x-full"} h-screen w-3/4 ${isDarkMode ? "bg-black" : "bg-white"} fixed z-50 top-0 left-0  py-15 items-center gap-5`}>
 <div className="absolute top-3 right-3">
  <RxCross2 onClick={handleClick} className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}/>
 </div>
                  <Link href="/">
                   <button
                      className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Home" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Home" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                      onClick={() => {
                        setNav("Home");
                        handleClick();
                      }}
                    >
                      Home
                    </button>
                  </Link>
      
                  <Link href="/resume">
                    <button
                      className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Resume" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Resume" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                      onClick={() => {
                        setNav("Resume");
                        handleClick();
                      }}
                    >
                      Resume
                    </button>
                  </Link>
      
                   <Link href="/projects">
                    <button
                      className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Project" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Project" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                      onClick={() =>{
                         setNav("Project");
                          handleClick();
                        }}
                    >
                      Projects
                    </button>
                  </Link>
      
                  <Link href="/contact">
                    <button
                      className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Contact" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Contact" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                      onClick={() =>{ 
                        setNav("Contact") 
                        handleClick();

                      }}
                    >
                      Contact
                    </button>
                  </Link>
      
                  <Link href="/about">
                    <button
                      className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "About" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "About" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                      onClick={() => {
                        setNav("About"); 
                        handleClick();}}
                    >
                      About me
                    </button>
                  </Link>
                </div>


      <div className="block md:hidden">
<MobNavbar handleClick={handleClick}/>
      </div>
      <div className={`navbar hidden md:block ${isDarkMode ? "bg-neutral text-neutral-content" : "bg-zinc-100"}`}>
        <div className="flex justify-between items-center px-3 sm:px-2 md:px-5 w-full">
          <div className="flex justify-center items-center gap-0 sm:gap-3 md:gap-8 lg:gap-10 xl:gap-15">
            <Link href="/">
             <button
                className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Home" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Home" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                onClick={() => setNav("Home")}
              >
                Home
              </button>
            </Link>

            <Link href="/resume">
              <button
                className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Resume" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Resume" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                onClick={() => setNav("Resume")}
              >
                Resume
              </button>
            </Link>

             <Link href="/projects">
              <button
                className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Project" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Project" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                onClick={() => setNav("Project")}
              >
                Projects
              </button>
            </Link>

            <Link href="/contact">
              <button
                className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "Contact" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "Contact" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                onClick={() => setNav("Contact")}
              >
                Contact
              </button>
            </Link>

            <Link href="/about">
              <button
                className={`text-auto xl:text-lg ${isDarkMode ? `${nav === "About" ? "bg-white text-black cursor-pointer rounded-md px-4 py-2" : "btn btn-ghost text-white hover:bg-white text-black"}` : `${nav === "About" ? "bg-black rounded-md px-4 py-2 text-white cursor-pointer" : "text-black hover:bg-black hover:text-white  px-4 cursor-pointer py-2 rounded-md bg-zinc-100"}`} text-md `}
                onClick={() => setNav("About")}
              >
                About me
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-10">

            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
               stroke={`${isDarkMode ? "white" : "black"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className={`toggle theme-controller ${isDarkMode ? "bg-white" : "bg-black"}`}
                onChange={toggleDarkMode}
                checked={isDarkMode}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={`${isDarkMode ? "white" : "black"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
