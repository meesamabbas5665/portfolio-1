import React from 'react';
// Make sure this path points to your TRANSPARENT PNG file
import img from '../../assets/meesam-photo.png'; 

const HeroSection = () => {
  
  const socialLinks = [
    { name: 'Instagram', url: '#', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: 'LinkedIn', url: '#', path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: 'Dribbble', url: '#', path: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zm-3.13 6.937c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705v-.26zm-2.285 7.001c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684 8.482 8.482 0 0 1-5.239-1.8zm-4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1 3.655 5.715zm-3.471-4.28c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5a8.687 8.687 0 0 1 2.007-.228z" },
    { name: 'Behance', url: '#', path: "M22 7h-3v3h3v-3zm-11 5h-4v-1.562c2.094 0 3.737-.024 3.737-1.921 0-1.366-1.259-2.517-3.023-2.517h-4.714v12h5.09c2.617 0 3.91-1.62 3.91-3.91 0-2.434-2.023-2.09-1-2.09zm-4-3h1.328c.874 0 1.256.467 1.256 1.341 0 1.096-.632 1.396-1.256 1.396h-1.328v-2.737zm1.621 8.863h-1.621v-3.136h1.621c.905 0 1.554.492 1.554 1.54 0 1.32-.783 1.596-1.554 1.596zm7.289-5.863c-3.09 0-4.91 1.996-4.91 5s1.82 5 4.91 5 4.91-1.996 4.91-5-1.82-5-4.91-5zm2.753 4.238h-5.463c.09 1.777 1.416 2.529 2.766 2.529 1.229 0 2.229-.539 2.563-1.646h2.24c-.453 2.13-2.434 3.483-4.803 3.483-3.197 0-5.188-2.139-5.188-5.361 0-3.257 1.956-5.361 5.141-5.361 3.238 0 5.097 2.152 5.097 5.253 0 .428-.027.872-.353 1.103zm-2.753-2.316c-1.127 0-2.222.617-2.438 1.922h4.789c-.139-1.25-1.218-1.922-2.351-1.922z" }
  ];

  return (
    <section className="bg-black text-white min-h-[calc(100vh-64px)] flex items-center font-['Montserrat'] overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT CONTENT - TEXT */}
          <div className="order-1 flex flex-col items-start z-20">
            <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-1">
              Hi I am
            </h3>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-2">
              Meesam Abbas
            </h2>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-6 tracking-tight leading-tight">
              Software Engineer
            </h1>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-5">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-lg shadow-orange-500/20">
                Hire Me
              </button>
              
              {/* UPDATED DOWNLOAD BUTTON */}
              {/* 1. Changed <button> to <a> */}
              {/* 2. Added href="/cv.pdf" pointing to public folder */}
              {/* 3. Added download="Meesam_Abbas_CV.pdf" attribute */}
              <a 
                href="/cv.pdf" 
                download="Meesam_CV(2).pdf"
                className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-bold py-3 px-8 rounded-md transition duration-300 cursor-pointer flex items-center justify-center"
              >
                Download CV
              </a>
            </div>

            {/* Stats Box */}
            <div className="bg-[#1c1c1c] p-6 rounded-lg flex flex-wrap gap-8 md:gap-12 border border-gray-800 shadow-xl relative z-20">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-orange-500">5+</span>
                <span className="text-sm text-gray-300 mt-1">Experiences</span>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-orange-500">20+</span>
                <span className="text-sm text-gray-300 mt-1">Project done</span>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-orange-500">80+</span>
                <span className="text-sm text-gray-300 mt-1">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - IMAGE */}
          <div className="order-2 relative flex justify-center items-end h-[500px] md:h-[700px]">
            
            {/* THE CIRCLE */}
            <div className="absolute bottom-0 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-[#1a1a1a] rounded-full z-0"></div>
            
            {/* THE IMAGE */}
            <img 
              src={img} 
              alt="Meesam Abbas" 
              className="relative z-10 
                         w-auto 
                         h-[500px] md:h-[800px] 
                         object-contain 
                         grayscale 
                         rounded-b-full 
                         translate-y-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;