import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const PillNavbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => setActive(location.pathname), [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  // Motion values for global 3D mouse tracking parallax tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out coordinate tracking using spring physics
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 250, damping: 25 });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 250, damping: 25 });

  // Map mouse coordinates cleanly onto background aurora lighting offsets
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ["30%", "70%"]), { stiffness: 200, damping: 30 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ["20%", "80%"]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Variants for staggered mobile items cascade
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        stiffness: 180,
        damping: 14,
        staggerChildren: 0.04,
        delayChildren: 0.02,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      y: 8,
      transition: { duration: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -12, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 perspective-[1200px]">
      
      {/* Dynamic Aurora Chromatic Glow (Follows your cursor underneath the glass panel) */}
      <motion.div 
        className="absolute w-[80%] h-[120%] bg-gradient-to-r from-orange-500/20 via-rose-500/15 to-amber-500/20 blur-2xl rounded-full opacity-100 dark:opacity-70 pointer-events-none mix-blend-screen"
        style={{
          left: glowX,
          top: glowY,
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.nav 
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d"
        }}
        className="relative flex items-center justify-between px-3 py-2 bg-white/45 dark:bg-slate-900/45 backdrop-blur-3xl border border-white/50 dark:border-slate-800/60 rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.6)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300"
      >
        {/* Desktop / Tablet Navigation */}
        <div className="hidden sm:flex items-center gap-2" style={{ transformStyle: "preserve-3d" }}>
          <div className="flex items-center gap-1" style={{ transformStyle: "preserve-3d" }}>
            {navItems.map((item) => {
              const isActive = active === item.path;
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ 
                    scale: 1.06, 
                    z: 15,
                    y: -1.5
                  }}
                  whileTap={{ scale: 0.96, z: 4 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  className="relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setActive(item.path)}
                    className={`relative block px-5 py-2.5 text-sm font-bold tracking-wide rounded-full transition-colors duration-300 focus:outline-none z-10 ${
                      isActive
                        ? "text-white dark:text-slate-950 drop-shadow-[0_2px_10px_rgba(239,68,68,0.2)]"
                        : "text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-amber-400"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-pill-premium-fluid"
                        className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 dark:from-yellow-300 dark:via-amber-400 dark:to-orange-500 rounded-full -z-10 shadow-[0_10px_22px_rgba(239,68,68,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[0_10px_22px_rgba(245,158,11,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)]"
                        transition={{ type: "spring", stiffness: 350, damping: 26 }}
                        style={{ translateZ: "-4px" }}
                      />
                    )}
                    {/* High-Contrast Floating Text Label */}
                    <span className="block transform translate-z-[10px] pointer-events-none select-none">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Micro-Designed Geometric Glass Divider */}
          <span 
            className="w-[1px] h-6 bg-gradient-to-b from-slate-200 via-slate-400/50 to-slate-200 dark:from-slate-800 dark:via-slate-600/50 dark:to-slate-800 mx-2 block" 
            style={{ translateZ: "4px" }}
          />

          {/* Dark Mode Toggle Wrapper with 3D Pop Out */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 4, z: 22 }} 
            whileTap={{ scale: 0.93 }}
            style={{ translateZ: "6px" }}
          >
            <DarkModeToggle />
          </motion.div>
        </div>

        {/* Mobile Screen Menu Controls */}
        <div className="sm:hidden flex items-center gap-3 relative" style={{ transformStyle: "preserve-3d" }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DarkModeToggle />
          </motion.div>

          {/* Morphing Kinetic Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_6px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_6px_16px_rgba(0,0,0,0.4)] focus:outline-none flex items-center justify-center"
            aria-label="Main Menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" className="stroke-current fill-none stroke-[2.5] stroke-linecap-round">
              <motion.line 
                x1="2" y1="5" x2="16" y2="5"
                animate={menuOpen ? { x1: 3, y1: 15, x2: 15, y2: 3 } : { x1: 2, y1: 5, x2: 16, y2: 5 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              />
              <motion.line 
                x1="2" y1="9" x2="16" y2="9"
                animate={menuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.12 }}
              />
              <motion.line 
                x1="2" y1="13" x2="16" y2="13"
                animate={menuOpen ? { x1: 3, y1: 3, x2: 15, y2: 15 } : { x1: 2, y1: 13, x2: 16, y2: 13 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              />
            </svg>
          </motion.button>

          {/* Mobile Staggered Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-14 right-0 w-48 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl rounded-2xl shadow-[0_35px_70px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[0_45px_90px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col gap-1.5 p-2 border border-slate-200/80 dark:border-slate-800/90 origin-top-right overflow-hidden"
              >
                {navItems.map((item) => {
                  const isActive = active === item.path;
                  return (
                    <motion.div key={item.path} variants={itemVariants} className="w-full">
                      <Link
                        to={item.path}
                        onClick={() => {
                          setActive(item.path);
                          setMenuOpen(false);
                        }}
                        className={`relative block px-4 py-3 text-sm font-bold rounded-xl text-left transition-all duration-200 overflow-hidden ${
                          isActive
                            ? "text-white bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 shadow-[0_8px_20px_rgba(239,68,68,0.25)]"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default PillNavbar;