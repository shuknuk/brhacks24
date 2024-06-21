// NavBar.jsx

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
  const handleAlert = () => {
    alert("Sponsors and Register coming soon...");
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 700,
      smooth: true
    });
  };

  return (
    <header className="rounded-xl border-2 border-emerald-700 fixed top-4 left-10 right-10 z-50 backdrop-blur-sm flex justify-between items-center h-24 px-5">
      <h1 className="text-4xl cursor-pointer" onClick={scrollToTop}>
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </h1>
      <nav className="flex gap-8 cursor-pointer">
        <Link to="about" smooth={true} duration={700}>
          <p className="nav-item bg-green-600 drop-shadow-lg ">About</p>
        </Link>
        <Link to="faq" smooth={true} duration={700}>
          <p className="nav-item bg-green-600">FAQ</p>
        </Link>
        <Link to="schedule" smooth={true} duration={700}>
          <p className="nav-item bg-green-600">Schedule</p>
        </Link>
        <Link to="team" smooth={true} duration={700}>
          <p className="nav-item bg-green-600">Team</p>
        </Link>
        <Link href="/sponsors" onClick={handleAlert}>
          <p className="nav-item bg-green-600">Sponsors</p>
        </Link>
        <Link href="/register" onClick={handleAlert}>
          <p className="nav-item bg-green-600">Register</p>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
