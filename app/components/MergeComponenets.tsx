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









// import { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import MatterAttractors from "matter-attractors";
// import MatterWrap from "matter-wrap";
// import Skills from "./Skills";
// import AboutMe from "./AboutMe";
// import Hero from "./Hero";
// import { useContext } from "react";
// import { MyContext } from "./ContextAPI";

// // Register plugins


// export default function BackgroundAnimation() {
// Matter.use(MatterAttractors);
// Matter.use(MatterWrap);
//   const canvasRef = useRef<HTMLDivElement>(null);
//   const { isDarkMode } = useContext(MyContext);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const { Engine, Render, Runner, World, Bodies, Body, Mouse, Events, Common } = Matter;

//     const width = canvasRef.current.clientWidth;
//     const height = canvasRef.current.clientHeight;

//     const engine = Engine.create();
//     engine.world.gravity.scale = 0;

//     const render = Render.create({
//       element: canvasRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//         pixelRatio: window.devicePixelRatio,
//       },
//     });

//     const runner = Runner.create();

//     const attractor = Bodies.circle(width / 2, height / 2, Math.max(width, height) / 50, {
//       isStatic: true,
//       render: { 
//         fillStyle: "transparent", 
//         strokeStyle: "transparent", 
//         lineWidth: 0 
//       },
//       plugin: {
//         attractors: [
//           (bodyA: Matter.Body, bodyB: Matter.Body) => ({
//             x: (bodyA.position.x - bodyB.position.x) * 1e-6,
//             y: (bodyA.position.y - bodyB.position.y) * 1e-6,
//           }),
//         ],
//       },
//     });

//     World.add(engine.world, attractor);

//     // Nudge attractor once to start motion
//     Body.translate(attractor, { x: 1, y: 1 });

//     // add shapes exactly like your original code
//     for (let i = 0; i < 60; i++) {
//       const x = Common.random(0, width);
//       const y = Common.random(0, height);
//       const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
//       const sides = Math.floor(Common.random(3, 6));

//       const poly = Bodies.polygon(x, y, sides, s, {
//         mass: s / 20,
//         friction: 0,
//         frictionAir: 0.02,
//         angle: Math.random() * Math.PI * 2,
//         render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
//         plugin: {
//           wrap: {
//             min: { x: 0, y: 0 },
//             max: { x: width, y: height }
//           }
//         }
//       });

//       const c1 = Bodies.circle(x, y, Common.random(2, 8), {
//         mass: 0.1,
//         friction: 0,
//         frictionAir: 0.01,
//         render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
//         plugin: {
//           wrap: {
//             min: { x: 0, y: 0 },
//             max: { x: width, y: height }
//           }
//         }
//       });

//       const c2 = Bodies.circle(x, y, Common.random(2, 20), {
//         mass: 6,
//         friction: 0,
//         frictionAir: 0,
//         render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
//         plugin: {
//           wrap: {
//             min: { x: 0, y: 0 },
//             max: { x: width, y: height }
//           }
//         }
//       });

//       const c3 = Bodies.circle(x, y, Common.random(2, 30), {
//         mass: 0.2,
//         friction: 0.6,
//         frictionAir: 0.8,
//         render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
//         plugin: {
//           wrap: {
//             min: { x: 0, y: 0 },
//             max: { x: width, y: height }
//           }
//         }
//       });

//       World.add(engine.world, [poly, c1, c2, c3]);
//     }

//     const mouse = Mouse.create(render.canvas);
    
//     Events.on(engine, "afterUpdate", () => {
//       if (!mouse.position.x) return;
//       Body.translate(attractor, {
//         x: (mouse.position.x - attractor.position.x) * 0.12,
//         y: (mouse.position.y - attractor.position.y) * 0.12,
//       });
//     });

//     Runner.run(runner, engine);
//     Render.run(render);

//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;
      
//       render.canvas.width = newWidth;
//       render.canvas.height = newHeight;
//       render.options.width = newWidth;
//       render.options.height = newHeight;
      
