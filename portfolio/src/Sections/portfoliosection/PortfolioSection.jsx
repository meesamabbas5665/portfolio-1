import React, { useState } from 'react';

const PortfolioSection = () => {
  // 1. State to manage the active filter
  const [activeCategory, setActiveCategory] = useState('All');

  // 2. The Categories List
  const categories = [
    'All', 
    'Web Design', 
    'Mobile App', 
    'AI Solutions', 
    'Branding'
  ];

  // 3. Project Data (Placeholder images used)
  const projects = [
    {
      id: 1,
      category: 'Web Design',
      title: 'Zalwa Fashion Store',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      category: 'Mobile App',
      title: 'Finance Tracker App',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      category: 'AI Solutions',
      title: 'Brainwave AI Dashboard',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      category: 'Web Design',
      title: 'Luxury Real Estate',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      category: 'Branding',
      title: 'Dark Coffee Brand Identity',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      category: 'Mobile App',
      title: 'Fitness Tracking UI',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
    }
  ];

  // 4. Filtering Logic
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    // CHANGED: font-['Inter'] -> font-['Montserrat']
    <section className="bg-black py-20 font-['Montserrat']">
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
              onClick={() => setActiveCategory(category)} // Event Listener here
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' // Active Style
                  : 'bg-[#1c1c1c] text-gray-400 hover:text-white hover:bg-gray-800' // Inactive Style
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
              
              {/* Overlay Gradient (Matches the dark moody look of the image) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-300">
                <span className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message (if no projects found) */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <p>No projects found in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioSection;