import React from "react";
import { motion } from "framer-motion";
import { Laptop, Code2, Database, Github, Smartphone, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const skills = [
    "MERN Stack","React Native","React JS","Node JS","MongoDB","Express JS",
    "JavaScript","TypeScript","SQL Database","HTML5","CSS3","Python"
  ];

  const highlights = [
    { title: "Full Stack Developer", description: "Building complete web & mobile applications" },
    { title: "React Native Apps", description: "Cross-platform mobile applications" },
    { title: "Database Management", description: "MongoDB & SQL Database expertise" },
  ];

  const projects = [
    {
      name: "Restaurant Café Management System",
      description: "Command-line café management system in Python allowing customers to place orders, view bills, and make payments.",
      tech: ["Python", "CLI", "Order Management"],
      link: "/projects",
    },
    {
      name: "Full Stack Project: E-Learning Platform",
      description: "Complete online learning system using React.js, Node.js, Express, MongoDB with Cloudinary & Razorpay integration.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Razorpay"],
      link: "/projects",
    },
  ];

  const contacts = [
    { icon: <Mail size={20} />, text: "pkeshav282@gmail.com", link: "mailto:pkeshav282@gmail.com" },
    { icon: <Phone size={20} />, text: "+91 8002393341", link: "tel:+918002393341" },
    { icon: <MapPin size={20} />, text: "Uttar Pradesh, India" },
    { icon: <Github size={20} />, text: "GitHub", link: "https://github.com/keshavpandit94" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-start items-center text-center px-6 sm:px-10 md:px-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500 pt-36 gap-16">

      {/* Hero Section */}
      <motion.div className="w-full max-w-4xl flex flex-col items-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold text-red-700 dark:text-orange-400"
        >
          Hi, I'm <span className="text-orange-600 dark:text-red-400">Keshav Chandra Pandit</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300"
        >
          BCA Student | Full Stack Developer | MERN & React Native
        </motion.h2>
      </motion.div>

      {/* Skills Tags */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
        className="flex flex-wrap justify-center gap-3 max-w-5xl"
      >
        {skills.map(skill => (
          <motion.span key={skill} whileHover={{ scale: 1.1 }} 
            className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-transform"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* Tech Icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}
        className="flex gap-6 text-3xl md:text-4xl text-red-600 dark:text-orange-400"
      >
        <Laptop size={32} title="Web Development"/>
        <Smartphone size={32} title="Mobile Apps"/>
        <Code2 size={32} title="Programming"/>
        <Database size={32} title="Database"/>
        <Github size={32} title="GitHub"/>
      </motion.div>

      {/* Highlights Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
      >
        {highlights.map(item => (
          <motion.div key={item.title} whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-orange-300/40 text-left transition"
          >
            <h3 className="text-xl font-bold text-red-700 dark:text-orange-400 mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Section */}
      <motion.div id="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 dark:text-orange-400 mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <motion.div key={project.name} whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-orange-300/40 flex flex-col justify-between gap-4 transition hover:shadow-xl"
            >
              <Link to={project.link}>
                <h3 className="text-xl font-bold text-red-700 dark:text-orange-400 mb-2">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              </Link>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <motion.img src={`https://avatars.githubusercontent.com/keshavpandit94`} alt="Keshav Pandit Developer"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover border-4 border-orange-500 hover:scale-105 transition-transform duration-300"
        />
        <motion.div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-10 text-left max-w-xl border border-orange-300/40 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-red-700 dark:text-orange-400 mb-3">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate <strong>Full Stack Developer</strong> and <strong>BCA student</strong>. I specialize in building dynamic, responsive web and mobile applications using 
            <span className="text-orange-600 font-semibold"> React, Node.js, MongoDB, Express.js</span> and 
            <span className="text-orange-600 font-semibold"> React Native</span>.
          </p>

          {/* Contact Card */}
          <div className="bg-orange-50 dark:bg-gray-900 rounded-xl p-4 flex flex-col gap-3 border border-orange-300/40">
            <h4 className="font-bold text-red-700 dark:text-orange-400 text-lg">Contact Me</h4>
            {contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.link || "#"}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition"
                target={c.link ? "_blank" : "_self"}
              >
                {c.icon} {c.text}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Home;
