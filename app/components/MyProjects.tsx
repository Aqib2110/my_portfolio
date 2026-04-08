"use client";
import React, { useContext } from "react";
import { MyContext } from "./ContextAPI";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { IPadMockup } from "react-device-mockup";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);

import { FaGithub } from "react-icons/fa";
import { div } from "framer-motion/m";



function renderProjects(project:any,index:number) {
  return <>
   
     

{index % 2 === 0 ? 

 <div className="grid grid-cols-3 h-full w-full">


 <div className="py-10">
        <Image
          src={"/pnm.png"}
          alt={"Project Image"}
          width={900}
          height={900}
          className=" hover:scale-140 scale-100 transition-transform duration-300 object-cover"
        />
      </div>
      <div className="flex justify-center h-full items-center">
        <span className="border w-1/2">
        </span>
        <span className="h-full flex justify-center items-center flex-col">
          <span className=" border-1 h-full">
          </span>
          <span className="rounded-full border-2 p-1.5"></span>
          <span className=" border  h-full ">
          </span>
        </span>
        <span className=" w-1/2">
        </span>
      </div>
      
      
        <div className="py-10">
      

        <h3 className=" text-[32px] font-bold ">{project.title}</h3>
        <p className="text-[16px] text-gray-600 dark:text-gray-300">{project.desc}</p>
      </div>



    </div>
      
      
       :

        <div className="grid grid-cols-3 h-full w-full">

 <div className="py-10">
      

        <h3 className=" text-[32px] font-bold ">{project.title}</h3>
        <p className="text-[16px] text-gray-600 dark:text-gray-300">{project.desc}</p>
      </div>

       <div className="flex justify-center h-full items-center">
        <span className=" w-1/2">
        </span>
        <span className="h-full flex justify-center items-center flex-col">
          <span className=" border-1 h-full">
          </span>
          <span className="rounded-full border-2 p-1.5"></span>
          <span className=" border  h-full ">
          </span>
        </span>
        <span className="border w-1/2">
        </span>
      </div>


 <div className="py-10">
        <Image
          src={"/pnm.png"}
          alt={"Project Image"}
          width={900}
          height={900}
          className=" hover:scale-140 scale-100 transition-transform duration-300 object-cover"
        />
      </div>



       </div>
}

   
  </>
}



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
    title: "KnowledgeHub",
    desc: "Organize your ideas, notes, and resources in one smart, searchable space. KnowledgeHub helps you capture, connect, and grow your knowledge effortlessly.",
    img: "/pnm.png",
    github: "https://github.com/yourusername/ecommerce",
    demo: "#",
  },
  {
    title: "Codely",
    desc: "Codely lets you run code securely in isolated environments without setup hassles. Collaborate in real time with others, making coding faster, interactive, and seamless.",
    img: "/dummy.png",
    github: "https://github.com/yourusername/codely",
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
      className={`min-h-screen py-16 px-6 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <MotionH1
        className="text-4xl font-bold mb-10 text-blue-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Latest Work
      </MotionH1>


<div className="flex flex-col ">
{
  projects.map((project, index) => (<>
 
  {renderProjects(project,index)}

  
  </>))
}
</div>












      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div> */}


      {/* <div className="flex justify-center mt-12">
        <Link href="https://github.com/yourusername" target="_blank">
          <span className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 shadow-md cursor-pointer">
            <FaGithub size={22} /> See More Projects on GitHub
          </span>
        </Link>
      </div> */}
    </section>
  );
};

export default Projects;
