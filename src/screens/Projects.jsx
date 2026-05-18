import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
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
        className={`absolute w-85 h-85 bg-gradient-to-br ${spotlightColor} to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 mix-blend-screen dark:mix-blend-plus-lighter z-0`}
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

const Projects = () => {
  const projects = [
    {
      name: "Restaurant Cafe Management System",
      description:
        "Developed a command-line based cafe management system in Python that allows customers to place orders, view bills, and make payments. Implemented menu management, order processing, and basic payment simulation (cash/card).",
      tech: ["Python", "CLI", "Order Management"],
      github: "https://github.com/keshavpandit94/RestaurantCafeManagementWithPaymentMethod",
      demo: "",
      glow: "from-amber-500/25 via-orange-600/15"
    },
    {
      name: "Full Stack E-Learning Platform",
      description:
        "Built a complete online learning system using React.js, Node.js, Express, and MongoDB. Integrated Cloudinary for video & image storage and Razorpay for secure payments. Developed an admin panel for course/content management. Deployed project with a working demo link and shared source code on GitHub & LinkedIn.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Razorpay"],
      github: "https://github.com/keshavpandit94/ELearningWithAdmin",
      demo: "https://elearningweb.onrender.com",
      glow: "from-indigo-500/25 via-blue-600/15"
    },
    {
      name: "Portfolio Website",
      description:
        "Designed and developed my personal portfolio website using React.js and Tailwind CSS. Showcases my skills, projects, and contact information with a responsive layout and dark/light mode support.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/keshavpandit94/Portfolio",
      demo: "https://portfolio-rhzb.onrender.com",
      glow: "from-orange-500/25 via-red-600/15"
    },
    {
      name: "MedAI - AI Healthcare Assistant",
      description:
        "Developed an AI-powered healthcare web application using a Python Flask backend and React (Vite) frontend. The system features three intelligent agents: a Doctor Assistant chatbot for medical queries, a Report Analysis agent for interpreting medical reports, and a Prescription Reader agent for extracting and understanding prescription details. Designed to streamline patient interaction and assist in medical data interpretation.",
      tech: ["React.js", "Vite", "JavaScript", "Python", "Flask", "AI Agents"],
      github: "https://github.com/keshavpandit94/MedAIProject",
      demo: "https://medai-0ssn.onrender.com",
      glow: "from-cyan-500/25 via-emerald-500/15"
    },
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

  const staticLayoutVariants = {
    animate: {
      scale: [1, 1.03, 0.97, 1],
      x: [0, 15, -25, 0],
      y: [0, 35, -15, 0],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative select-none">
      
      {/* Content Canvas Wrapper - Side Padding Cleared for Fluid Edge-to-Edge Display */}
      <div className="w-full flex flex-col items-center pt-36 pb-6 gap-20 sm:gap-24 md:gap-28 perspective-[1200px] relative z-10 flex-1">
        
        {/* Background Animated Layer Fluid Lighting Matrix Emitters */}
        <motion.div 
          variants={invertLayoutVariants}
          animate="animate"
          className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 blur-[130px] rounded-full pointer-events-none will-change-transform z-0" 
        />
        <motion.div 
          variants={shiftLayoutVariants}
          animate="animate"
          className="absolute top-[40rem] right-1/4 w-[550px] h-[550px] bg-gradient-to-bl from-red-500/5 to-rose-500/5 blur-[150px] rounded-full pointer-events-none will-change-transform z-0" 
        />
        <motion.div 
          variants={staticLayoutVariants}
          animate="animate"
          className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 blur-[140px] rounded-full pointer-events-none will-change-transform z-0" 
        />

        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className="w-full max-w-7xl px-4 sm:px-8 flex flex-col items-center gap-4 text-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles size={12} className="text-orange-500" /> Engineering Showcase
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white max-w-5xl leading-[1.1] drop-shadow-sm">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-500 dark:via-orange-400 dark:to-yellow-400 drop-shadow-[0_4px_20px_rgba(239,68,68,0.18)]">Projects</span>
          </h1>
        </motion.div>

        {/* Project Cards Grid - Updated with Flat Typography Readability Settings */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-4 sm:px-8 z-10"
        >
          {projects.map((project, index) => (
            <Interactive3DCard 
              key={index} 
              spotlightColor={project.glow}
              animDelay={index * 0.5}
              className="p-6 md:p-8 flex flex-col justify-between gap-8"
            >
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-3 tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {project.name}
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-5">
                  {project.description}
                </p>

                {/* Tech Badges Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200/40 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors duration-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Hub */}
              <div className="flex gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
                  >
                    <Github size={15} /> Source Code
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02, boxShadow: "0 8px 20px rgba(239,68,68,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-500 dark:via-orange-500 dark:to-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm border border-orange-400/10"
                  >
                    <ExternalLink size={15} /> Live App Demo
                  </motion.a>
                )}
              </div>
            </Interactive3DCard>
          ))}
        </motion.div>
      </div>

      {/* Footer Area Injection with dynamic docking alignment */}
      <Footer />
    </div>
  );
};

export default Projects;