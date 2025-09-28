"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 -z-10"
    >
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            links: {
              enable: true,
              color: "#3b82f6",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
        }}
      />
    </motion.div>
  );
}
