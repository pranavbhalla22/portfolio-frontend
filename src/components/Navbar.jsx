"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="bg-[#0d1117] px-8 py-4 shadow-md">
      <div className="flex justify-center items-center space-x-8">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
