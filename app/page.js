"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#F9FAFB] text-gray-900 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] to-[#f0f3f7]"></div>

        {/* Floating Light Orbs */}
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-[200px] h-[200px] bg-[#8A2BE2] opacity-15 blur-[100px] rounded-full"
        ></motion.div>

        <motion.div
          animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-16 w-[250px] h-[250px] bg-[#0070F3] opacity-15 blur-[120px] rounded-full"
        ></motion.div>
      </div>

      {/* Header Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-center relative z-10 bg-gradient-to-r from-[#8A2BE2] to-[#0070F3] bg-clip-text text-transparent"
      >
        Learn and Grow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-center mt-4 text-gray-700 relative z-10"
      >
        Step-by-step guides for amazing projects!
      </motion.p>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.07, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          className="relative p-6 rounded-2xl shadow-2xl backdrop-blur-xl border border-gray-200 transition-all duration-300 bg-white/80 overflow-hidden"
        >
          {/* Neon Glow on Hover */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8A2BE2]/10 to-[#0070F3]/10 rounded-2xl opacity-0 transition-all duration-300"
            whileHover={{ opacity: 1 }}
          ></motion.div>

          {/* Animated Dots Pattern */}
          <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-r from-[#8A2BE2] to-[#0070F3] opacity-20 rounded-full blur-lg"></div>

          <h3 className="text-2xl font-bold text-gray-900">🚀 Project Title</h3>
          <p className="mt-2 text-gray-600">
            A short description of this awesome project.
          </p>

          <div className="mt-4 flex justify-between items-center">
            <Link href="/suncoin" className="relative text-blue-500 hover:text-blue-600 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
              View Project →
            </Link>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-md"
            >
              🌟
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
