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