import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load user preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      whileHover={{ 
        scale: 1.06,
        boxShadow: darkMode 
          ? "0 0 25px 4px rgba(139, 92, 246, 0.35), 0 4px 10px rgba(0,0,0,0.3)" 
          : "0 0 25px 4px rgba(249, 115, 22, 0.25), 0 4px 10px rgba(0,0,0,0.05)"
      }}
      whileTap={{ scale: 0.94 }}
      className={`
        relative w-16 h-9 rounded-full p-1 cursor-pointer flex items-center
        transition-all duration-500 border focus:outline-none select-none overflow-hidden preserve-3d
        ${darkMode 
          ? "bg-gradient-to-tr from-slate-950 via-indigo-950 to-slate-900 border-indigo-500/30 shadow-[inset_0_3px_6px_rgba(0,0,0,0.6)]" 
          : "bg-gradient-to-tr from-sky-400 via-amber-200 to-orange-400 border-amber-300/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]"
        }
      `}
      aria-label="Toggle Dark Mode"
    >
      {/* 3D Curved Glass Specular Highlight Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/5 to-transparent pointer-events-none z-20 h-[40%] rounded-t-full" />

      {/* Background Decor System - Luminescent Micro Particles */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none w-full h-full z-0">
        <AnimatePresence>
          {darkMode ? (
            <motion.div 
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.8 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <div className="absolute right-3 top-2 w-1 h-1 bg-amber-200 rounded-full animate-pulse shadow-[0_0_6px_2px_#f59e0b]" />
              <div className="absolute right-8 top-5 w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-ping" />
              <div className="absolute right-5 bottom-2 w-0.5 h-0.5 bg-indigo-300 rounded-full opacity-40 animate-pulse" />
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              animate={{ opacity: 0.7, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <div className="absolute left-3 top-1.5 w-2 h-2 bg-white/60 rounded-full filter blur-[0.5px]" />
              <div className="absolute left-6 bottom-2 w-4 h-1.5 bg-white/40 rounded-full filter blur-[1px]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3D Kinetic Floating Thumb Container */}
      <motion.div
        className={`
          w-7 h-7 rounded-full flex items-center justify-center relative z-10
          transition-all duration-300 transform translate-z-[10px]
          ${darkMode 
            ? "bg-gradient-to-br from-indigo-400 via-purple-600 to-violet-800 text-violet-100 shadow-[0_4px_12px_rgba(139,92,246,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]" 
            : "bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 text-white shadow-[0_4px_12px_rgba(249,115,22,0.5),inset_0_1px_1px_rgba(255,255,255,0.5)]"
          }
        `}
        layout
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 24
        }}
        style={{
          marginLeft: darkMode ? "auto" : "0px"
        }}
      >
        {/* Animated Icons Inside the Moving Thumb */}
        <AnimatePresence mode="wait" initial={false}>
          {darkMode ? (
            <motion.div
              key="moon"
              initial={{ rotate: -120, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 120, scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Moon size={14} className="fill-indigo-100/30 stroke-[2]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 120, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -120, scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Sun size={14} className="stroke-[2.5] drop-shadow-[0_0_3px_rgba(255,255,255,0.6)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;