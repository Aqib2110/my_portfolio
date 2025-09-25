"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MyContext } from "./ContextAPI";
import MobNavbar from "./MobNavbar";

const RxCross2 = dynamic(() =>
  import("react-icons/rx").then((mod) => mod.RxCross2)
);

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const getButtonClass = (isDark: boolean, isActive: boolean) => {
  if (isDark) {
    return isActive
      ? "bg-white text-black cursor-pointer rounded-md px-4 py-2"
      : "btn btn-ghost text-white hover:bg-white hover:text-black";
  } else {
    return isActive
      ? "bg-black text-white cursor-pointer rounded-md px-4 py-2"
      : "text-black hover:bg-black hover:text-white px-4 py-2 rounded-md bg-zinc-100";
  }
};

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const { nav, setNav, isDarkMode, setIsDarkMode } = useContext(MyContext);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleClick = () => setSideBar((prev) => !prev);

  const NavButton = ({ item, closeSidebar }: { item: NavItem; closeSidebar?: boolean }) => (
    <Link href={item.href}>
      <button
        className={`text-auto xl:text-lg ${getButtonClass(isDarkMode, nav === item.name)}`}
        onClick={() => {
          setNav(item.name);
          if (closeSidebar) handleClick();
        }}
      >
        {item.name}
      </button>
    </Link>
  );

  return (
    <div className="fixed z-40 top-0 h-16 w-full">
      <div
        className={`flex flex-col ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } h-screen w-3/4 ${isDarkMode ? "bg-black" : "bg-white"} fixed z-50 top-0 left-0 py-15 items-center gap-5 transition-transform`}
      >
        <div className="absolute top-3 right-3">
          <RxCross2
            onClick={handleClick}
            className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}
          />
        </div>

        {navItems.map((item) => (
          <NavButton key={item.name} item={item} closeSidebar />
        ))}
      </div>

      <div className="block md:hidden">
        <MobNavbar handleClick={handleClick} />
      </div>

      <div
        className={`navbar hidden md:block ${
          isDarkMode ? "bg-neutral text-neutral-content" : "bg-zinc-100"
        }`}
      >
        <div className="flex justify-between items-center px-3 py-5 sm:px-2 md:px-5 w-full">
          <div className="flex items-center gap-3 md:gap-8 lg:gap-10 xl:gap-15">
            {navItems.map((item) => (
              <NavButton key={item.name} item={item} />
            ))}
          </div>

          <div className="flex items-center gap-10">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke={isDarkMode ? "white" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                className={`toggle theme-controller ${isDarkMode ? "bg-white" : "bg-black"}`}
                onChange={toggleDarkMode}
                checked={isDarkMode}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke={isDarkMode ? "white" : "black"}
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

