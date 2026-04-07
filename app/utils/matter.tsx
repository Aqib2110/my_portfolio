"use client";

import Matter from "matter-js";
import "matter-wrap";
import "matter-attractors";

export function initMatter(canvasRef:any) {
  if (!canvasRef.current) return () => {};

  const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const { Engine, Render, Runner, World, Bodies, Body, Mouse, Events, Common } = Matter;

  Matter.use("matter-attractors");
  Matter.use("matter-wrap");

  const engine = Engine.create();
  engine.world.gravity.scale = 0;

  const render = Render.create({
    element: canvasRef.current,
    engine,
    options: {
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: "transparent",
    },
  });

  const runner = Runner.create();

  // Central attractor
  const attractiveBody = Bodies.circle(
    dimensions.width / 2,
    dimensions.height / 2,
    Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
    {
      isStatic: true,
      render: { fillStyle: "#000", strokeStyle: "#000", lineWidth: 0 },
      plugin: {
        attractors: [
          (bodyA:any, bodyB:any) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          }),
        ],
      },
    }
  );
  World.add(engine.world, attractiveBody);

  // Add random bodies
  for (let i = 0; i < 60; i++) {
    const x = Common.random(0, dimensions.width);
    const y = Common.random(0, dimensions.height);
    const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);

    const poly = Bodies.polygon(x, y, Common.random(3, 6), s, {
      mass: s / 20,
      friction: 0,
      frictionAir: 0.02, // reduced frictionAir for movement
      angle: Math.round(Math.random() * 360),
      render: { fillStyle: "#222222", strokeStyle: "#000", lineWidth: 2 },
    });
    World.add(engine.world, poly);

    const r = Common.random(0, 1);

    const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
      mass: 0.1,
      friction: 0,
      frictionAir: 0.01,
      render: { fillStyle: r > 0.3 ? "#27292d" : "#444444", strokeStyle: "#000", lineWidth: 2 },
    });

    const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
      mass: 6,
      friction: 0,
      frictionAir: 0.01,
      render: { fillStyle: r > 0.3 ? "#334443" : "#222222", strokeStyle: "#111111", lineWidth: 4 },
    });

    const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
      mass: 0.2,
      friction: 0.6,
      frictionAir: 0.01,
      render: { fillStyle: "#191919", strokeStyle: "#111111", lineWidth: 3 },
    });

    World.add(engine.world, [circle1, circle2, circle3]);
  }

  // Mouse control
  const mouse = Mouse.create(render.canvas);
  Events.on(engine, "afterUpdate", () => {
    if (!mouse.position.x) return;
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
  });

  // Small initial nudge so bodies start moving immediately
  Body.translate(attractiveBody, { x: 1, y: 1 });

  Runner.run(runner, engine);
  Render.run(render);

  // Cleanup function
  return () => {
    Render.stop(render);
    Runner.stop(runner);
    World.clear(engine.world, false);
    Engine.clear(engine);
  };
}