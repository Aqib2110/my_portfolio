"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div),
 { ssr: false }
);
const Logo = dynamic(() => import("./Nexta"), { ssr: false });
const Node = dynamic(() => import("./Node"), { ssr: false });
type FadeInUp = (delay: number) => {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { delay: number; duration: number };
};
  const skills = [
    {
      icon: <Image src="/logo_dark.svg" width={50} height={50} alt="React.js" />,
      name: "React",
    },
    {
      icon: <Image src="/js.png" width={50} height={50} alt="JavaScript" />,
      name: "JavaScript",
    },
    {
      icon: <Image src="/typescript.png" width={50} height={50} alt="TypeScript" />,
      name: "TypeScript",
    },
    { icon: <Logo />, name: "Next.js" },
    { icon: <Node />, name: "Node.js" },
    {
      icon: <Image src="/express.png" width={50} height={50} alt="Express" />,
      name: "Express",
    },
    {
      icon: <Image src="/mongodb.png" width={50} height={50} alt="MongoDB" />,
      name: "MongoDB",
    },
    {
      icon: (
        <Image
          src="/github.png"
          className="bg-white rounded-4xl"
          width={50}
          height={50}
          alt="Github"
        />
      ),
      name: "Github",
    },
    {
      icon: <Image src="/tailwind.png" width={50} height={50} alt="TailwindCSS" />,
      name: "TailwindCSS",
    },
    { icon: <Image src="/elephant.png" width={50} height={50} alt="PostgreSQL" />, name: "PostgreSQL" },
  ];


const Skills = ({ fadeInUp, isDarkMode }: { fadeInUp: FadeInUp; isDarkMode: boolean }) => {

  return (
    <div>
      <MotionDiv className="" {...fadeInUp(2)}>
        <h2
          className={`text-3xl py-3 text-center md:text-start font-bold text-blue-500`}
        >
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <MotionDiv
              key={index}
              className={`${
                isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-[#f5f5f5] text-black"
              } flex flex-col gap-1 items-center justify-center rounded-md p-3`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 2.2, duration: 0.5 }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
};

export default Skills;
