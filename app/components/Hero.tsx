"use client";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

type HeroProps = {
  isDarkMode: boolean;
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = ({ isDarkMode }: HeroProps) => {
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
    <div className="px-4 md:px-0">
      <MotionDiv
        className="flex flex-col md:flex-row gap-0 md:gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        viewport={{ once: true }}
      >
        <MotionDiv
          className="py-4 md:py-8 flex justify-center items-center md:flex-none md:justify-start md:items-start"
          variants={fadeInUpVariants}
          viewport={{ once: true }}
        >
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 xl:w-50 w-30 rounded-full ring-2 ring-offset-2">
              <Image
                src="/aqi_port.jpg"
                width={120}
                height={120}
                alt="Muhammad Aqib"
                className="rounded-full"
                priority
                sizes="(max-width: 768px) 80px, 120px"
              />
            </div>
          </div>
        </MotionDiv>

        <div className="pt-4 px-5 sm:px-8 md:px-0 md:pt-8 pb-3">
          <MotionDiv
            className={`flex flex-col px-8 gap-2 md:gap-4 text-2xl xl:text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            viewport={{ once: true }}
          >
            {items.map((text, i) => (
              <MotionDiv
                key={i}
                className="md:text-start text-center"
                variants={fadeInUpVariants}
                viewport={{ once: true }}
              >
                {text}
              </MotionDiv>
            ))}
          </MotionDiv>

          <MotionDiv
            className="flex flex-col items-center justify-center md:flex-row px-0 md:px-2 gap-3 mt-5"
            variants={fadeInUpVariants}
            viewport={{ once: true }}
          >
            <div className="w-3/4 sm:w-1/2 md:w-full">
              <Link href="/resume">
                <button
                  type="button"
                  className="xl:text-lg text-auto bg-gradient-to-r w-full from-pink-500 via-purple-500 to-indigo-500 rounded-md cursor-pointer py-2 hover:bg-purple-600 text-white"
                >
                  Download Resume
                </button>
              </Link>
            </div>

            <div className="w-3/4 sm:w-1/2 md:w-full">
              <Link href="/contact">
                <button
                  type="button"
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

export default memo(Hero);


