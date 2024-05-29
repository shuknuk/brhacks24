import React from 'react';
import Link from 'next/link';


const NavBar = () => {
  return (
    <header className="rounded-xl border-2 border-emerald-700 fixed top-4 left-10 right-10 z-50 backdrop-blur-sm shadow-md flex justify-between items-center h-24 px-5">
      <h1 className="text-4xl">Logo</h1>
      <nav className="flex gap-8">
        <a href="/About" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">About</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">FAQ</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Schedule</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Team</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Sponsors</a>
        {/* <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Previous Events</a> */}
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-emerald-700">Register</a>
      </nav>
    </header>
  );
};

export default NavBar;
