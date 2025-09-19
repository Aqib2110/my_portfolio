  "use client";
  import React, { useContext } from "react";
  import { MyContext } from "./ContextAPI";
  import Hero from "./Hero";
  import AboutMe from "./AboutMe";
  import ContactMe from "./ContactMe";
  import Project from "./Project";
import Skills from "./Skills";
  const Home = () => {
    const { isDarkMode } = useContext(MyContext);
    const fadeInUp = (delay : number) => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.6 },
    });

    return (
      <div className={`min-h-screen ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="flex h-full px-10 md:px-20 lg:px-27 xl:px-35 w-full">
          <div className="flex w-full flex-col">

          <div>
            <Hero isDarkMode={isDarkMode} fadeInUp={fadeInUp}/>
          </div>

          <div>
            <AboutMe isDarkMode={isDarkMode} fadeInUp={fadeInUp}/>
          </div>
        
           <div>
            <Skills isDarkMode={isDarkMode} fadeInUp={fadeInUp}/>
           </div>

            <div>
            <Project isDarkMode={isDarkMode} fadeInUp={fadeInUp}/>
            </div>

            <div>
              <ContactMe isDarkMode={isDarkMode} fadeInUp={fadeInUp} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;

