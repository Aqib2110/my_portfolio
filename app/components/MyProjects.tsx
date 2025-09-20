"use client";
import React, { useContext } from "react";
import { MyContext } from "./ContextAPI";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);

const FaGithub = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaGithub)
);

const projects = [
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with Next.js, TailwindCSS, and Framer Motion.",
    img: "/dummy.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Chat App",
    desc: "A real-time chat application using WebSockets and Node.js.",
    img: "/dummy.png",
    github: "https://github.com/yourusername/chat-app",
    demo: "#",
  },
  {
    title: "E-commerce Store",
    desc: "Full-stack e-commerce app with authentication and payments.",
    img: "/dummy.png",
    github: "https://github.com/yourusername/ecommerce",
    demo: "#",
  },
  {
    title: "Blog Platform",
    desc: "A full-featured blog with markdown support and admin dashboard.",
    img: "/dummy.png",
    github: "https://github.com/yourusername/blog-platform",
    demo: "#",
  },
  {
    title: "Weather App",
    desc: "Weather forecast app fetching live data from OpenWeather API.",
    img: "/dummy.png",
    github: "https://github.com/yourusername/weather-app",
    demo: "#",
  },
  {
    title: "Task Manager",
    desc: "A task management tool with JWT auth and MongoDB backend.",
    img: "/dummy.png",
    github: "https://github.com/yourusername/task-manager",
    demo: "#",
  },
];

const Projects = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <section
      className={`min-h-screen pt-16 py-12 px-6 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <MotionH1
        className="text-4xl font-bold mb-10 text-blue-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </MotionH1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <MotionDiv
            key={index}
            className={`rounded-xl shadow-md border border-[#1a1a1a] overflow-hidden transition transform hover:scale-105 ${
              isDarkMode ? "bg-[#1a1a1a]" : "bg-gray-100"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority={index < 2} 
            />
            <div className="p-4 flex flex-col gap-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm opacity-80">{project.desc}</p>
              <div className="flex gap-4 mt-2">
                <Link href={project.demo} target="_blank">
                  <span className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:opacity-90 cursor-pointer">
                    View Project
                  </span>
                </Link>

                <Link href={project.github} target="_blank">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                    <FaGithub /> Code
                  </span>
                </Link>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>

     
      <div className="flex justify-center mt-12">
        <Link href="https://github.com/yourusername" target="_blank">
          <span className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 shadow-md cursor-pointer">
            <FaGithub size={22} /> See More Projects on GitHub
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
