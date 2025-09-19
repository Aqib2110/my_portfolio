"use client"
import React, { createContext, useState,useEffect } from 'react'
import { Dispatch, SetStateAction } from "react";

interface MyContextType {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
}

export const MyContext = createContext<MyContextType>({
  isDarkMode: true,
  setIsDarkMode: () => {},
  nav: "Home",
  setNav: () => {}, 
});

const ContextAPI = ({children}: {children: React.ReactNode}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [nav, setNav] = useState<string>("");
   useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/") setNav("Home");
      else if (path === "/about") setNav("About");
      else if (path === "/projects") setNav("Project");
      else if (path === "/contact") setNav("Contact");
      else if (path === "/resume") setNav("Resume");
    }
  }, []);
  return (
    <MyContext.Provider value={{ isDarkMode, setIsDarkMode, nav, setNav }}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextAPI
