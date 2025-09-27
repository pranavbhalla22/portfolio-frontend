// src/components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#0A192F] text-center px-6">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-[#64FFDA] mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-white">Pranav Bhalla</span>
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl text-[#CCD6F6] mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Full-Stack Developer | Python & Next.js Enthusiast
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link
          href="/projects"
          className="bg-[#64FFDA] text-[#0A192F] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#52e6c7] transition"
        >
          View My Work
        </Link>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="text-[#64FFDA]" size={28} />
      </motion.div>
    </section>
  );
}
