# 🌐 Modern React Portfolio

A sleek, fully responsive **React Portfolio Website** built with modern tools and design principles.  
Includes a beautiful **Pill-Shaped Navbar**, **Dark Mode Toggle**, smooth animations via **Framer Motion**, and routing with **React Router**.

---

## 🚀 Features

- ✨ **Pill Navbar** — Animated, gradient-highlighted navigation bar with active route indicator  
- 🌙 **Dark Mode Support** — Persistent theme toggle using `DarkModeToggle` component  
- 📱 **Fully Responsive** — Works seamlessly across mobile, tablet, and desktop  
- ⚡ **Framer Motion Animations** — Smooth and fluid transitions  
- 🧭 **React Router Integration** — Multi-page structure (`Home`, `About`, `Projects`, `Skills`, `Contact`)  
- 💡 **Clean UI Design** — Minimal and elegant aesthetic  

---

## 🧩 Components Overview

### `PillNavbar.jsx`
A dynamic navigation bar that:
- Highlights the active route with a glowing gradient pill effect
- Automatically updates on route change
- Includes a hamburger menu for mobile devices

### `DarkModeToggle.jsx`
A reusable theme switcher that:
- Toggles between light and dark themes  
- Saves user preference locally (via localStorage)  
- Adapts colors dynamically across the site  

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite or CRA)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Theme Management:** Custom Dark Mode Context

---

## 📦 Installation & Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/keshavpandit94/Portfolio.git
cd portfolio
npm install
