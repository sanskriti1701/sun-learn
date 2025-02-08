"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaCode } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#F9FAFB] text-gray-900 overflow-hidden">

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

      {/* Social Media Links */}
      <div className="mt-8 flex space-x-6">
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-pink-500 text-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin size={28} />
        </a>

        <a
          href="https://leetcode.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-800 text-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <FaCode size={28} />
        </a>

        <a
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-red-500 text-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <FaYoutube size={28} />
        </a>
      </div>


      {/* YouTube Videos Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="p-4 rounded-2xl shadow-lg border border-gray-200 bg-white">
          <h3 className="text-xl font-semibold text-gray-900">Latest Video 🎥</h3>
          <div className="mt-4">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="p-4 rounded-2xl shadow-lg border border-gray-200 bg-white">
          <h3 className="text-xl font-semibold text-gray-900">Another Tutorial 📚</h3>
          <div className="mt-4">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/another-video-id"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.07, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          className="relative p-6 rounded-2xl shadow-2xl backdrop-blur-xl border border-gray-200 transition-all duration-300 bg-white/80 overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8A2BE2]/10 to-[#0070F3]/10 rounded-2xl opacity-0 transition-all duration-300"
            whileHover={{ opacity: 1 }}
          ></motion.div>

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