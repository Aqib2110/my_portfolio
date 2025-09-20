"use client"
import React from 'react'
import { useContext } from 'react';
import { MyContext } from './ContextAPI';
import { GiHamburgerMenu } from "react-icons/gi";

const MobNavbar = ({handleClick}:{handleClick:()=>void}) => {
     const {isDarkMode,setIsDarkMode} = useContext(MyContext);
       const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }; 
  return (
    <div className=''>
       <div className={`navbar ${isDarkMode ? "bg-neutral text-neutral-content" : "bg-zinc-100"}`}>
              <div className="flex justify-between items-center px-5 w-full">
                <div className=''>
                   <GiHamburgerMenu onClick={handleClick} className={`text-2xl ${isDarkMode ? "text-white" : "text-black"}`}/> 
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
  )
}

export default MobNavbar
