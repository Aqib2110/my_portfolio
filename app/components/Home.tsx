  "use client";
  import React, { useContext } from "react";
  import dynamic from "next/dynamic";
  import { MyContext } from "./ContextAPI";
 const Hero = dynamic(() => import("./Hero"), { ssr: false });
 const AboutMe = dynamic(() => import("./AboutMe"), { ssr: false });
 const ContactMe = dynamic(() => import("./ContactMe"), { ssr: false });
 const Project = dynamic(() => import("./Project"), { ssr: false });
 const Skills = dynamic(() => import("./Skills"), { ssr: false });
  const Home = () => {
    const { isDarkMode } = useContext(MyContext);

    return (
      <div className={`min-h-screen pt-16 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="flex h-full px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35 w-full">
{/* px-10           */}
          <div className="flex w-full flex-col">

          <div>
            <Hero isDarkMode={isDarkMode} />
          </div>

          <div>
            <AboutMe isDarkMode={isDarkMode} />
          </div>
        
           <div>
            <Skills isDarkMode={isDarkMode} />
           </div>

            <div>
            <Project isDarkMode={isDarkMode} />
            </div>

            <div>
              <ContactMe isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;

