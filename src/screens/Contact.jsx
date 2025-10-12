import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="contact"
        className="flex-1 flex flex-col items-center px-6 sm:px-10 md:px-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black pt-32 gap-16 transition-all duration-500"
      >
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-red-700 dark:text-orange-400 mb-8"
        >
          Contact Me
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex-1 flex flex-col gap-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-orange-300/40"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex-1 flex flex-col gap-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-orange-300/40"
          >
            <h2 className="text-2xl font-bold text-red-700 dark:text-orange-400 mb-4">
              Get in Touch
            </h2>

            {/* Email */}
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Mail size={20} />
              <span>pkeshav282@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Phone size={20} />
              <span>+91 8002393341</span>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin size={20} />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/keshavpandit94"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-orange-400 transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/keshav-chandra-pandit-8b0389243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/_desi_balak_94?igsh=MWs1anU1cTAybjA2Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/panditkeshav94?t=WAz65L1jY62Fpu2B82Sgnw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition"
              >
                <Twitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Extra bottom padding to prevent footer overlap */}
        <div className="h-16" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
