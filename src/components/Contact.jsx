import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaHeadset } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            We'd love to hear from you. Send us a message and we'll respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Contact Information */}
          <div className="space-y-5">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-lg text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600 text-sm">+1 800 234 5678</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-lg text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm">support@baggo.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-lg text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600 text-sm">58 A, East Madison St, Baltimore, MD</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <FaHeadset className="text-lg text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Send Message</h2>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        

      </div>

      <Footer />
    </div>
  );
};

export default Contact;