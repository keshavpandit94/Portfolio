import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Terminal,
  Monitor,
  Smartphone,
  FileText,
  Layout,
  Layers,
} from "lucide-react";
import Footer from "../components/Footer";

const Skills = () => {
  const skills = [
    { name: "MERN Stack", icon: <Code2 size={24} /> },
    { name: "React Native", icon: <Smartphone size={24} /> },
    { name: "React JS", icon: <Monitor size={24} /> },
    { name: "Node JS", icon: <Terminal size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "Express JS", icon: <Layers size={24} /> },
    { name: "JavaScript", icon: <Code2 size={24} /> },
    { name: "TypeScript", icon: <Code2 size={24} /> },
    { name: "SQL Database", icon: <Database size={24} /> },
    { name: "HTML5", icon: <FileText size={24} /> },
    { name: "CSS3", icon: <Layout size={24} /> },
    { name: "Python", icon: <Terminal size={24} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="skills"
        className="flex-1 flex flex-col items-center px-6 sm:px-10 md:px-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black pt-32 gap-16 transition-all duration-500"
      >
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-red-700 dark:text-orange-400 mb-8"
        >
          My Skills
        </motion.h1>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white rounded-2xl shadow-lg px-4 py-6 flex flex-col items-center justify-center gap-2 text-center font-semibold text-sm md:text-base cursor-pointer transition hover:shadow-2xl"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra bottom padding to prevent footer overlap */}
        <div className="h-16" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Skills;
