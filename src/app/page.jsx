"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import ParticlesBackground from "../components/ParticlesBackground"; // 

export default function Home() {
  const roles = ["Software Developer", "Problem Solver", "Tech Enthusiast"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-6">
      {/* Particle background */}
      <ParticlesBackground />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m <span className="text-blue-400">Pranav Bhalla 👋</span>
          </h1>
          <h2 className="text-2xl mb-6 text-gray-300">{roles[index]}</h2>
          <p className="text-lg text-gray-400 mb-6">
            A passionate Software Development student eager to learn, build real-world projects,
            and create impactful applications.
          </p>
          <div className="flex space-x-4">
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md font-semibold"
              >
                View Projects
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md font-semibold"
              >
                Contact Me
              </motion.button>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-md font-semibold"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-lg"
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-2xl text-gray-300">[Your Image]</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
