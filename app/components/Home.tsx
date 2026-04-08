  "use client";
  import React, { useContext } from "react";
  import dynamic from "next/dynamic";
  import { MyContext } from "./ContextAPI";
 import MyProjects from "./MyProjects";
 const MergeComponenets = dynamic(() => import("./MergeComponenets"), { ssr: false });
  const Home = () => {
    const { isDarkMode } = useContext(MyContext);

    return (
      <div className={`min-h-screen  pt-14 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="flex h-full  w-full">
{/* px-10           */}
          <div className="flex w-full flex-col">



         <div className="min-h-screen flex  w-full">
            <MergeComponenets />
           </div>

          {/* <div>
            <Hero isDarkMode={isDarkMode} />
         </div>

          <div>
            <AboutMe isDarkMode={isDarkMode} />
          </div>
        
          <div>
            <Skills isDarkMode={isDarkMode} />
           </div> */}

            <div className="z-30 px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35">
            <MyProjects />
          
              {/* <ContactMe isDarkMode={isDarkMode} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;

