import React from 'react';

const NavBar = () => {
  return (
    <header className="rounded-xl border-2 border-green-500 fixed top-4 left-10 right-10 z-50 backdrop-blur-sm shadow-md flex justify-between items-center h-24 px-5">
      <h1 className="text-4xl">Logo</h1>
      <nav className="flex gap-8">
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500">About</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500">FAQ</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500">Schedule</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500">Team</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500">Sponsors</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500">Previous Events</a>
        <a href="#" className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500">Register</a>
      </nav>
    </header>
  );
};

export default NavBar;
