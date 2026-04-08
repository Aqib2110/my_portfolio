// "use client";

// import { useEffect, useRef } from "react";
// import  {initMatter}  from "../utils/matter";

// export default function MergeComponents() {
//   const canvasRef = useRef<any>(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Optional: disable on small screens
//     if (window.innerWidth < 768) return;

//     const cleanup = initMatter(canvasRef);

//     const handleResize = () => {
//       if (!canvasRef.current) return;
//       canvasRef.current.width = window.innerWidth;
//       canvasRef.current.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       cleanup();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="relative w-screen h-screen">
//       {/* Matter.js canvas */}
//       <div ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-10" />
//       {/* Dark overlay */}
//       <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-20 pointer-events-none" />
//     </div>
//   );
// }




// "use client";

// import { useEffect, useRef } from "react";
// import { initMatter } from "../utils/matter";

// export default function BackgroundAnimation() {
//   const canvasRef = useRef<any>(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Only enable on medium screens and above (optional)
//     if (window.innerWidth < 768) return;

//     const cleanup = initMatter(canvasRef);

//     // Update canvas size on resize
//     const handleResize = () => {
//       if (!canvasRef.current) return;
//       canvasRef.current.width = window.innerWidth;
//       canvasRef.current.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       cleanup();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
    // // <div className="relative w-screen h-screen">
    // //   {/* Matter.js canvas */}
    // //   <div ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-10" />
    // //   {/* Dark overlay */}
    // //   <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-20 pointer-events-none" />
    // // </div>
    //  <div className='relative min-h-screen'>
    //     <div className='fixed w-full h-full top-0 left-0 z-20 bg-black/50 pointer-events-none'>

    //     </div>
    //     <div ref={canvasRef} className='fixed  w-full h-[600px] top-0 left-0 z-10'>


    //     </div>
    //    {/* <div className='z-100 relative'>
    //         <Hero isDarkMode={isDarkMode} />


         
    //         <AboutMe isDarkMode={isDarkMode} />
     
        
     
    //         <Skills isDarkMode={isDarkMode} />
    //        </div> */}
    // </div>
//   );
// }









import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import { useContext } from "react";
import { MyContext } from "./ContextAPI";

// Register plugins


export default function BackgroundAnimation() {
Matter.use(MatterAttractors);
Matter.use(MatterWrap);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useContext(MyContext);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { Engine, Render, Runner, World, Bodies, Body, Mouse, Events, Common } = Matter;

    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    const engine = Engine.create();
    engine.world.gravity.scale = 0;

    const render = Render.create({
      element: canvasRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });

    const runner = Runner.create();

    const attractor = Bodies.circle(width / 2, height / 2, Math.max(width, height) / 50, {
      isStatic: true,
      render: { 
        fillStyle: "transparent", 
        strokeStyle: "transparent", 
        lineWidth: 0 
      },
      plugin: {
        attractors: [
          (bodyA: Matter.Body, bodyB: Matter.Body) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          }),
        ],
      },
    });

    World.add(engine.world, attractor);

    // Nudge attractor once to start motion
    Body.translate(attractor, { x: 1, y: 1 });

    // add shapes exactly like your original code
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, width);
      const y = Common.random(0, height);
      const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const sides = Math.floor(Common.random(3, 6));

      const poly = Bodies.polygon(x, y, sides, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.random() * Math.PI * 2,
        render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: width, y: height }
          }
        }
      });

      const c1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: width, y: height }
          }
        }
      });

      const c2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: width, y: height }
          }
        }
      });

      const c3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: width, y: height }
          }
        }
      });

      World.add(engine.world, [poly, c1, c2, c3]);
    }

    const mouse = Mouse.create(render.canvas);
    
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractor, {
        x: (mouse.position.x - attractor.position.x) * 0.12,
        y: (mouse.position.y - attractor.position.y) * 0.12,
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;
      
      // Update wrapping bounds if needed, though MatterWrap usually handles it if configured
    };
    
    // window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col flex-grow h-full w-full bg-bg-[#0a0a0a]">
      <div ref={canvasRef} className="overflow-hidden md:block hidden absolute inset-0 h-full w-full  z-10" />
      <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
       <div className='z-30 flex flex-col h-full w-full flex-grow relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
           <Hero isDarkMode={isDarkMode} />


         
           <AboutMe isDarkMode={isDarkMode} />
     
        
     
           <Skills isDarkMode={isDarkMode} />
           </div> 
    </div>
  );
}
