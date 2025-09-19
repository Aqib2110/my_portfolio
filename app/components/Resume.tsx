"use client";
import { useContext } from "react";
import React from "react";
import dynamic from "next/dynamic";
import { MyContext } from "./ContextAPI";

const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const Resume = () => {
  const { isDarkMode } = useContext(MyContext);

  const sections = [
    {
      title: "Experience",
      items: [
        {
          role: "Full Stack Developer",
          company: "Freelance",
          duration: "2024 - Present",
          desc: "Developed scalable applications with React, Node.js, and MongoDB.",
        },
        {
          role: "Frontend Developer",
          company: "Personal Projects",
          duration: "2024 - Present",
          desc: "Built modern websites and contributed to open-source projects.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          role: "BS in Computer Science",
          company: "Abbottabad University of Science and Technology",
          duration: "2021 - 2025",
          desc: "Specialized in web technologies and software development.",
        },
      ],
    },
  ];

  return (
    <section
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-gray-200" : "bg-white text-black"
      } px-6 py-12`}
    >
      <MotionH1
        className="text-4xl font-bold mb-8 text-center text-blue-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Resume
      </MotionH1>

      <div className="max-w-4xl mx-auto space-y-12">
        {sections.map((section, idx) => (
          <MotionDiv
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              {section.title}
            </h2>

            <div className="space-y-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl shadow-lg ${
                    isDarkMode ? "bg-gray-900" : "bg-gray-100"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.role}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.company} | {item.duration}
                  </p>
                  <p
                    className={`mt-2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Resume;
