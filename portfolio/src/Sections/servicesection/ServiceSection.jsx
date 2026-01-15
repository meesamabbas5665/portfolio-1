import React, { useState } from 'react';

const ServiceSection = () => {
  // State to track which service is expanded
  const [expandedId, setExpandedId] = useState(null);

  // Toggle function
  const toggleReadMore = (id) => {
    // If clicking the already open card, close it (null). Otherwise, open the clicked ID.
    setExpandedId(expandedId === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Building intelligent systems using machine learning and neural networks to automate complex tasks.',
      longDescription: 'We leverage the power of Python, TensorFlow, and PyTorch to create custom AI models. From Natural Language Processing (NLP) chatbots to predictive analytics and computer vision, our solutions help businesses automate processes and gain data-driven insights.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Creating responsive, fast, and scalable websites tailored to your specific business needs.',
      longDescription: 'Our full-stack web development services ensure your site is secure, fast, and SEO-friendly. We use the MERN stack (MongoDB, Express, React, Node.js) along with Next.js to build dynamic web applications that scale with your business growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Frontend Dev',
      description: 'Crafting visually stunning user interfaces using React, Vue, and modern CSS frameworks.',
      longDescription: 'We focus on pixel-perfect implementation of designs. Using React.js, Tailwind CSS, and Framer Motion, we bring static designs to life with smooth animations, interactivity, and accessibility standards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Backend Dev',
      description: 'Building robust server-side applications, APIs, and database architectures for performance.',
      longDescription: 'Security and speed are our top priorities. We build RESTful and GraphQL APIs using Node.js and Python Django/Flask. We manage data efficiently with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Mobile Apps',
      description: 'Developing cross-platform mobile applications for iOS and Android using React Native.',
      longDescription: 'Reach users on every device. We use React Native and Flutter to build high-performance mobile apps that look native on both iOS and Android, saving you time and cost compared to separate native development.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-centered experiences with a focus on aesthetics and usability.',
      longDescription: 'We start with the user. Through wireframing, prototyping in Figma, and user testing, we create interfaces that are not only beautiful but also intuitive, ensuring higher engagement and conversion rates.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      )
    },
  ];

  return (
    <section className="bg-black py-20 font-['Montserrat']">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Services</h2>
          <p className="mt-4 text-gray-400 font-medium">What I can do for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#1c1c1c] p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 border border-gray-800 hover:border-orange-500/50"
            >
              <div className="text-orange-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-orange-500 mb-4 tracking-tight">
                {service.title}
              </h3>

              {/* Conditional Rendering for Text */}
              <div className="text-gray-400 text-sm leading-relaxed font-normal mb-6">
                {expandedId === service.id ? (
                  // Show Long Description with animation effect
                  <p className="animate-fadeIn">
                    {service.longDescription}
                  </p>
                ) : (
                  // Show Short Description
                  <p>
                    {service.description}
                  </p>
                )}
              </div>

              {/* Read More Button */}
              <button 
                onClick={() => toggleReadMore(service.id)}
                className="mt-auto flex items-center gap-2 text-white font-medium hover:text-orange-500 transition-colors"
              >
                {expandedId === service.id ? 'Read Less' : 'Read More'}
                
                {/* Arrow Icon that rotates when open */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className={`w-4 h-4 transition-transform duration-300 ${expandedId === service.id ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;