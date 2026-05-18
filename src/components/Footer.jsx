import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Real-Time Mouse Position Interceptors
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth layout tracking using advanced spring physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 22 });

  // Map mouse paths cleanly onto background spotlight positions
  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com/keshavpandit94", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/keshav-chandra-pandit-8b0389243", label: "LinkedIn" },
    { icon: <Twitter size={18} />, url: "https://x.com/panditkeshav94", label: "Twitter" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Automated Idle Floating Motion (Active when not manually hovered)
  const autoFloatVariants = {
    animate: {
      rotateX: isHovered ? 0 : [0, 4, -4, 0],
      rotateY: isHovered ? 0 : [0, -4, 4, 0],
      y: isHovered ? 0 : [0, -5, 2, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Automated Idle Spotlight Pointer Simulation (Travels automatically across surface when no mouse is present)
  const autoSpotlightVariants = {
    animate: {
      left: ["20%", "80%", "40%", "10%", "20%"],
      top: ["10%", "30%", "70%", "50%", "10%"],
      opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    // Side Padding Removed on Root Wrapper For Screen Edge Display Bleed Symmetry
    <footer className="w-full mt-auto relative pt-12 pb-8 overflow-hidden perspective-[1000px]">
      
      {/* 1. Auto-Breathing Ambient Base Flare */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[120px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-red-500/10 blur-3xl rounded-full pointer-events-none" 
      />

      {/* Main Footer Floating Panel with Parallax Tilt */}
      <motion.div
        ref={footerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variants={autoFloatVariants}
        animate={isHovered ? "hover" : "animate"}
        style={{ 
          rotateX: isHovered ? rotateX : undefined, 
          rotateY: isHovered ? rotateY : undefined, 
          transformStyle: "preserve-3d" 
        }}
        className={`max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-6 p-6 transition-all duration-500 rounded-3xl border backdrop-blur-xl group cursor-pointer w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-8rem)]
          ${isHovered 
            ? "border-slate-400/50 dark:border-slate-700/60 shadow-[0_30px_60px_-10px_rgba(234,88,12,0.15)] dark:shadow-[0_40px_80px_-15px_rgba(249,115,22,0.25)]" 
            : "border-slate-200/80 dark:border-slate-800/60 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.04)] dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          }
          bg-gradient-to-br from-white/95 via-white/80 to-slate-50/60
          dark:from-slate-900/95 dark:via-slate-900/80 dark:to-slate-950/60
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`}
      >
        {/* Automated Multi-Color Spectrum Overlay Loop */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            opacity: isHovered ? 0.12 : 0.4
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(270deg,rgba(239,68,68,0.05),rgba(59,130,246,0.05),rgba(16,185,129,0.05),rgba(139,92,246,0.05),rgba(239,68,68,0.05))] bg-[length:400%_400%] pointer-events-none transition-opacity duration-500 z-0"
        />

        {/* 2. Ray-Traced Pointer Spotlight */}
        <motion.div 
          className="absolute w-72 h-72 bg-gradient-to-br from-orange-500/15 via-red-500/5 to-transparent blur-3xl rounded-full pointer-events-none transition-opacity duration-500 mix-blend-screen dark:mix-blend-plus-lighter z-0"
          variants={!isHovered ? autoSpotlightVariants : undefined}
          animate={!isHovered ? "animate" : undefined}
          style={{ 
            left: isHovered ? spotlightX : undefined, 
            top: isHovered ? spotlightY : undefined, 
            transform: "translate(-50%, -50%)",
            opacity: isHovered ? 1 : undefined
          }}
        />

        {/* Left Side: Brand Credits - Removed Translate Z Axis For Pristine Flat Text Readability */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 select-none">
            © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 dark:from-orange-400 dark:to-amber-400 font-extrabold">Keshav Chandra Pandit</span>
          </p>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1.5 select-none">
            Crafted with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> & React
          </p>
        </div>

        {/* Center: Interactive Tactile Social Nodes - Maintained 3D Matrix Pop and Lift On Click */}
        <div className="flex items-center gap-3 relative z-10">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/30 transition-colors duration-200 flex items-center justify-center relative z-10"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Right Side: Back up 3D Trigger Button */}
        <div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.05, boxShadow: "0 8px 20px rgba(234,88,12,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:bg-white dark:hover:bg-slate-950 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/30 transition-all duration-200 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back Up</span>
            <ArrowUp size={14} className="transform group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.button>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;