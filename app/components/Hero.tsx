"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
type FadeInUp = (delay: number) => {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { delay: number; duration: number };
};
const Hero = ({
  fadeInUp,
  isDarkMode,
}: {
  fadeInUp: FadeInUp;
  isDarkMode: boolean;
}) => {
  const items = [
    <>
      Hello, I&apos;m{" "}
      <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Muhammad Aqib
      </span>
    </>,
    "Full Stack Developer",
    "Welcome to my Portfolio",
  ];

  return (
    <div>
      <MotionDiv
        className="flex flex-col md:flex-row gap-0 md:gap-10"
        {...fadeInUp(0)}
      >
        <div className="py-4 md:py-8 flex justify-center items-center md:flex-none md:justify-start md:items-start">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 xl:w-50 w-30 rounded-full ring-2 ring-offset-2">
              <Image
                src="/aqi_port.jpg"
                width={120}
                height={120}
                alt="Muhammad Aqib"
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="pt-4 md:pt-8 pb-3">
          <div
            className={`flex flex-col px-8 gap-2 md:gap-4 text-2xl xl:text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {items.map((text, i) => (
              <MotionDiv
                className="md:text-start text-center"
                key={i}
                {...fadeInUp(i * 0.3)}
              >
                {text}
              </MotionDiv>
            ))}
          </div>

          <MotionDiv
            className="flex flex-col items-center justify-center md:flex-row px-0 md:px-2 gap-3 mt-5"
            {...fadeInUp(1)}
          >
            <div className="w-3/4 sm:w-1/2 md:w-full">
              <Link href="/resume" passHref>
                <button className="xl:text-lg text-auto bg-gradient-to-r w-full from-pink-500 via-purple-500 to-indigo-500 rounded-md cursor-pointer py-2 hover:bg-purple-600 text-white">
                  Download Resume
                </button>
              </Link>
            </div>

            <div className="w-3/4 sm:w-1/2 md:w-full">
              <Link href="/contact" passHref>
                <button
                  className={`btn xl:text-lg w-full ${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  Contact Me
                </button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  );
};

export default Hero;
