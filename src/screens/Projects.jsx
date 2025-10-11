import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      name: "Restaurant Café Management System",
      description:
        "Developed a command-line based café management system in Python that allows customers to place orders, view bills, and make payments. Implemented menu management, order processing, and basic payment simulation (cash/card).",
      tech: ["Python", "CLI", "Order Management"],
      github: "#", // replace with GitHub link
      demo: "#",   // optional demo link if available
    },
    {
      name: "Full Stack Project: E-Learning Platform",
      description:
        "Built a complete online learning system using React.js, Node.js, Express, and MongoDB. Integrated Cloudinary for video & image storage and Razorpay for secure payments. Developed an admin panel for course/content management. Deployed project with a working demo link and shared source code on GitHub & LinkedIn.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Razorpay"],
      github: "#", // replace with GitHub link
      demo: "#",   // replace with demo link
    },
    {
      name: "Portfolio Website",
      description:
        "Designed and developed my personal portfolio website using React.js and Tailwind CSS. Showcases my skills, projects, and contact information with a responsive layout and dark/light mode support.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
      github: "#", // replace with GitHub link
      demo: "#",   // replace with live demo link
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="projects"
        className="flex-1 flex flex-col items-center px-6 sm:px-10 md:px-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black pt-32 gap-16 transition-all duration-500"
      >
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-red-700 dark:text-orange-400 mb-8"
        >
          My Projects
        </motion.h1>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-8 border border-orange-300/40 flex flex-col justify-between gap-4 transition hover:shadow-2xl hover:border-orange-400"
            >
              <div>
                <h2 className="text-2xl font-bold text-red-700 dark:text-orange-400 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    <Github size={18} /> Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-orange-500 dark:bg-orange-600 px-4 py-2 rounded-full text-white hover:brightness-110 transition"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra bottom padding to prevent overlap with footer */}
        <div className="h-16" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
