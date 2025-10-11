import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger icons
import DarkModeToggle from "./DarkModeToggle";

const PillNavbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setActive(location.pathname), [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 shadow-lg rounded-full px-4 sm:px-6 md:px-8 py-2 flex items-center justify-between z-50 backdrop-blur-md border border-orange-400/30">
      
      {/* Desktop / Tablet nav */}
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex flex-wrap gap-3 md:gap-4">
          {navItems.map(item => {
            const isActive = active === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setActive(item.path)}
                className={`relative px-4 py-2 text-sm md:text-base font-semibold transition-all duration-300 rounded-full focus:outline-none ${
                  isActive
                    ? "text-white"
                    : "text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>

      {/* Hamburger for small screens */}
      <div className="sm:hidden relative flex items-center gap-2">
        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-12 right-0 w-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col gap-2 p-3 border border-orange-300/30"
          >
            {navItems.map(item => {
              const isActive = active === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setActive(item.path);
                    setMenuOpen(false);
                  }}
                  className={`relative px-3 py-2 text-sm font-semibold rounded-full text-center transition ${
                    isActive
                      ? "text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default PillNavbar;
