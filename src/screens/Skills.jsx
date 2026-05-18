import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Code2,
  Database,
  Terminal,
  Monitor,
  Smartphone,
  FileText,
  Layout,
  Layers,
  Sparkles,
} from "lucide-react";
import Footer from "../components/Footer";

// High-End Adaptive Chromatic Multi-Color Auto-Breathing 3D Card Shell Component
const Interactive3DCard = ({ children, className, spotlightColor = "from-orange-500/20 via-red-500/10", animDelay = 0 }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Real-Time Vector Position Interceptors
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-Precision Spring Physics Interpolation Trackers
  const springRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 220, damping: 22 });
  const springRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 220, damping: 22 });

  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Staggered Automated Wave Float Loops (Runs when idle)
  const autoFloatVariants = {
    animate: {
      rotateX: isHovered ? 0 : [0, 6, -4, 0],
      rotateY: isHovered ? 0 : [0, -5, 6, 0],
      y: isHovered ? 0 : [0, -10, 4, 0],
      transition: {
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animDelay
      }
    }
  };

  // Automated Idle Spotlight Pointer Simulation
  const autoSpotlightVariants = {
    animate: {
      left: ["15%", "85%", "50%", "20%", "15%"],
      top: ["20%", "40%", "80%", "60%", "20%"],
      opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animDelay
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={autoFloatVariants}
      animate={isHovered ? "hover" : "animate"}
      style={{ 
        rotateX: isHovered ? springRotateX : undefined, 
        rotateY: isHovered ? springRotateY : undefined, 
        transformStyle: "preserve-3d" 
      }}
      className={`relative rounded-3xl border transition-all duration-500 overflow-hidden backdrop-blur-xl group cursor-pointer will-change-transform
        ${isHovered 
          ? "border-slate-400/50 dark:border-slate-700/60 shadow-[0_30px_60px_-10px_rgba(234,88,12,0.15)] dark:shadow-[0_40px_80px_-15px_rgba(249,115,22,0.25)]" 
          : "border-slate-200/80 dark:border-slate-800/60 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.04)] dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
        } 
        bg-gradient-to-br from-white/95 via-white/80 to-slate-50/60 
        dark:from-slate-900/95 dark:via-slate-900/80 dark:to-slate-950/60 
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none z-20 h-[45%] rounded-t-3xl" />

      {/* Automated Infinite Shifting Color Spectrum Grid Layer */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: isHovered ? 0.15 : 0.5
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(270deg,rgba(239,68,68,0.07),rgba(59,130,246,0.07),rgba(16,185,129,0.07),rgba(139,92,246,0.07),rgba(239,68,68,0.07))] bg-[length:400%_400%] pointer-events-none transition-opacity duration-500 z-0"
      />

      {/* Ray-Traced Pointer Spotlight Tracker */}
      <motion.div 
        className={`absolute w-85 h-85 bg-gradient-to-br ${spotlightColor} to-transparent blur-3xl rounded-full pointer-events-none transition-opacity duration-500 mix-blend-screen dark:mix-blend-plus-lighter z-0`}
        variants={!isHovered ? autoSpotlightVariants : undefined}
        animate={!isHovered ? "animate" : undefined}
        style={{ 
          left: isHovered ? spotlightX : undefined, 
          top: isHovered ? spotlightY : undefined, 
          transform: "translate(-50%, -50%)",
          opacity: isHovered ? 1 : undefined
        }}
      />

      {/* Volumetric Layer Shell */}
      <div className="w-full h-full relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "MERN Stack", icon: <Code2 size={22} />, glow: "from-orange-500/25 via-red-500/15" },
    { name: "React Native", icon: <Smartphone size={22} />, glow: "from-cyan-500/25 via-blue-500/15" },
    { name: "React JS", icon: <Monitor size={22} />, glow: "from-sky-500/25 via-indigo-500/15" },
    { name: "Node JS", icon: <Terminal size={22} />, glow: "from-emerald-500/25 via-green-500/15" },
    { name: "MongoDB", icon: <Database size={22} />, glow: "from-green-500/25 via-teal-500/15" },
    { name: "Express JS", icon: <Layers size={22} />, glow: "from-slate-500/25 via-amber-500/15" },
    { name: "JavaScript", icon: <Code2 size={22} />, glow: "from-yellow-500/25 via-orange-500/15" },
    { name: "TypeScript", icon: <Code2 size={22} />, glow: "from-blue-500/25 via-sky-500/15" },
    { name: "SQL Database", icon: <Database size={22} />, glow: "from-indigo-500/25 via-cyan-500/15" },
    { name: "HTML5", icon: <FileText size={22} />, glow: "from-orange-600/25 via-red-500/15" },
    { name: "CSS3", icon: <Layout size={22} />, glow: "from-blue-600/25 via-pink-500/15" },
    { name: "Python", icon: <Terminal size={22} />, glow: "from-amber-500/25 via-blue-600/15" },
  ];

  const scrollFadeVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 16 } }
  };

  const invertLayoutVariants = {
    animate: {
      scale: [1, 1.05, 0.94, 1],
      x: [0, 30, -20, 0],
      y: [0, -40, 20, 0],
      transition: { duration: 15, repeat: Infinity, ease: "linear" }
    }
  };

  const shiftLayoutVariants = {
    animate: {
      scale: [1, 0.92, 1.06, 1],
      x: [0, -40, 30, 0],
      y: [0, 20, -50, 0],
      transition: { duration: 18, repeat: Infinity, ease: "linear" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative select-none">
      
      {/* Content Canvas Wrapper - Side Padding Removed for Grid Display Bleed */}
      <div className="w-full flex flex-col items-center pt-36 pb-6 gap-20 sm:gap-24 md:gap-28 perspective-[1200px] relative z-10 flex-1">
        
        {/* Background Animated Layer Fluid Lighting Matrix Emitters */}
        <motion.div 
          variants={invertLayoutVariants}
          animate="animate"
          className="absolute top-20 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/10 to-transparent blur-[120px] rounded-full pointer-events-none will-change-transform z-0" 
        />
        <motion.div 
          variants={shiftLayoutVariants}
          animate="animate"
          className="absolute top-[35rem] right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-red-500/5 to-transparent blur-[140px] rounded-full pointer-events-none will-change-transform z-0" 
        />

        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className="w-full max-w-7xl px-4 sm:px-8 flex flex-col items-center gap-4 text-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles size={12} className="text-orange-500" /> Technology Stack
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white max-w-5xl leading-[1.1] drop-shadow-sm">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-500 dark:via-orange-400 dark:to-yellow-400 drop-shadow-[0_4px_20px_rgba(239,68,68,0.18)]">Skills</span>
          </h1>
        </motion.div>

        {/* Skills Cards Grid - Clean flat text visibility config */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-7xl w-full px-4 sm:px-8 z-10"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Interactive3DCard 
                spotlightColor={skill.glow} 
                animDelay={index * 0.15}
                className="px-4 py-8 flex flex-col items-center justify-center gap-4 text-center font-bold"
              >
                {/* Clean Hover Translation Scaling */}
                <div className="text-slate-600 dark:text-slate-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  {skill.icon}
                </div>
                
                {/* 2D Flat Readability Typography Overrides */}
                <span className="text-slate-800 dark:text-slate-200 text-sm md:text-base tracking-wide select-none transition-colors duration-200 group-hover:text-slate-950 dark:group-hover:text-white">
                  {skill.name}
                </span>
              </Interactive3DCard>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="h-4" />
      </div>

      {/* Footer Area Injection with fixed dynamic docking alignment */}
      <Footer />
    </div>
  );
};

export default Skills;