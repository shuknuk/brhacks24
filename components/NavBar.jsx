// NavBar.jsx

import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="rounded-xl border-2 border-emerald-700 fixed top-4 left-10 right-10 z-50 backdrop-blur-sm shadow-md flex justify-between items-center h-24 px-5">
      <h1 className="text-4xl">Logo</h1>
      <nav className="flex gap-8">
        <Link href="/about">
          <p className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">About</p>
        </Link>
        <Link href="/faq">
          <p className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">FAQ</p>
        </Link>
        <Link href="/schedule">
          <p className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Schedule</p>
        </Link>
        <Link href="/team">
          <p className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Team</p>
        </Link>
        <Link href="/sponsors">
          <p className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Sponsors</p>
        </Link>
        <Link href="/register">
          <p className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Register</p>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
