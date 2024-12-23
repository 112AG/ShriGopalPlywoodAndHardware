import React, { useState, useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_5pq8t7k', // Your EmailJS Service ID
      'template_xi9sple', // Your EmailJS Template ID
      form.current, // The form you are submitting
      'Vp2i2HEBLVIoUrAhK' // Your EmailJS User ID (Public key)
    )
    .then(
      (result) => {
        console.log('Success:', result.text);  // Handle success
      },
      (error) => {
        console.log('Error:', error.text);  // Handle error
      }
    );
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div className="w-full h-full pt-16">
      <h1 className="py-3 font-bold text-4xl text-center">Contact Us</h1>
      <div className="flex items-center justify-evenly flex-wrap gap-4 p-1">
        <div className="w-[360px] h-[516px] border border-black rounded-2xl overflow-hidden">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.9539837399726!2d82.41501514325934!3d25.292393410815123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe502c37dc3f1%3A0x74db66a6f534bc3f!2sShri%20Gopal%20plywood%20and%20hardware!5e1!3m2!1sen!2sin!4v1734927440012!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className="p-2">
            <div>
              <h2 className="font-bold text-xl ">Visit Our Store</h2>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-start gap-1 justify-start mt-2">
                  <FaLocationDot className="text-[#471a1f] mt-1" />
                  <p>GT Road Gerai, Gopiganj Uttar Pradesh 221303</p>
                </div>
                <div className="flex items-center gap-1 justify-start">
                  <IoCall className="text-[#471a1f]" />
                  <p>+91-9305828230</p>
                </div>
                <div className="flex items-center gap-1 justify-start">
                  <IoMail className="text-[#471a1f]" />
                  <p>shrigopalplywood@gmail.com</p>
                </div>
                <div className="flex items-start gap-1 justify-start">
                  <IoIosTime className="text-[#471a1f] mt-1" />
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[516px] p-2 border border-black rounded-2xl overflow-hidden">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="your email@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="feedback" className="block text-gray-700 mb-2">
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Review or Accepted Order (range 50km)"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-900 text-white py-2 px-6 rounded-md hover:bg-red-800 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
