import React from 'react';

const Contact = () => {
  return (
    // CHANGED: font-['Inter'] -> font-['Montserrat']
    <section className="bg-black py-20 font-['Montserrat']">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-400 text-lg">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-transparent"
                />
              </div>

              {/* Phone Input */}
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-transparent"
                />
              </div>

              {/* Timeline Input */}
              <div>
                <input 
                  type="text" 
                  placeholder="Timeline" 
                  className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-transparent"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-transparent"
                />
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <select 
                  className="w-full bg-[#1c1c1c] text-gray-500 rounded-lg px-5 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-transparent cursor-pointer"
                >
                  <option value="" disabled selected>Service Of Interest</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="web-dev">Web Development</option>
                  <option value="app-dev">App Development</option>
                  <option value="ai-ml">AI Solutions</option>
                </select>
                {/* Custom Chevron Icon */}
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>

              {/* Project Details Textarea */}
              <div>
                <textarea 
                  placeholder="Project Details..." 
                  rows="1" // Starts small but user can expand
                  className="w-full h-[150px] md:h-[135px] bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-transparent resize-none"
                ></textarea>
              </div>
            </div>

          </div>

          {/* Send Button */}
          <div className="flex justify-end mt-8">
            <button 
              type="button" 
              className="px-10 py-3 bg-[#1c1c1c] text-white text-lg font-medium rounded-lg border border-gray-600 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
            >
              Send
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;