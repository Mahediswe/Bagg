import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-md p-8 mb-8">
        {/* Contact Info */}
        
        <div className="space-y-6">
            
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 text-xl">
            Have a question or want to collaborate? Feel free to reach out.
          </p>

          <div className="flex items-center gap-4 text-gray-700 text-xls">
            <FaPhone className="text-xl text-orange-500" />
            <span>+1 800 234 5678</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700 text-xl">
            <FaEnvelope className="text-xl text-orange-500" />
            <span>support@baggo.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700 text-xl">
            <FaMapMarkerAlt className="text-xl text-orange-500" />
            <span>58 A, East Madison St, Baltimore, MD</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <form className="space-y-5 text-xl">
            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;


        <h1 className="text-3xl font-bold text-center ">Contact us</h1>
