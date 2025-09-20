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

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Resume: React.FC = () => {
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

  const bgColor = isDarkMode ? "bg-black text-gray-200" : "bg-white text-black";
  const cardBg = isDarkMode ? "bg-gray-900" : "bg-gray-100";
  const cardText = isDarkMode ? "text-white" : "text-black";
  const descText = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section className={`min-h-screen pt-16 px-6 py-12 ${bgColor}`}>
      <MotionH1
        className="text-4xl font-bold mb-8 text-center text-blue-500"
        variants={headingVariant}
        initial="hidden"
        animate="visible"
      >
        Resume
      </MotionH1>

      <div className="max-w-4xl mx-auto space-y-12">
        {sections.map((section, idx) => (
          <MotionDiv
            key={idx}
            custom={idx}
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              {section.title}
            </h2>

            <div className="space-y-6">
              {section.items.map((item, i) => (
                <div key={i} className={`p-5 rounded-xl shadow-lg ${cardBg}`}>
                  <h3 className={`text-xl font-semibold ${cardText}`}>{item.role}</h3>
                  <p className="text-sm text-gray-400">
                    {item.company} | {item.duration}
                  </p>
                  <p className={`mt-2 ${descText}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Resume);

