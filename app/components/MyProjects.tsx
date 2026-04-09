"use client";
import React, { useContext, useEffect, useState } from "react";
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

import { FaGithub } from "react-icons/fa";
import { div } from "framer-motion/m";

function leftMockup(project: any) {
  return <div className="grid grid-cols-1 py-10 md:py-0 gap-10 md:gap-0 md:grid-cols-3  h-full w-full">


    <div className="flex justify-center  h-full items-center">
      <Link href={project.demo} target="_blank">
       <Image
        src={project.img}
        alt={project.title}
        width={800}
        height={600}
        className=" md:hover:scale-150 active:scale-150 scale-140 transition-transform duration-300 object-fit"
      />
      </Link>
     
    </div>

    <div className="hidden md:flex justify-center h-full items-center">
      <span className="border w-1/2">
      </span>
      <span className="h-full flex justify-center items-center flex-col">
        <span className=" border-1 h-full">
        </span>
        <span className="rounded-full border-2 p-1.5">

        </span>
      
        <span className=" border  h-full ">
        </span>
      </span>
      <span className=" w-1/2">
      </span>
    </div>


    <div className="flex flex-col gap-1 md:pt-20   h-full ">
      <h3 className={`text-[32px] ${project.titleClr} font-bold `}>{project.title}</h3>
      <p className="text-[16px] text-gray-600 dark:text-gray-300">{project.desc}</p>
      <div>
        <h4 className="text-[18px] font-semibold mt-4 mb-2">Tech Stack:</h4>
        {project.tech.split(",").map((tech: any) => (
          <span key={tech} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
            {tech.trim()}
          </span>
        ))}
      </div>
{/* bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 */}
      <div className="flex items-center gap-4 mt-2">
                <Link href={project.demo} target="_blank">
                  <span className="flex h-10 items-center gap-2 px-4 rounded-md text-blue-500 text-sm font-medium border hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                    View Project
                  </span>
                </Link>

                <Link href={project.github} target="_blank">
                  <span className="flex h-10 items-center gap-2 px-4 rounded-md text-blue-500 text-sm font-medium border hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                    <FaGithub /> Code
                  </span>
                </Link>
              </div>
    </div>


 


  </div>


}

function rightMockup(project: any) {
  return <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full">

    <div className="pt-20 flex flex-col gap-1">


      <h3 className={`text-[32px] ${project.titleClr} font-bold `}>{project.title}</h3>
      <p className="text-[16px] text-gray-600 dark:text-gray-300 ">{project.desc}</p>
      <div>
        <h4 className="text-[18px] font-semibold mt-4 mb-2">Tech Stack:</h4>
        {project.tech.split(",").map((tech: any) => (
          <span key={tech} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
            {tech.trim()}
          </span>
        ))}
      </div>
       <div className="flex items-center gap-4 mt-2">
                <Link href={project.demo} target="_blank">
                  <span className="flex h-10 items-center gap-2 px-4 rounded-md text-blue-500 text-sm font-medium border hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                    View Project
                  </span>
                </Link>

                <Link href={project.github} target="_blank">
                  <span className="flex h-10 items-center gap-2 px-4 rounded-md text-blue-500 text-sm font-medium border hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                    <FaGithub /> Code
                  </span>
                </Link>
              </div>
    </div>

    <div className="hidden md:flex justify-center h-full items-center">
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


    <div className="flex justify-center items-center">
      <Link href={project.demo} target="_blank">
       <Image
        src={project.img}
        alt={project.title}
        width={900}
        height={900}
        className=" md:hover:scale-150 active:scale-150 scale-140 transition-transform duration-300 object-cover"
      />
      </Link>
     
    </div>



  </div>
}




const projects = [
  {
    title: "KnowledgeHub",
    desc: "Organize your ideas, notes, and resources in one smart, searchable space. KnowledgeHub helps you capture, connect, and grow your knowledge effortlessly.",
    img: "/pnm.png",
    titleClr: "text-[#0A1A30]",
    tech: "Next.js,Typescript, TailwindCSS, Prisma, PostgreSQL, NextAuth, Node.js ,Openai, redis ,Vercel",
    github: "https://github.com/Aqib2110/Personal_Knowledge_Manager_demo",
    demo: "https://personal-knowledge-manager-demo-3hdy-qwp5jflfu.vercel.app",
  },
  {
    title: "Codely",
    desc: "Codely lets you run code securely in isolated environments without setup hassles. Collaborate in real time with others, making coding faster, interactive, and seamless.",
    img: "/codely.png",
    titleClr: "text-orange-500",
    tech: "Next.js, Typescript, TailwindCSS, Prisma, PostgreSQL, NextAuth, Node.js, Express, Websocket, docker ,CI/CD,Docker,AWS",
    github: "https://github.com/Aqib2110/Codely_App",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with Next.js, TailwindCSS, and Framer Motion.",
    img: "/portfolio.png",
    titleClr: "text-neutral-900",
    tech: "Next.js,Typescript, TailwindCSS, Prisma, Framer Motion, NextAuth ,Vercel",
    github: "https://github.com/Aqib2110/my_portfolio",
    demo: "https://my-portfolio-ecru-two-76.vercel.app",
  }
];

const Projects = () => {
  const { isDarkMode } = useContext(MyContext);
  const [mob, setmob] = useState(false);

function renderProjects(project: any, index: number) {
  return <>
    {mob ?
      leftMockup(project)
    
   : index % 2 === 0  ?
      leftMockup(project)
      :
      rightMockup(project)
    }
  </>
}

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmob(true)
    }
  }, [])

  return (
    <section
      className={`min-h-screen pt-16 px-6 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <MotionH1
        className="text-4xl font-bold  text-blue-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Latest Work
      </MotionH1>


      <div className="flex flex-col pb-10">
        {
          projects.map((project, index) => (<div key={project.title}>

            {renderProjects(project, index)}


          </div>))
        }
      </div>
       

    </section>
  );
};

export default Projects;
