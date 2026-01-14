import React from 'react';
// IMPORTANT: Use your transparent PNG image here
import img from '../../assets/meesam-photo.png'; 

// --- Sub-component for Skill Circles ---
const SkillCircle = ({ name, percent, icon }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 relative z-20">
      <div className="relative flex items-center justify-center">
        {/* SVG Container */}
        <svg className="transform -rotate-90 w-28 h-28">
          {/* Track Circle (Gray) */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-gray-800"
          />
          {/* Progress Circle (Orange) */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-orange-500 transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Icon/Text in Middle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-400 border border-gray-600 rounded-md w-10 h-10 flex items-center justify-center">
            {icon}
          </span>
        </div>
      </div>
      
      {/* Percentage & Name */}
      <div className="text-center">
        <span className="block text-2xl font-bold text-orange-500">{percent}%</span>
        <span className="text-sm text-gray-400">{name}</span>
      </div>
    </div>
  );
};

// --- Main About Component ---
const About = () => {
  const skills = [
    { name: 'Figma', percent: 90, icon: 'Fi' },
    { name: 'Adobe XD', percent: 100, icon: 'Xd' },
    { name: 'Photoshop', percent: 85, icon: 'Ps' },
    { name: 'Illustrator', percent: 60, icon: 'Ai' },
    { name: 'Premiere', percent: 70, icon: 'Pr' },
  ];

  return (
    // CHANGED: font-['Inter'] -> font-['Montserrat']
    <section className="bg-black text-white py-20 font-['Montserrat'] relative overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 relative">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
             About
           </h2>
           <p className="text-gray-500 text-lg md:text-xl font-medium tracking-wide">
             User Interface And User Experience And Also Video Editing
           </p>
        </div>

        {/* MAIN CONTENT: IMAGE & TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          
          {/* LEFT: IMAGE IN WINDOW/ARCH SHAPE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[320px] h-[450px] md:w-[400px] md:h-[520px] bg-[#1a1a1a] rounded-t-[200px] flex items-end justify-center overflow-hidden shadow-2xl shadow-black/50">
              
              {/* Image with Updated Settings */}
              <img 
                src={img} 
                alt="Meesam Abbas" 
                className="relative z-10 
                           w-auto 
                           h-[500px] md:h-[800px] 
                           object-contain 
                           grayscale
                           translate-y-20 
                           "
              />
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-20"></div>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="relative">
            <p className="text-gray-400 leading-relaxed text-md md:text-lg mb-8 text-justify font-light">
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic; their minds a labyrinth of algorithms and solutions. 
              <br /><br />
              Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs. In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection.
            </p>
              {/* DOWNLOAD CV BUTTON */}
           <a 
              href="/cv.pdf" 
              download="Meesam_CV(2).pdf"
              className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-bold py-3 px-8 rounded-md transition duration-300 cursor-pointer flex items-center justify-center"
              >
              Download CV
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION: SKILLS PROGRESS */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-8 md:gap-12 mt-16">
          {skills.map((skill, index) => (
            <SkillCircle 
              key={index}
              name={skill.name} 
              percent={skill.percent} 
              icon={skill.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;


 <a 
                href="/cv.pdf" 
                download="Meesam_CV(2).pdf"
                className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-bold py-3 px-8 rounded-md transition duration-300 cursor-pointer flex items-center justify-center"
              >
                Download CV
              </a>