"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const MotionSection = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.section),
  { ssr: false }
);

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
type FadeInUp = (delay: number) => {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { delay: number; duration: number };
};
const projects = [
  {
    title: "Excalidraw Clone",
    description:
      "A collaborative whiteboard tool built with Next.js, TailwindCSS, and WebSocket.",
    image: "/dummy.png",
    github: "https://github.com/Aqib2110/Excalidraw-app",
    demo: "https://your-portfolio.vercel.app",
  },
  {
    title: "Chat App",
    description: "Real-time chat app using WebSocket and Node.js.",
    image: "/dummy.png",
    github: "https://github.com/Aqib2110/chat-app-whatsapp-frontend",
    demo: "https://chat-app-whatsapp-frontend.vercel.app/",
  },
  {
    title: "Second Brain App",
    description:
      "A personal knowledge management tool built with Next.js, TypeScript, and GraphQL.",
    image: "/dummy.png",
    github: "https://github.com/Aqib2110/second-brain-frontend",
    demo: "https://second-brain-frontend-tau.vercel.app/",
  },
];

const Project = ({
  fadeInUp,
  isDarkMode,
}: {
  fadeInUp: FadeInUp;
  isDarkMode: boolean;
}) => {
  return (
    <MotionSection
      {...fadeInUp(4.2)}
      className={`py-12 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-0">
        {projects.map((project, index) => (
          <MotionDiv
            key={index}
            className={`rounded-xl border border-[#1a1a1a] shadow-lg overflow-hidden ${
              isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f9f9f9]"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
              priority={index < 2} 
            />
            <div className="p-4 px-0">
              <h3 className="text-xl text-center md:text-start font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-center xl:text-lg md:text-start overflow-hidden h-[50px] mt-2">
                {project.description}
              </p>
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <div className="w-1/2 md:w-auto md:mx-0 mx-auto">
                  <Link href={project.github} target="_blank">
                    <button className="px-3 py-1 w-full md:w-auto rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-sm">
                      GitHub
                    </button>
                  </Link>
                </div>

                {project.demo && (
                  <div className="w-1/2 md:w-auto md:mx-0 mx-auto">
                    <Link href={project.demo} target="_blank">
                      <button className="px-3 py-1 w-full md:w-auto rounded-md border text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
                        Live Demo
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
};

export default Project;
