"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-emerald-dark text-white px-6">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-gold-base">Pranav Bhalla</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gold-light mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate developer creating elegant, user-friendly solutions with modern
        web technologies.
      </motion.p>

      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="px-6 py-3 rounded-xl bg-gold-base text-emerald-dark font-semibold hover:bg-gold-light transition-all shadow-md">
          View My Work
        </button>
        <button className="px-6 py-3 rounded-xl border-2 border-gold-base text-gold-base font-semibold hover:bg-gold-base hover:text-emerald-dark transition-all">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}