//       // Update wrapping bounds if needed, though MatterWrap usually handles it if configured
//     };
    
//     // window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       if (render.canvas) {
//         render.canvas.remove();
//       }
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col flex-grow h-full w-full bg-bg-[#0a0a0a]">
//       <div ref={canvasRef} className="overflow-hidden md:block hidden absolute inset-0 h-full w-full  z-10" />
//       <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
//        <div className='z-30 flex flex-col h-full flex-grow gap-2  w-full relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
//            <Hero isDarkMode={isDarkMode} />
//             <AboutMe isDarkMode={isDarkMode} />
//              <Skills isDarkMode={isDarkMode} />
//            </div> 
//     </div>
//   );
// }














// 'use client';

// import { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import MatterAttractors from "matter-attractors";
// import MatterWrap from "matter-wrap";
// import Skills from "./Skills";
// import AboutMe from "./AboutMe";
// import Hero from "./Hero";
// import { useContext } from "react";
// import { MyContext } from "./ContextAPI";

// export default function BackgroundAnimation() {
//   Matter.use(MatterAttractors);
//   Matter.use(MatterWrap);

//   const canvasRef = useRef<HTMLDivElement>(null);
//   const { isDarkMode } = useContext(MyContext);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const { Engine, Render, Runner, World, Bodies, Body, Mouse, Events, Common } = Matter;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const engine = Engine.create();
//     engine.world.gravity.scale = 0;

//     const render = Render.create({
//       element: canvasRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//         pixelRatio: window.devicePixelRatio,
//       },
//     });

//     const runner = Runner.create();

//     const attractor = Bodies.circle(width / 2, height / 2, Math.max(width, height) / 50, {
//       isStatic: true,
//       render: { 
//         fillStyle: "transparent", 
//         strokeStyle: "transparent", 
//         lineWidth: 0 
//       },
//       plugin: {
//         attractors: [
//           (bodyA: Matter.Body, bodyB: Matter.Body) => ({
//             x: (bodyA.position.x - bodyB.position.x) * 1e-6,
//             y: (bodyA.position.y - bodyB.position.y) * 1e-6,
//           }),
//         ],
//       },
//     });

//     World.add(engine.world, attractor);

//     // Nudge attractor once to start motion
//     Body.translate(attractor, { x: 1, y: 1 });

//     // add shapes exactly like your original code
//     for (let i = 0; i < 60; i++) {
//       const x = Common.random(0, width);
//       const y = Common.random(0, height);
//       const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
//       const sides = Math.floor(Common.random(3, 6));

//       const poly = Bodies.polygon(x, y, sides, s, {
//         mass: s / 20,
//         friction: 0,
//         frictionAir: 0.02,
//         angle: Math.random() * Math.PI * 2,
//         render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
//         // ← WRAP REMOVED (this was the only change)
//       });

//       const c1 = Bodies.circle(x, y, Common.random(2, 8), {
//         mass: 0.1,
//         friction: 0,
//         frictionAir: 0.01,
//         render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
//         // ← WRAP REMOVED
//       });

//       const c2 = Bodies.circle(x, y, Common.random(2, 20), {
//         mass: 6,
//         friction: 0,
//         frictionAir: 0,
//         render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
//         // ← WRAP REMOVED
//       });

//       const c3 = Bodies.circle(x, y, Common.random(2, 30), {
//         mass: 0.2,
//         friction: 0.6,
//         frictionAir: 0.8,
//         render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
//         // ← WRAP REMOVED
//       });

//       World.add(engine.world, [poly, c1, c2, c3]);
//     }

//     const mouse = Mouse.create(render.canvas);
    
//     Events.on(engine, "afterUpdate", () => {
//       if (!mouse.position.x) return;
//       Body.translate(attractor, {
//         x: (mouse.position.x - attractor.position.x) * 0.12,
//         y: (mouse.position.y - attractor.position.y) * 0.12,
//       });
//     });

//     Runner.run(runner, engine);
//     Render.run(render);

//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;
      
//       render.canvas.width = newWidth;
//       render.canvas.height = newHeight;
//       render.options.width = newWidth;
//       render.options.height = newHeight;
//     };
    
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       if (render.canvas) {
//         render.canvas.remove();
//       }
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col flex-grow h-full w-full bg-[#0a0a0a]">
//       <div ref={canvasRef} className="overflow-hidden md:block hidden absolute inset-0 h-full w-full  z-10" />
//       <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
//        <div className='z-30 flex flex-col h-full flex-grow gap-2  w-full relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
//            <Hero isDarkMode={isDarkMode} />
//             <AboutMe isDarkMode={isDarkMode} />
//              <Skills isDarkMode={isDarkMode} />
//            </div> 
//     </div>
//   );
// }

















// 'use client';

// import { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import MatterAttractors from "matter-attractors";
// import MatterWrap from "matter-wrap";
// import Skills from "./Skills";
// import AboutMe from "./AboutMe";
// import Hero from "./Hero";
// import { useContext } from "react";
// import { MyContext } from "./ContextAPI";

// export default function BackgroundAnimation() {
//   Matter.use(MatterAttractors);
//   Matter.use(MatterWrap);

//   const canvasRef = useRef<HTMLDivElement>(null);
//   const { isDarkMode } = useContext(MyContext);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const { Engine, Render, Runner, World, Bodies, Body, Mouse, Events, Common } = Matter;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const engine = Engine.create();
//     engine.world.gravity.scale = 0;

//     const render = Render.create({
//       element: canvasRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//         pixelRatio: window.devicePixelRatio,
//       },
//     });

//     const runner = Runner.create();

//     const attractor = Bodies.circle(width / 2, height / 2, Math.max(width, height) / 50, {
//       isStatic: true,
//       render: { 
//         fillStyle: "transparent", 
//         strokeStyle: "transparent", 
//         lineWidth: 0 
//       },
//       plugin: {
//         attractors: [
//           (bodyA: Matter.Body, bodyB: Matter.Body) => ({
//             x: (bodyA.position.x - bodyB.position.x) * 1e-6,
//             y: (bodyA.position.y - bodyB.position.y) * 1e-6,
//           }),
//         ],
//       },
//     });

//     World.add(engine.world, attractor);

//     // add shapes exactly like your original code
//     for (let i = 0; i < 60; i++) {
//       const x = Common.random(0, width);
//       const y = Common.random(0, height);
//       const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
//       const sides = Math.floor(Common.random(3, 6));

//       const poly = Bodies.polygon(x, y, sides, s, {
//         mass: s / 20,
//         friction: 0,
//         frictionAir: 0.02,
//         angle: Math.random() * Math.PI * 2,
//         render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c1 = Bodies.circle(x, y, Common.random(2, 8), {
//         mass: 0.1,
//         friction: 0,
//         frictionAir: 0.01,
//         render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c2 = Bodies.circle(x, y, Common.random(2, 20), {
//         mass: 6,
//         friction: 0,
//         frictionAir: 0,
//         render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
//       });

//       const c3 = Bodies.circle(x, y, Common.random(2, 30), {
//         mass: 0.2,
//         friction: 0.6,
//         frictionAir: 0.8,
//         render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
//       });

//       World.add(engine.world, [poly, c1, c2, c3]);
//     }

//     const mouse = Mouse.create(render.canvas);
    
//     // ← THIS IS THE ONLY CHANGE
//     Events.on(engine, "afterUpdate", () => {
//       if (!mouse.position.x) return;
//       // Instantly place the attractor exactly under the cursor
//       Body.setPosition(attractor, {
//         x: mouse.position.x,
//         y: mouse.position.y,
//       });
//     });

//     Runner.run(runner, engine);
//     Render.run(render);

//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;
      
//       render.canvas.width = newWidth;
//       render.canvas.height = newHeight;
//       render.options.width = newWidth;
//       render.options.height = newHeight;
//     };
    
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       if (render.canvas) {
//         render.canvas.remove();
//       }
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col flex-grow h-full w-full bg-[#0a0a0a]">
//       <div ref={canvasRef} className="overflow-hidden md:block hidden absolute inset-0 h-full w-full  z-10" />
//       <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
//        <div className='z-30 flex flex-col h-full flex-grow gap-2  w-full relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
//            <Hero isDarkMode={isDarkMode} />
//             <AboutMe isDarkMode={isDarkMode} />
//              <Skills isDarkMode={isDarkMode} />
//            </div> 
//     </div>
//   );
// }





// 'use client';

// import { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import MatterAttractors from "matter-attractors";
// import MatterWrap from "matter-wrap";
// import Skills from "./Skills";
// import AboutMe from "./AboutMe";
// import Hero from "./Hero";
// import { useContext } from "react";
// import { MyContext } from "./ContextAPI";

// export default function BackgroundAnimation() {
//   Matter.use(MatterAttractors);
//   Matter.use(MatterWrap);

//   const canvasRef = useRef<HTMLDivElement>(null);
//   const { isDarkMode } = useContext(MyContext);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const { Engine, Render, Runner, World, Bodies, Body, Mouse, Events, Common } = Matter;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const engine = Engine.create();
//     engine.world.gravity.scale = 0;

//     const render = Render.create({
//       element: canvasRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//         pixelRatio: window.devicePixelRatio,
//       },
//     });

//     const runner = Runner.create();

//     // Attractor (the "black bubble")
//     const attractor = Bodies.circle(width / 2, height / 2, Math.max(width, height) / 50, {
//       isStatic: true,
//       render: { 
//         fillStyle: "transparent", 
//         strokeStyle: "transparent", 
//         lineWidth: 0 
//       },
//       plugin: {
//         attractors: [
//           (bodyA: Matter.Body, bodyB: Matter.Body) => ({
//             x: (bodyA.position.x - bodyB.position.x) * 1e-6,
//             y: (bodyA.position.y - bodyB.position.y) * 1e-6,
//           }),
//         ],
//       },
//     });

//     World.add(engine.world, attractor);

//     // Add all shapes (no wrap, exact same as before)
//     for (let i = 0; i < 60; i++) {
//       const x = Common.random(0, width);
//       const y = Common.random(0, height);
//       const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
//       const sides = Math.floor(Common.random(3, 6));

//       const poly = Bodies.polygon(x, y, sides, s, {
//         mass: s / 20,
//         friction: 0,
//         frictionAir: 0.02,
//         angle: Math.random() * Math.PI * 2,
//         render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c1 = Bodies.circle(x, y, Common.random(2, 8), {
//         mass: 0.1,
//         friction: 0,
//         frictionAir: 0.01,
//         render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c2 = Bodies.circle(x, y, Common.random(2, 20), {
//         mass: 6,
//         friction: 0,
//         frictionAir: 0,
//         render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
//       });

//       const c3 = Bodies.circle(x, y, Common.random(2, 30), {
//         mass: 0.2,
//         friction: 0.6,
//         frictionAir: 0.8,
//         render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
//       });

//       World.add(engine.world, [poly, c1, c2, c3]);
//     }

//     const mouse = Mouse.create(render.canvas);

//     // ← INSTANT EXACT CURSOR FOLLOWING
//     const updateAttractorPosition = () => {
//       if (!mouse.position.x) return;
//       Body.setPosition(attractor, {
//         x: mouse.position.x,
//         y: mouse.position.y,
//       });
//     };

//     // Update on every mouse/touch move (most responsive way)
//     render.canvas.addEventListener("mousemove", updateAttractorPosition);
//     render.canvas.addEventListener("touchmove", (e) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       mouse.position.x = touch.clientX;
//       mouse.position.y = touch.clientY;
//       updateAttractorPosition();
//     });

//     // Also keep the physics loop update as backup
//     Events.on(engine, "afterUpdate", updateAttractorPosition);

//     Runner.run(runner, engine);
//     Render.run(render);

//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;
      
//       render.canvas.width = newWidth;
//       render.canvas.height = newHeight;
//       render.options.width = newWidth;
//       render.options.height = newHeight;
//     };
    
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       render.canvas.removeEventListener("mousemove", updateAttractorPosition);
//       render.canvas.removeEventListener("touchmove", () => {});
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       if (render.canvas) render.canvas.remove();
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col flex-grow h-full w-full bg-[#0a0a0a]">
//       <div ref={canvasRef} className="overflow-hidden md:block hidden absolute inset-0 h-full w-full z-10" />
//       <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
//       <div className='z-30 flex flex-col h-full flex-grow gap-2 w-full relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
//         <Hero isDarkMode={isDarkMode} />
//         <AboutMe isDarkMode={isDarkMode} />
//         <Skills isDarkMode={isDarkMode} />
//       </div> 
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import MatterAttractors from "matter-attractors";
// import MatterWrap from "matter-wrap";
// import Skills from "./Skills";
// import AboutMe from "./AboutMe";
// import Hero from "./Hero";
// import { useContext } from "react";
// import { MyContext } from "./ContextAPI";

// export default function BackgroundAnimation() {
//   Matter.use(MatterAttractors);
//   Matter.use(MatterWrap);

//   const canvasRef = useRef<HTMLDivElement>(null);
//   const { isDarkMode } = useContext(MyContext);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const { Engine, Render, Runner, World, Bodies, Body, Events, Common } = Matter;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const engine = Engine.create();
//     engine.world.gravity.scale = 0;

//     const render = Render.create({
//       element: canvasRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//         pixelRatio: window.devicePixelRatio,
//       },
//     });

//     const runner = Runner.create();

//     // The attractor (black bubble)
//     const attractor = Bodies.circle(width / 2, height / 2, Math.max(width, height) / 50, {
//       isStatic: true,
//       render: { 
//         fillStyle: "transparent", 
//         strokeStyle: "transparent", 
//         lineWidth: 0 
//       },
//       plugin: {
//         attractors: [
//           (bodyA: Matter.Body, bodyB: Matter.Body) => ({
//             x: (bodyA.position.x - bodyB.position.x) * 1e-6,
//             y: (bodyA.position.y - bodyB.position.y) * 1e-6,
//           }),
//         ],
//       },
//     });

//     World.add(engine.world, attractor);

//     // Add shapes (exact same as before)
//     for (let i = 0; i < 60; i++) {
//       const x = Common.random(0, width);
//       const y = Common.random(0, height);
//       const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
//       const sides = Math.floor(Common.random(3, 6));

//       const poly = Bodies.polygon(x, y, sides, s, {
//         mass: s / 20,
//         friction: 0,
//         frictionAir: 0.02,
//         angle: Math.random() * Math.PI * 2,
//         render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c1 = Bodies.circle(x, y, Common.random(2, 8), {
//         mass: 0.1,
//         friction: 0,
//         frictionAir: 0.01,
//         render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c2 = Bodies.circle(x, y, Common.random(2, 20), {
//         mass: 6,
//         friction: 0,
//         frictionAir: 0,
//         render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
//       });

//       const c3 = Bodies.circle(x, y, Common.random(2, 30), {
//         mass: 0.2,
//         friction: 0.6,
//         frictionAir: 0.8,
//         render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
//       });

//       World.add(engine.world, [poly, c1, c2, c3]);
//     }

//     // ← INSTANT & EXACT CURSOR FOLLOWING (this is the fix)
//     const updateAttractor = (clientX: number, clientY: number) => {
//       // Since the canvas is absolute inset-0, client coordinates map 1:1
//       Body.setPosition(attractor, {
//         x: clientX,
//         y: clientY,
//       });
//     };

//     // Mouse move
//     const handleMouseMove = (e: MouseEvent) => {
//       updateAttractor(e.clientX, e.clientY);
//     };

//     // Touch move
//     const handleTouchMove = (e: TouchEvent) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       updateAttractor(touch.clientX, touch.clientY);
//     };

//     // Add listeners directly to the canvas
//     const canvasElement = render.canvas;
//     canvasElement.addEventListener("mousemove", handleMouseMove);
//     canvasElement.addEventListener("touchmove", handleTouchMove, { passive: false });

//     // Start the engine
//     Runner.run(runner, engine);
//     Render.run(render);

//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;
      
//       render.canvas.width = newWidth;
//       render.canvas.height = newHeight;
//       render.options.width = newWidth;
//       render.options.height = newHeight;
//     };
    
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       canvasElement.removeEventListener("mousemove", handleMouseMove);
//       canvasElement.removeEventListener("touchmove", handleTouchMove);
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       if (render.canvas) render.canvas.remove();
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col flex-grow h-full w-full bg-[#0a0a0a]">
//       <div ref={canvasRef} className="overflow-hidden md:block hidden absolute inset-0 h-full w-full z-10" />
//       <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
//       <div className='z-30 flex flex-col h-full flex-grow gap-2 w-full relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
//         <Hero isDarkMode={isDarkMode} />
//         <AboutMe isDarkMode={isDarkMode} />
//         <Skills isDarkMode={isDarkMode} />
//       </div> 
//     </div>
//   );
// }


// 'use client';
// import { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import MatterAttractors from "matter-attractors";
// import MatterWrap from "matter-wrap";
// import Skills from "./Skills";
// import AboutMe from "./AboutMe";
// import Hero from "./Hero";
// import { useContext } from "react";
// import { MyContext } from "./ContextAPI";

// export default function BackgroundAnimation() {
//   Matter.use(MatterAttractors);
//   Matter.use(MatterWrap);

//   const canvasRef = useRef<HTMLDivElement>(null);
//   const { isDarkMode } = useContext(MyContext);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const { Engine, Render, Runner, World, Bodies, Body, Events, Common } = Matter;

//     const width = canvasRef.current.clientWidth;
//     const height = canvasRef.current.clientHeight;

//     const engine = Engine.create();
//     engine.world.gravity.scale = 0;

//     const render = Render.create({
//       element: canvasRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//         pixelRatio: window.devicePixelRatio,
//       },
//     });

//     const runner = Runner.create();

//     const attractor = Bodies.circle(width / 2, height / 2, Math.max(width, height) / 50, {
//       isStatic: true,
//       render: { 
//         fillStyle: "transparent", 
//         strokeStyle: "transparent", 
//         lineWidth: 0 
//       },
//       plugin: {
//         attractors: [
//           (bodyA: Matter.Body, bodyB: Matter.Body) => ({
//             x: (bodyA.position.x - bodyB.position.x) * 1e-6,
//             y: (bodyA.position.y - bodyB.position.y) * 1e-6,
//           }),
//         ],
//       },
//     });

//     World.add(engine.world, attractor);

//     // Add shapes (unchanged)
//     for (let i = 0; i < 60; i++) {
//       const x = Common.random(0, width);
//       const y = Common.random(0, height);
//       const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
//       const sides = Math.floor(Common.random(3, 6));

//       const poly = Bodies.polygon(x, y, sides, s, {
//         mass: s / 20,
//         friction: 0,
//         frictionAir: 0.02,
//         angle: Math.random() * Math.PI * 2,
//         render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c1 = Bodies.circle(x, y, Common.random(2, 8), {
//         mass: 0.1,
//         friction: 0,
//         frictionAir: 0.01,
//         render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
//       });

//       const c2 = Bodies.circle(x, y, Common.random(2, 20), {
//         mass: 6,
//         friction: 0,
//         frictionAir: 0,
//         render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
//       });

//       const c3 = Bodies.circle(x, y, Common.random(2, 30), {
//         mass: 0.2,
//         friction: 0.6,
//         frictionAir: 0.8,
//         render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
//       });

//       World.add(engine.world, [poly, c1, c2, c3]);
//     }

//     // PIXEL-PERFECT CURSOR FOLLOWING (this is the final fix)
//     const updateAttractor = (clientX: number, clientY: number) => {
//       const rect = render.canvas.getBoundingClientRect();
//       const x = clientX - rect.left;
//       const y = clientY - rect.top;
      
//       Body.setPosition(attractor, { x, y });
//     };

//     const handleMouseMove = (e: MouseEvent) => updateAttractor(e.clientX, e.clientY);
    
//     const handleTouchMove = (e: TouchEvent) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       updateAttractor(touch.clientX, touch.clientY);
//     };

//     const canvasElement = render.canvas;
//     canvasElement.addEventListener("mousemove", handleMouseMove);
//     canvasElement.addEventListener("touchmove", handleTouchMove, { passive: false });

//     Runner.run(runner, engine);
//     Render.run(render);

//     const handleResize = () => {
//       const newWidth = canvasRef?.current?.clientWidth;
//       const newHeight = canvasRef?.current?.clientHeight;
//        if(!newWidth || !newHeight) return;
//       render.canvas.width = newWidth;
//       render.canvas.height = newHeight;
//       render.options.width = newWidth;
//       render.options.height = newHeight;
//     };
    
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       canvasElement.removeEventListener("mousemove", handleMouseMove);
//       canvasElement.removeEventListener("touchmove", handleTouchMove);
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       if (render.canvas) render.canvas.remove();
//     };
//   }, []);

//   return (
//     <div className={`relative flex flex-col h-full w-full ${isDarkMode ? 'bg-white' : 'bg-white'}`}>
//       <div ref={canvasRef} className="overflow-hidden bg-red-900 md:block hidden absolute inset-0 h-full w-full z-10" />
//       <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
//       <div className='z-30 flex flex-col h-full flex-grow gap-2 w-full relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
//         <Hero isDarkMode={isDarkMode} />
//         <AboutMe isDarkMode={isDarkMode} />
//         <Skills isDarkMode={isDarkMode} />
//       </div> 
//     </div>
//   );
// }



'use client';

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import { useContext } from "react";
import { MyContext } from "./ContextAPI";

export default function BackgroundAnimation() {
  Matter.use(MatterAttractors);
  Matter.use(MatterWrap);

  const canvasRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useContext(MyContext);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { Engine, Render, Runner, World, Bodies, Body, Events, Common } = Matter;

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

    render.canvas.style.width = "100%";
    render.canvas.style.height = "100%";

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
      });

      const c1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: { fillStyle: Common.random() > 0.3 ? "#27292d" : "#444", strokeStyle: "#000", lineWidth: 2 },
      });

      const c2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: { fillStyle: Common.random() > 0.3 ? "#334443" : "#222", strokeStyle: "#111", lineWidth: 4 },
      });

      const c3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: { fillStyle: "#191919", strokeStyle: "#111", lineWidth: 3 },
      });

      World.add(engine.world, [poly, c1, c2, c3]);
    }

    const updateAttractor = (clientX: number, clientY: number) => {
      const rect = render.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      Body.setPosition(attractor, { x, y });
    };

    const handleMouseMove = (e: MouseEvent) => updateAttractor(e.clientX, e.clientY);
    
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      updateAttractor(touch.clientX, touch.clientY);
    };

    const canvasElement = render.canvas;
    canvasElement.addEventListener("mousemove", handleMouseMove);
    canvasElement.addEventListener("touchmove", handleTouchMove, { passive: false });

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      const newWidth = canvasRef?.current?.clientWidth;
      const newHeight = canvasRef?.current?.clientHeight;
      if (!newWidth || !newHeight) return;

      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvasElement.removeEventListener("mousemove", handleMouseMove);
      canvasElement.removeEventListener("touchmove", handleTouchMove);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, []);

  return (
    <div className={`relative h-full w-full ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div ref={canvasRef} className="overflow-hidden md:block hidden absolute inset-0 h-full w-full z-10" />
      <div className="fixed top-0 left-0 md:block hidden w-full h-full bg-black/40 z-20 pointer-events-none" />
      <div className='z-30 flex flex-col h-full flex-grow gap-2 w-full relative pointer-events-none px-5 sm:px-10 md:px-20 lg:px-27 xl:px-35'>
        <Hero isDarkMode={isDarkMode} />
        <AboutMe isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
      </div> 
    </div>
  );
}