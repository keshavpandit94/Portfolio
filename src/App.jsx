import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PillNavbar from "./components/Navbar";
import Home from "./screens/Home";

// You can create these files inside /screens folder (About.jsx, Projects.jsx, Skills.jsx, Contact.jsx)
import About from "./screens/About";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Contact from "./screens/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500">
        {/* Navbar */}
        <PillNavbar />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
