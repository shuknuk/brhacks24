import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="fixed top-5 left-10 right-10 z-10 bg-white border-2 border-green-800 rounded-xl">
      <div className="flex justify-between items-center h-24 px-5 lg:max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="text-4xl text-cyan-600 font-bold">Logo</h1>
        </Link>
        <div className="md:hidden">
          <button
            className="p-2 rounded-md focus:outline-none focus:border-gray-400"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image src="/close.svg" width={30} height={30} alt="close menu" />
            ) : (
              <Image src="/hamburger-menu.svg" width={30} height={30} alt="open menu" />
            )}
          </button>
        </div>
        <nav className={`flex-col md:flex md:flex-row md:items-center md:gap-8 ${navbar ? 'flex' : 'hidden'} md:block`}>
          <Link href="#about">
            <a
              className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 md:hover:bg-transparent md:hover:text-green-500 md:bg-transparent md:py-0"
              onClick={() => setNavbar(false)}
            >
              About
            </a>
          </Link>
          <Link href="#faq">
            <a
              className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 md:hover:bg-transparent md:hover:text-green-500 md:bg-transparent md:py-0"
              onClick={() => setNavbar(false)}
            >
              FAQ
            </a>
          </Link>
          <Link href="#schedule">
            <a
              className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 md:hover:bg-transparent md:hover:text-green-500 md:bg-transparent md:py-0"
              onClick={() => setNavbar(false)}
            >
              Schedule
            </a>
          </Link>
          <Link href="#team">
            <a
              className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 md:hover:bg-transparent md:hover:text-green-500 md:bg-transparent md:py-0"
              onClick={() => setNavbar(false)}
            >
              Team
            </a>
          </Link>
          <Link href="#sponsors">
            <a
              className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 md:hover:bg-transparent md:hover:text-green-500 md:bg-transparent md:py-0"
              onClick={() => setNavbar(false)}
            >
              Sponsors
            </a>
          </Link>
          <Link href="#previous-events">
            <a
              className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 md:hover:bg-transparent md:hover:text-green-500 md:bg-transparent md:py-0"
              onClick={() => setNavbar(false)}
            >
              Previous Events
            </a>
          </Link>
          <Link href="#register">
            <a
              className="text-lg font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 md:hover:bg-transparent md:hover:text-green-500 md:bg-transparent md:py-0"
              onClick={() => setNavbar(false)}
            >
              Register
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
