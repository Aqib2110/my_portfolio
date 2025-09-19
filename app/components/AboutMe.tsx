"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const MotionDiv = dynamic(
  () =>
    import("framer-motion").then((mod) => {
      return mod.motion.div;
    }),
  { ssr: false }
);

interface AboutMeProps {
  fadeInUp: (delay: number) => object;
  isDarkMode: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ fadeInUp, isDarkMode }) => {
  return (
    <div>
      <MotionDiv
        className="pb-3 py-3 md:mb-0 mb-3 md:py-0"
        {...fadeInUp(1.5)}
      >
        <h2
          className={`text-3xl pb-2 font-bold md:text-start text-center text-blue-500`}
        >
          About Me
        </h2>

        <div>
          <p
            className={`xl:text-2xl text-lg md:text-start text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            I am a full stack developer with a passion for creating scalable web
            applications.
          </p>

          {/* Mobile + Tablet */}
          <p
            className={`text-lg xl:text-2xl md:text-start lg:hidden block text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            With proficiency in both front-end and back-end technologies, I
            enjoy bringing ideas to life in both browser and server environments.
            <Link href="/about">
              <button
                className={`ml-2 btn btn-sm ${
                  isDarkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                Read more...
              </button>
            </Link>
          </p>

          {/* Desktop */}
          <p
            className={`text-lg xl:text-2xl md:text-start lg:block hidden text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            With proficiency in both front-end and back-end technologies, I enjoy
            bringing ideas
          </p>
          <p
            className={`text-lg xl:text-2xl md:text-start hidden lg:block text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            to life in both browser and server environments.
            <Link href="/about">
              <button
                className={`ml-2 xl:text-lg text-auto btn btn-sm ${
                  isDarkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                Read more...
              </button>
            </Link>
          </p>
        </div>
      </MotionDiv>
    </div>
  );
};

export default AboutMe;
