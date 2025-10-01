"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: "#fbbf24" },
          move: { enable: true, speed: 0.5, random: true },
          number: { value: 40, density: { enable: true, area: 800 } },
          opacity: {
            value: { min: 0.3, max: 0.7 },
            animation: { enable: true, speed: 1, sync: false },
          },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
