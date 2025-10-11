import React from "react";
import { motion } from "framer-motion";
import { Laptop, Code2, Database, Smartphone, Github } from "lucide-react";
import Footer from "../components/Footer"; // Make sure your Footer component exists

const About = () => {
  const skills = [
    "MERN Stack",
    "React Native",
    "React JS",
    "Node JS",
    "MongoDB",
    "Express JS",
    "JavaScript",
    "TypeScript",
    "SQL Database",
    "HTML5",
    "CSS3",
    "Python",
  ];

  const highlights = [
    {
      title: "Full Stack Development",
      description: "Building modern web applications using MERN stack",
      icon: <Laptop size={28} />,
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform apps with React Native",
      icon: <Smartphone size={28} />,
    },
    {
      title: "Database Expertise",
      description: "MongoDB, SQL, and database design",
      icon: <Database size={28} />,
    },
    {
      title: "Version Control",
      description: "Git & GitHub for collaborative development",
      icon: <Github size={28} />,
    },
    {
      title: "Programming",
      description: "Clean, maintainable code in JS, TS, Python",
      icon: <Code2 size={28} />,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-start text-center px-6 sm:px-10 md:px-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black pt-32 gap-16 transition-all duration-500">

      {/* Hero */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-red-700 dark:text-orange-400"
      >
        About Me
      </motion.h1>

      {/* About Me Card */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-10 max-w-4xl border border-orange-300/40 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 dark:text-orange-400 mb-4">
          Hi, I'm Kunal Raj
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm a passionate <strong>Full Stack Developer</strong> and BCA student. I specialize in building responsive web and mobile applications using
          <span className="text-orange-600 font-semibold"> React, Node.js, MongoDB, Express.js</span> and
          <span className="text-orange-600 font-semibold"> React Native</span>. I love turning ideas into scalable solutions and continuously learning new technologies.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          My focus areas include <strong>MERN Stack</strong>, cross-platform mobile apps, database design, and writing clean, maintainable code in
          <strong> JavaScript, TypeScript, HTML5, CSS3, Python</strong>.
        </p>
      </motion.div>

      {/* Skills Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex flex-wrap justify-center gap-3 max-w-5xl"
      >
        {skills.map(skill => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-transform"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        {highlights.map(item => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-orange-300/40 flex flex-col items-center gap-3 transition"
          >
            <div className="text-red-700 dark:text-orange-400">{item.icon}</div>
            <h3 className="text-xl font-bold text-red-700 dark:text-orange-400">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom padding */}
      <div className="h-16" />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default About;
