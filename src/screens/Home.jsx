import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Laptop, Code2, Database, Github, Smartphone, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
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

  // Map mouse paths cleanly onto background dynamic spotlight positioning values
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

  // Automated Idle Spotlight Pointer Simulation (Travels automatically across surface when no mouse is present)
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

      {/* Ray-Traced Pointer Spotlight Tracker (Handshakes between Auto-Pilot and Real Hover positions) */}
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

const Home = () => {
  const nameContainerRef = useRef(null);
  const [isNameHovered, setIsNameHovered] = useState(false);

  const skills = [
    "MERN Stack", "React Native", "React JS", "Node JS", "MongoDB", "Express JS",
    "JavaScript", "TypeScript", "SQL Database", "HTML5", "CSS3", "Python"
  ];

  const highlights = [
    { title: "Full Stack Developer", description: "Building complete enterprise web & mobile ecosystem architectures.", icon: <Code2 size={24} />, glow: "from-red-500/25 via-orange-500/15" },
    { title: "React Native Apps", description: "Engineered high-performance cross-platform modern native mobile designs.", icon: <Smartphone size={24} />, glow: "from-blue-500/25 via-indigo-500/15" },
    { title: "Database Architecture", description: "Scalable schema design using MongoDB & structurally sound relational SQL environments.", icon: <Database size={24} />, glow: "from-emerald-500/25 via-teal-500/15" },
  ];

  const projects = [
    {
      name: "Restaurant Café Management System",
      description: "Command-line café management system in Python allowing customers to place orders, view bills, and make payments seamlessly.",
      tech: ["Python", "CLI", "Order Engine"],
      link: "/projects",
      glow: "from-amber-500/25 via-orange-600/15"
    },
    {
      name: "Full Stack E-Learning Platform",
      description: "Complete online learning engine using React, Node, Express, MongoDB with custom cloud asset pipes and secure native payment checkouts.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Razorpay"],
      link: "/projects",
      glow: "from-cyan-500/25 via-blue-600/15"
    },
  ];

  const contacts = [
    { icon: <Mail size={18} />, text: "pkeshav282@gmail.com", link: "mailto:pkeshav282@gmail.com" },
    { icon: <Phone size={18} />, text: "+91 8002393341", link: "tel:+918002393341" },
    { icon: <MapPin size={18} />, text: "Uttar Pradesh, India" },
    { icon: <Github size={18} />, text: "GitHub Profile", link: "https://github.com/keshavpandit94" },
  ];

  // Name Dynamic 3D Matrix Vector Tracking
  const nameMouseX = useMotionValue(0);
  const nameMouseY = useMotionValue(0);

  const nameRotateX = useSpring(useTransform(nameMouseY, [-0.5, 0.5], [15, -15]), { stiffness: 240, damping: 20 });
  const nameRotateY = useSpring(useTransform(nameMouseX, [-0.5, 0.5], [-18, 18]), { stiffness: 240, damping: 20 });

  const handleNameMouseMove = (e) => {
    if (!nameContainerRef.current) return;
    const rect = nameContainerRef.current.getBoundingClientRect();
    nameMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    nameMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleNameMouseLeave = () => {
    setIsNameHovered(false);
    nameMouseX.set(0);
    nameMouseY.set(0);
  };

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

  // Simulated Hover Rotation Loop for Name header when idle
  const autoNameRotateVariants = {
    animate: {
      rotateX: isNameHovered ? 0 : [0, 8, -8, 0],
      rotateY: isNameHovered ? 0 : [0, -10, 10, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative select-none">
      
      {/* Content Canvas Wrapper - Full Width Bleed Screen */}
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

        {/* Hero Header Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14 }}
          className="w-full max-w-7xl px-4 sm:px-8 flex flex-col items-center gap-6 z-10 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 8, z: 10 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 dark:border-orange-500/20 bg-orange-100/40 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(249,115,22,0.05)] cursor-default"
          >
            🚀 Open For Opportunities
          </motion.div>
          
          {/* Isolated High-End 3D Interactive Automatic Typography Interface */}
          <motion.div
            ref={nameContainerRef}
            onMouseMove={handleNameMouseMove}
            onMouseEnter={() => setIsNameHovered(true)}
            onMouseLeave={handleNameMouseLeave}
            variants={autoNameRotateVariants}
            animate={isNameHovered ? "hover" : "animate"}
            style={{
              rotateX: isNameHovered ? nameRotateX : undefined,
              rotateY: isNameHovered ? nameRotateY : undefined,
              transformStyle: "preserve-3d"
            }}
            className="cursor-crosshair transition-shadow duration-300 py-2 max-w-5xl hint-layer will-change-transform"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] select-none">
              Hi, I'm{" "}
              <motion.span 
                animate={{ 
                  color: ["#ef4444", "#f97316", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ef4444"] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text text-transparent bg-gradient-to-r filter drop-shadow-[0_4px_20px_rgba(239,68,68,0.12)] block sm:inline font-black"
                style={{ backfaceVisibility: "hidden" }}
              >
                Keshav Chandra Pandit
              </motion.span>
            </h1>
          </motion.div>
          
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 max-w-3xl mt-2 leading-relaxed">
            BCA Scholar & Full Stack Engineer specializing in forging high-performance architectures across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 dark:from-orange-400 dark:to-orange-500 font-extrabold">MERN Stack</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-orange-500 font-extrabold">React Native</span>.
          </p>
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

        {/* 3D Floating Interactive Tool Matrix Icons - Full Width Track */}
        <div className="w-full relative overflow-hidden py-2 mask-gradient z-10">
          <motion.div 
            className="flex gap-16 sm:gap-24 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" } }}
          >
            {[
              { icon: <Laptop size={24} />, label: "Web Core" },
              { icon: <Smartphone size={24} />, label: "Mobile Apps" },
              { icon: <Code2 size={24} />, label: "Clean Code" },
              { icon: <Database size={24} />, label: "Data Stores" },
              { icon: <Github size={24} />, label: "Open Source" }
            ].concat([
              { icon: <Laptop size={24} />, label: "Web Core" },
              { icon: <Smartphone size={24} />, label: "Mobile Apps" },
              { icon: <Code2 size={24} />, label: "Clean Code" },
              { icon: <Database size={24} />, label: "Data Stores" },
              { icon: <Github size={24} />, label: "Open Source" }
            ]).map((item, idx) => (
              <motion.div 
                key={idx} 
                animate={{ 
                  y: [0, -8, 0],
                  color: ["#64748b", "#ea580c", "#3b82f6", "#10b981", "#8b5cf6", "#64748b"],
                  filter: ["drop-shadow(0 0 0px transparent)", "drop-shadow(0 4px 10px rgba(234,88,12,0.4))", "drop-shadow(0 0 0px transparent)"]
                }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                whileHover={{ scale: 1.3 }}
                className="cursor-help transition-all duration-200 flex-shrink-0" 
                title={item.label}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Highlights Panel Dashboard */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-7xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 z-10"
        >
          {highlights.map((item, idx) => (
            <Interactive3DCard key={item.title} spotlightColor={item.glow} animDelay={idx * 0.4} className="p-6 md:p-8 text-left">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 to-slate-950 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-950 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <div className="mt-5">
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

        {/* Featured Projects Section */}
        <motion.div 
          variants={scrollFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          id="projects" 
          className="w-full max-w-7xl px-4 sm:px-8 flex flex-col gap-8 z-10"
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
            <Link to="/projects" className="text-sm font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 hover:gap-2 transition-all">
              See All Engineering <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {projects.map((project, idx) => (
              <Interactive3DCard key={project.name} spotlightColor={project.glow} animDelay={idx * 0.6} className="p-6 md:p-8 flex flex-col justify-between gap-6">
                <Link to={project.link} className="block">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </Link>
                
                <div className="flex flex-wrap gap-2 p-0.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200/40 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors duration-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Interactive3DCard>
            ))}
          </div>
        </motion.div>

        {/* About Me & Contact Section */}
        <motion.div 
          variants={scrollFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-7xl px-4 sm:px-8 flex flex-col lg:flex-row items-stretch justify-center gap-8 z-10 text-left"
        >
          <Interactive3DCard spotlightColor="from-orange-500/10 via-amber-500/5" animDelay={0.2} className="flex items-center justify-center lg:w-1/3 p-6 aspect-square max-w-[320px] mx-auto rounded-full">
            <div className="relative flex items-center justify-center w-full h-full rounded-full">
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 0.95, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-red-500 via-orange-500 to-yellow-400 dark:from-red-500 dark:via-orange-400 dark:to-yellow-300 opacity-90 blur-md pointer-events-none"
              />
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-100 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/25 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={`https://avatars.githubusercontent.com/keshavpandit94`} 
                  alt="Keshav Pandit Engineering Avatar"
                  className="w-full h-full object-cover scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </Interactive3DCard>

          <Interactive3DCard spotlightColor="from-amber-500/10 via-orange-500/5" animDelay={0.4} className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">About Me</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-base md:text-lg">
                I’m an adaptive engineering student sculpting application workflows. Balancing academic computer applications research alongside scalable systems production, I translate complex data frameworks into clean, fluid user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-900/60 transform translate-z-[20px] transition-colors duration-300">
              {contacts.map((c, idx) => (
                <a
                  key={idx}
                  href={c.link || "#"}
                  className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 hover:text-orange-600 dark:hover:text-orange-400 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 shadow-none hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-200 ${!c.link ? "pointer-events-none" : ""}`}
                  target={c.link ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  <span className="text-slate-400 dark:text-slate-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">{c.icon}</span>
                  <span className="truncate">{c.text}</span>
                </a>
              ))}
            </div>
          </Interactive3DCard>
        </motion.div>
        
        <div className="h-4" />
      </div>

      {/* Footer Element */}
      <Footer />
    </div>
  );
};

export default Home;