import React, { useState } from 'react';

const Contact = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    timeline: '',
    email: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // To show success/error message

  // 2. Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', phone: '', timeline: '', email: '', service: '', message: '' }); // Reset form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="bg-black py-20 font-['Montserrat']">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact me</h2>
          <p className="text-gray-400 text-lg">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-6">
              <input 
                name="name" value={formData.name} onChange={handleChange} required
                type="text" placeholder="Name" 
                className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent"
              />
              <input 
                name="phone" value={formData.phone} onChange={handleChange}
                type="tel" placeholder="Phone Number" 
                className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent"
              />
              <input 
                name="timeline" value={formData.timeline} onChange={handleChange}
                type="text" placeholder="Timeline" 
                className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent"
              />
            </div>

            <div className="space-y-6">
              <input 
                name="email" value={formData.email} onChange={handleChange} required
                type="email" placeholder="Email" 
                className="w-full bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent"
              />
              
              <div className="relative">
                <select 
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full bg-[#1c1c1c] text-gray-500 rounded-lg px-5 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent cursor-pointer"
                >
                  <option value="" disabled>Service Of Interest</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="AI Solutions">AI Solutions</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </div>
              </div>

              <textarea 
                name="message" value={formData.message} onChange={handleChange} required
                placeholder="Project Details..." 
                rows="1" 
                className="w-full h-[150px] md:h-[135px] bg-[#1c1c1c] text-white placeholder-gray-500 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent resize-none"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col items-end mt-8">
            <button 
              type="submit" 
              className="px-10 py-3 bg-[#1c1c1c] text-white text-lg font-medium rounded-lg border border-gray-600 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
            >
              {status === 'Sending...' ? 'Sending...' : 'Send'}
            </button>
            {status && <p className="text-orange-500 mt-4">{status}</p>}
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;