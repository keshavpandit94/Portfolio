import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Laptop, Code2, Database, Smartphone, Github, Sparkles } from "lucide-react";
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

const About = () => {
  const skills = [
    "MERN Stack", "React Native", "React JS", "Node JS", "MongoDB", "Express JS",
    "JavaScript", "TypeScript", "SQL Database", "HTML5", "CSS3", "Python",
  ];

  const highlights = [
    {
      title: "Full Stack Development",
      description: "Building modern scalable web ecosystems using MERN stack layers.",
      icon: <Laptop size={24} />,
      glow: "from-red-500/25 via-orange-500/15"
    },
    {
      title: "Mobile Apps",
      description: "Engineered responsive cross-platform native designs with React Native.",
      icon: <Smartphone size={24} />,
      glow: "from-blue-500/25 via-indigo-500/15"
    },
    {
      title: "Database Expertise",
      description: "Relational data configuration and schema maps using MongoDB & SQL engines.",
      icon: <Database size={24} />,
      glow: "from-emerald-500/25 via-teal-500/15"
    },
    {
      title: "Version Control",
      description: "Advanced Git deployment matrices and cloud infrastructure mapping.",
      icon: <Github size={24} />,
      glow: "from-slate-500/25 via-violet-500/15"
    },
    {
      title: "Clean Architecture",
      description: "Writing highly optimized, reusable modules across JavaScript, TypeScript, and Python.",
      icon: <Code2 size={24} />,
      glow: "from-amber-500/25 via-yellow-500/15"
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative select-none">
      
      {/* Content Canvas Wrapper - Side Paddings Removed for Screen Edge Display Bleed */}
      <div className="w-full flex flex-col items-center pt-36 pb-6 gap-20 sm:gap-24 md:gap-28 perspective-[1200px] relative z-10 flex-1">
        
        {/* Background Animated Layer Fluid Lighting Matrix Emitters */}
        <motion.div 
          variants={invertLayoutVariants}
          animate="animate"
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/15 via-red-500/10 to-amber-500/5 blur-[130px] rounded-full pointer-events-none will-change-transform z-0" 
        />
        <motion.div 
          variants={shiftLayoutVariants}
          animate="animate"
          className="absolute top-[45rem] right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-500/5 via-blue-500/10 to-purple-500/5 blur-[160px] rounded-full pointer-events-none will-change-transform z-0" 
        />

        {/* Hero Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className="w-full max-w-7xl px-4 sm:px-8 flex flex-col items-center gap-4 text-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles size={12} className="text-orange-500" /> Professional Overview
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white max-w-5xl leading-[1.1] drop-shadow-sm">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-500 dark:via-orange-400 dark:to-yellow-400 drop-shadow-[0_4px_20px_rgba(239,68,68,0.18)]">Me</span>
          </h1>
        </motion.div>

        {/* Core Profile Narrative Card - Flat Typography Overrides */}
        <motion.div
          variants={scrollFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-7xl px-4 sm:px-8 z-10"
        >
          <Interactive3DCard spotlightColor="from-orange-500/15 via-amber-500/5" animDelay={0.1} className="p-6 md:p-10 text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
                Hi, I'm Keshav Chandra Pandit
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-base md:text-lg mb-4">
                I'm a passionate <strong className="text-slate-900 dark:text-white font-bold">Full Stack Developer</strong> and BCA scholar. I specialize in building highly responsive web and mobile application infrastructures using 
                <span className="text-orange-600 dark:text-orange-400 font-bold"> React, Node.js, MongoDB, Express.js</span>, and 
                <span className="text-orange-600 dark:text-orange-400 font-bold"> React Native</span>. I turn conceptual logic blueprints into robust, production-ready system deployments.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-base md:text-lg">
                My engineering focus centers around modular <strong className="text-slate-900 dark:text-white font-bold">MERN Stack development</strong>, data model scaling, security integration pipelines, and maintainable cross-compilation syntax engineering.
              </p>
            </div>
          </Interactive3DCard>
        </motion.div>

        {/* Full Display Right to Left Infinite Skills Ticker */}
        <div className="w-full relative overflow-hidden py-6 mask-gradient z-10 border-y border-slate-200/40 dark:border-slate-800/40 bg-white/10 dark:bg-slate-950/10 backdrop-blur-md shadow-sm">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950 z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950 z-20 pointer-events-none" />

          <motion.div 
            className="flex gap-4 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotateZ: 1, boxShadow: "0 8px 25px rgba(234,88,12,0.2)" }}
                whileTap={{ scale: 0.96 }}
                animate={{ color: ["#dc2626", "#ea580c", "#d97706", "#16a34a", "#2563eb", "#dc2626"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="cursor-pointer bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black shadow-[0_4px_12px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] border border-slate-200/60 dark:border-slate-800/80 transition-all duration-200 hover:border-orange-400/60 dark:hover:border-orange-500/50 flex-shrink-0"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Structural Highlights Bento-inspired Panel Grid - Flat Readability Config */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-7xl px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10"
        >
          {highlights.map((item, idx) => (
            <Interactive3DCard key={item.title} spotlightColor={item.glow} animDelay={idx * 0.3} className="p-6 md:p-8 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-slate-200/40 dark:border-slate-700/40 shadow-sm">
                {item.icon}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </Interactive3DCard>
          ))}
        </motion.div>
      </div>

      {/* Footer Element Anchored Perfectly onto Bottom */}
      <Footer />
    </div>
  );
};

export default About;