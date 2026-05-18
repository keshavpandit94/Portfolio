import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactDetails = [
    { icon: <Mail size={18} />, text: "pkeshav282@gmail.com", href: "mailto:pkeshav282@gmail.com" },
    { icon: <Phone size={18} />, text: "+91 8002393341", href: "tel:+918002393341" },
    { icon: <MapPin size={18} />, text: "Lucknow, Uttar Pradesh, India" },
  ];

  const socialChannels = [
    { icon: <Github size={20} />, url: "https://github.com/keshavpandit94", color: "hover:text-slate-900 dark:hover:text-white hover:border-slate-500/30" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/keshav-chandra-pandit-8b0389243", color: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/_desi_balak_94", color: "hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/30" },
    { icon: <Twitter size={20} />, url: "https://x.com/panditkeshav94", color: "hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/30" },
  ];

  const scrollFadeVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 16 } }
  };

  const invertLayoutVariants = {
    animate: {
      scale: [1, 1.05, 0.94, 1],
      x: [0, 25, -15, 0],
      y: [0, -30, 15, 0],
      transition: { duration: 14, repeat: Infinity, ease: "linear" }
    }
  };

  const shiftLayoutVariants = {
    animate: {
      scale: [1, 0.95, 1.05, 1],
      x: [0, -30, 25, 0],
      y: [0, 15, -40, 0],
      transition: { duration: 16, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative select-none">
      
      {/* Content Canvas Wrapper - Side Padding Cleared For Fluid Display Edge Bleed */}
      <div className="w-full flex flex-col items-center pt-36 pb-6 gap-20 sm:gap-24 md:gap-28 perspective-[1200px] relative z-10 flex-1">
        
        {/* Background Animated Layer Fluid Lighting Matrix Emitters */}
        <motion.div 
          variants={invertLayoutVariants}
          animate="animate"
          className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/10 to-transparent blur-[120px] rounded-full pointer-events-none will-change-transform z-0" 
        />
        <motion.div 
          variants={shiftLayoutVariants}
          animate="animate"
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-red-500/5 to-transparent blur-[140px] rounded-full pointer-events-none will-change-transform z-0" 
        />

        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className="w-full max-w-7xl px-4 sm:px-8 flex flex-col items-center gap-4 text-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-widest shadow-sm">
            <img src="https://fav.farm/%F0%9F%93%AC" className="w-3.5 h-3.5 object-contain" alt="mail" /> Communication Hub
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white max-w-5xl leading-[1.1] drop-shadow-sm">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-500 dark:via-orange-400 dark:to-yellow-400 drop-shadow-[0_4px_20px_rgba(239,68,68,0.18)]">Me</span>
          </h1>
        </motion.div>

        {/* Unified Cards Terminal - Flat Form Layout */}
        <motion.div 
          variants={scrollFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-8 w-full max-w-7xl px-4 sm:px-8 z-10"
        >
          {/* Interactive Form Component Block */}
          <Interactive3DCard spotlightColor="from-orange-500/20 via-amber-500/10" animDelay={0.1} className="flex-1 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="px-4 py-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-orange-500/60 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  required
                  className="px-4 py-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-orange-500/60 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                />
              </div>

              <div className="flex flex-col">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows={5}
                  required
                  className="px-4 py-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-orange-500/60 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -3, scale: 1.02, boxShadow: "0 10px 25px rgba(239,68,68,0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-500 dark:via-orange-500 dark:to-orange-600 text-white font-bold text-sm px-6 py-4 rounded-2xl shadow-md flex items-center justify-center gap-2 cursor-pointer border border-orange-400/20"
              >
                <span>Dispatch Message</span>
                <Send size={15} />
              </motion.button>
            </form>
          </Interactive3DCard>

          {/* Contact Details & Info Hub */}
          <Interactive3DCard spotlightColor="from-violet-500/15 via-indigo-500/10" animDelay={0.3} className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 tracking-tight flex items-center gap-2">
                Get in Touch <Sparkles size={18} className="text-orange-500" />
              </h2>

              {/* Informational Parameter Links */}
              <div className="flex flex-col gap-4">
                {contactDetails.map((detail, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-4 p-3 rounded-2xl border border-slate-100 dark:border-slate-950 bg-slate-50/50 dark:bg-slate-950/20 text-slate-700 dark:text-slate-300 transition-colors duration-300 hover:bg-white dark:hover:bg-slate-950 ${detail.href ? "hover:text-orange-500" : ""}`}
                  >
                    <span className="text-slate-400 dark:text-slate-500">{detail.icon}</span>
                    {detail.href ? (
                      <a href={detail.href} className="text-sm font-bold tracking-wide transition-colors">{detail.text}</a>
                    ) : (
                      <span className="text-sm font-bold tracking-wide">{detail.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Network Nodes */}
            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Network Coordinates</p>
              <div className="flex flex-wrap gap-3">
                {socialChannels.map((chan, idx) => (
                  <motion.a
                    key={idx}
                    href={chan.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-all duration-200 ${chan.color}`}
                  >
                    {chan.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </Interactive3DCard>
        </motion.div>
        
        {/* Fine layout separation from bottom canvas */}
        <div className="h-4" />
      </div>

      {/* Footer Element anchored firmly onto bottom screen rules */}
      <Footer />
    </div>
  );
};

export default Contact;