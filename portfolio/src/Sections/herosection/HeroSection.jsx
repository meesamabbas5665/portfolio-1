import React from 'react';
import { Link } from 'react-router-dom'; 
// 1. Import the specific icons you need
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';
import img from '../../assets/meesam-photo.png'; 

const HeroSection = () => {
  
  // 2. Updated Social Data to use Components
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: '#', 
      icon: <FaInstagram className="size-5" /> 
    },
    { 
      name: 'LinkedIn', 
      url: '#', 
      icon: <FaLinkedin className="size-5" /> 
    },
    { 
      name: 'Dribbble', 
      url: '#', 
      icon: <FaDribbble className="size-5" /> 
    },
    { 
      name: 'Behance', 
      url: '#', 
      icon: <FaBehance className="size-5" /> 
    }
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-2">
              Meesam Abbas
            </h2>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-6 tracking-tight leading-tight">
              Software Engineer
            </h1>

            {/* Social Icons Section */}
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
                  {/* 3. Render the React Icon */}
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-12">
              {/* Hire Me Link */}
              <Link 
                to="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-lg shadow-orange-500/20 flex items-center justify-center"
              >
                Hire Me
              </Link>

              {/* Download CV Link */}
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
            <div className="absolute bottom-0 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-[#1a1a1a] rounded-full z-0"></div>
            <img 
              src={img} 
              alt="Meesam Abbas" 
              className="relative z-10 w-auto h-[500px] md:h-[800px] object-contain grayscale rounded-b-full translate-y-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;