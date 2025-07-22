"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiDollarSign, FiMonitor, FiBarChart2, FiZap } from 'react-icons/fi';

const talents = [
  { name: "Consultant", icon: <FiUser className="text-nexa-gold text-[1.5rem]" /> },
  { name: "Finance Expert", icon: <FiDollarSign className="text-nexa-gold text-[1.5rem]" /> },
  { name: "Tech Leader", icon: <FiMonitor className="text-nexa-gold text-[1.5rem]" /> },
  { name: "Industry Pro", icon: <FiBarChart2 className="text-nexa-gold text-[1.5rem]" /> },
  { name: "Change Maker", icon: <FiZap className="text-nexa-gold text-[1.5rem]" /> },
];

export default function Talent() {
  return (
    <section id="talent" className="w-full py-14 sm:py-20 relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-nexa-ivory via-pink-50 to-blue-50">
      {/* Creative color accent */}
      <div className="absolute left-0 top-1/3 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-200 via-pink-100 to-nexa-gold/30 rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-yellow-100 via-blue-100 to-nexa-gold/20 rounded-full blur-2xl opacity-50 z-0" />
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nexa-night mb-4 sm:mb-6 text-center z-10">
        Join our <span className="text-nexa-gold">Talent Network</span>
      </h2>
      <p className="text-base sm:text-lg font-sans text-nexa-night/90 mb-6 sm:mb-8 max-w-md sm:max-w-2xl text-center z-10">
        Are you an ambitious leader, expert, or rising star? Nexa Partners connects exceptional talent with transformative opportunities. Join our confidential network to access exclusive executive roles and career guidance.
      </p>
      {/* Animated avatars/icons */}
      <motion.ul
        className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 justify-center items-center mb-8 sm:mb-10 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {talents.map((talent) => (
          <motion.li
            key={talent.name}
            className="flex flex-col items-center bg-white/80 rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 border-2 border-nexa-gold/20 hover:border-nexa-gold transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
            }}
          >
            <span className="mb-1 sm:mb-2 drop-shadow-[0_1px_8px_rgba(199,167,112,0.25)]">{talent.icon}</span>
            <span className="font-sans text-base sm:text-lg text-nexa-night font-medium">{talent.name}</span>
          </motion.li>
        ))}
      </motion.ul>
      {/* Call to action */}
      <motion.a
        href="#contact"
        className="relative z-20 mt-2 sm:mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-nexa-gold bg-nexa-gold/10 text-nexa-gold font-sans font-semibold text-base sm:text-lg backdrop-blur-md hover:bg-nexa-gold hover:text-nexa-night transition-colors duration-300 shadow-lg w-full max-w-xs sm:w-auto text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Join the Network
      </motion.a>
    </section>
  );
} 