import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  // 1. State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getPath = (item) => {
    if (item === 'Home') return '/';
    return `/${item.toLowerCase()}`;
  };

  // 2. Function to toggle state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black font-['Montserrat'] border-b border-gray-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO SECTION */}
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block" to="/">
              <span className="sr-only">Home</span>
              <h1 className="text-3xl font-extrabold tracking-wider">
                <span className="text-orange-500">MEE</span>
                <span className="text-red-600">SAM</span>
              </h1>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-12 text-lg font-medium">
                {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      className="text-gray-400 transition hover:text-orange-500"
                      to={getPath(item)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ACTION BUTTONS & MOBILE ICON */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              {/* FIXED: Desktop Button to Link */}
              <Link
                className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-600"
                to="/contact"
              >
                Hire Me
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="block md:hidden">
              <button 
                onClick={toggleMenu} 
                className="rounded-sm bg-gray-800 p-2 text-white transition hover:text-orange-500"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1c1c1c] border-t border-gray-800 absolute w-full left-0 z-50">
          <ul className="flex flex-col p-4 space-y-4 text-center">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  className="block text-gray-300 text-lg font-medium transition hover:text-orange-500"
                  to={getPath(item)}
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                >
                  {item}
                </Link>
              </li>
            ))}
            
            {/* FIXED: Mobile Hire Me Button */}
            {/* 1. Changed <a> to <Link> */}
            {/* 2. Added to="/contact" */}
            {/* 3. Added onClick handler to close menu */}
            <li>
              <Link
                className="block w-full rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-600"
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;