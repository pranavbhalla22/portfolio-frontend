"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Hi, I’m <span className="text-blue-600">Your Name</span>
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl text-gray-600 mb-6">
        A passionate Web Developer building modern web experiences
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-2xl mb-8">
        I specialize in creating responsive, user-friendly applications using
        modern tools like React, Next.js, and Tailwind CSS. Explore my work and
        see how I bring ideas to life through clean design and functionality.
      </p>

      {/* Call-to-action button */}
      <a
        href="#about"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;
