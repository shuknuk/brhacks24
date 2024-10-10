// NavBar.jsx

import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAlert = () => {
    window.open("https://forms.gle/wATGGMEjPcV1Ppd89", "_blank");
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 700,
      smooth: true,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "about", text: "About" },
    { to: "team", text: "Team/Panelists" },
    { to: "schedule", text: "Schedule" },
    { to: "faq", text: "FAQ" },
    { to: "sponsors", text: "Sponsors" },
    { to: "register", text: "Register", onClick: handleAlert },
  ];

  const sidebarVariants = {
    open: {
      y: 0,
      transition: {
        ease: "linear",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        ease: "linear",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <header className="rounded-xl border-2 border-emerald-700 fixed top-4 left-10 right-10 z-50 backdrop-blur-sm flex justify-between items-center h-24 px-5">
      <h1 className="text-4xl cursor-pointer" onClick={scrollToTop}>
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </h1>

      {/* Hamburger menu icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-green-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-8 cursor-pointer">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={700}
            onClick={item.onClick}
          >
            <p className="nav-item bg-green-600 drop-shadow-lg">{item.text}</p>
          </Link>
        ))}
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-white border-2 border-emerald-700 rounded-b-xl mt-2"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={700}
                onClick={() => {
                  toggleMenu();
                  if (item.onClick) item.onClick();
                }}
              >
                <p className="nav-item bg-green-600 drop-shadow-lg m-2 text-center">
                  {item.text}
                </p>
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
