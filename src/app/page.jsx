"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen animated-bg flex flex-col items-center justify-center text-white px-6 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Pranav Bhalla 
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate Software Development Student eager to learn, build real-world
        projects, and create impactful applications.
      </motion.p>

      <div className="flex space-x-4">
        <Link href="/projects">
          <motion.button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.button>
        </Link>

        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold shadow-lg"
        >
          Contact Me
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <p>Email: pranav@example.com</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
