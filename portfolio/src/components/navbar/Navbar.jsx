import React from 'react';
// 1. Import Link
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  // Helper to create paths: "About" -> "/about", "Home" -> "/"
  const getPath = (item) => {
    if (item === 'Home') return '/';
    return `/${item.toLowerCase()}`;
  };

  return (
    <header className="bg-black font-['Montserrat'] border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <div className="md:flex md:items-center md:gap-12">
            {/* 2. Change Logo <a> to <Link> */}
            <Link className="block" to="/">
              <span className="sr-only">Home</span>
              <h1 className="text-3xl font-extrabold tracking-wider">
                <span className="text-orange-500">MEE</span>
                <span className="text-red-600">SAM</span>
              </h1>
            </Link>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-12 text-xl font-medium">
                {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    {/* 3. Change Menu <a> to <Link> */}
                    <Link
                      className="text-gray-400 transition hover:text-orange-500"
                      to={getPath(item)} // Uses helper to create /about, /contact etc.
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* HIRE ME BUTTON */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {/* 4. Change Button <a> to <Link> */}
              <Link
                className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-600"
                to="/contact"
              >
                Hire Me
              </Link>
            </div>

            {/* MOBILE MENU ICON */}
            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-800 p-2 text-white transition hover:text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;