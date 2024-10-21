import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
   <div className="flex w-[100%] h-[100%] items-center justify-center bg-black">
     <div className=" bg-zinc-900 text-white flex items-center justify-center">
      <div className=" w-[70vh] p-8 bg-zinc-800 rounded-lg shadow-lg">
      <i  onClick={(()=>navigate(-1))} className='text-white ri-arrow-left-line'></i>
        <h1 className="text-4xl font-bold text-center text-[#c6326d] mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c6326d]"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c6326d]"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c6326d]"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-[#c6326d] text-white text-lg font-semibold hover:bg-[#a62757] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Contact;
