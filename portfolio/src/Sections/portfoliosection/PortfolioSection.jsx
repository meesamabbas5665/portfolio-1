import React, { useState } from 'react';

const PortfolioSection = () => {
  // 1. State for Filtering
  const [activeCategory, setActiveCategory] = useState('All');
  
  // 2. State for Modal (Project Overview)
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All', 
    'Web Design', 
    'Mobile App', 
    'AI Solutions', 
    'Branding'
  ];

  // 3. Updated Project Data
  const projects = [
    {
      id: 1,
      category: 'Web Design',
      title: 'Zalwa Fashion Store',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
      description: "This project involved creating a high-end e-commerce platform for Zalwa Fashion. We focused on a minimalist dark aesthetic to highlight the luxury products. The tech stack includes React for the frontend and Node.js for the backend, featuring real-time inventory updates, a secure payment gateway integration, and a custom recommendation engine that boosted sales by 25% in the first quarter."
    },
    {
      id: 2,
      category: 'Mobile App',
      title: 'Finance Tracker App',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
      description: "A comprehensive personal finance application designed for iOS and Android using React Native. The app allows users to link bank accounts securely, categorize expenses automatically using AI, and visualize spending habits through interactive charts. Key features include budget setting, recurring bill alerts, and an offline mode for tracking cash expenses on the go."
    },
    {
      id: 3,
      category: 'AI Solutions',
      title: 'Brainwave AI Dashboard',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
      description: "Brainwave is an enterprise-level analytics dashboard powered by machine learning. It processes large datasets to predict market trends and consumer behavior. We implemented Python-based ML models on the backend and visualized the data using D3.js. This tool provides actionable insights, allowing stakeholders to make data-driven decisions with 90% accuracy."
    },
    {
      id: 4,
      category: 'Web Design',
      title: 'Luxury Real Estate',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      description: "We designed and developed a visually stunning property listing website for a high-end real estate agency. The focus was on high-resolution imagery, virtual tours, and fast loading speeds. The site features advanced filtering, an integrated CRM for agents, and an interactive map search. Built with Next.js for superior SEO performance."
    },
    {
      id: 5,
      category: 'Branding',
      title: 'Dark Coffee Brand Identity',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
      description: "A complete rebranding package for an artisanal coffee chain. We created a bold, dark-themed visual identity that resonates with modern coffee lovers. The project deliverables included a new logo, packaging design, store signage, and a brand style guide. The new look helped the brand expand to 10 new locations within a year."
    },
    {
      id: 6,
      category: 'Mobile App',
      title: 'Fitness Tracking UI',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
      description: "A user interface design project for a health and fitness tracking application. We focused on dark mode usability and creating motivating data visualizations. The design includes screens for workout tracking, meal planning, and social sharing. We conducted extensive user testing to ensure the UX was seamless during high-intensity activities."
    }
  ];

  // Filtering Logic
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="bg-black py-20 font-['Montserrat'] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">Portfolio</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-[#1c1c1c] text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition duration-300">
                <span className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                
                {/* OVERVIEW BUTTON */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-bold text-white border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors"
                >
                  View Overview &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <p>No projects found in this category yet.</p>
          </div>
        )}

      </div>

      {/* --- MODAL / POPUP FOR OVERVIEW --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          
          {/* UPDATED MODAL CONTAINER: Added 'max-h' and 'overflow-y-auto' for mobile scrolling */}
          <div className="bg-[#1c1c1c] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            
            {/* Close Button (Sticky for better UX or Absolute) */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white bg-black/70 hover:bg-orange-500 rounded-full p-2 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="h-48 md:h-64 w-full relative shrink-0">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] to-transparent"></div>
            </div>

            {/* Modal Text Body */}
            <div className="p-6 md:p-8">
              <span className="text-orange-500 font-bold uppercase tracking-wider text-xs md:text-sm">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-4 md:mb-6">
                {selectedProject.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {selectedProject.description}
              </p>

              {/* Close Button (Bottom) */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors w-full sm:w-auto text-center"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default PortfolioSection;