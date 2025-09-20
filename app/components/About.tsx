
"use client";
import React, { useContext } from "react";
import { MyContext } from "./ContextAPI";
import dynamic from "next/dynamic";
import { Variants } from "framer-motion";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);

const headingVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contentVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.6 } },
};

const About: React.FC = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <section
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col justify-center items-center px-6`}
    >
      <MotionH1
        className="text-4xl text-blue-500 font-bold mb-6"
        variants={headingVariant}
        initial="hidden"
        animate="visible"
      >
        About Me
      </MotionH1>

      <MotionDiv
        className="max-w-3xl text-lg leading-relaxed text-center"
        variants={contentVariant}
        initial="hidden"
        animate="visible"
      >
        <p className="mb-4">
          Hi, I&apos;m{" "}
          <span className="text-cyan-400 font-semibold">Muhammad Aqib</span>, a
          passionate Full Stack Developer with a focus on building modern,
          scalable web applications.
        </p>

        <p className="mb-4">
          I love working with{" "}
          <span className="text-purple-400">React</span>,{" "}
          <span className="text-green-400">Node.js</span>,{" "}
          <span className="text-yellow-400">Tailwind CSS</span>, and{" "}
          <span className="text-pink-400">TypeScript</span>.
        </p>

        <p className="mb-4">
          On the backend, I have expertise in{" "}
          <span className="text-blue-400">Express.js</span>,{" "}
          <span className="text-indigo-400">Next.js</span> for full-stack
          development, and working with databases like{" "}
          <span className="text-green-500">MongoDB</span> and{" "}
          <span className="text-sky-400">PostgreSQL</span>.
        </p>

        <p>
          My goal is to create impactful solutions that solve real-world
          problems. When I&apos;m not coding, you&apos;ll find me exploring new
          tech trends, contributing to open source, or sharing knowledge with
          other developers.
        </p>
      </MotionDiv>
    </section>
  );
};

export default React.memo(About);

