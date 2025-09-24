"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 cursor-pointer">
            Pranav Bhalla
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <a href="/resume.pdf" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Resume</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 gap-2">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="/resume.pdf" className="block px-4 py-2 bg-indigo-600 text-white rounded-md text-center">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
