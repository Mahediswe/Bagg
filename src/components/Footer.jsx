import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="mb-2">
            <img
              src="/images/logo.jpeg"
              alt="Baggo Logo"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
            />
          </div>
          <h2 className="text-2xl font-bold text-white font-serif">Baggo</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium handbag collections from top artisans worldwide. 
            Experience the perfect blend of style, quality, and elegance with Baggo.
          </p>
          <div className="flex gap-4 text-lg pt-2">
            <a href="/" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaFacebookF size={14} />
            </a>
            <a href="/" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="/" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white pb-2 border-b border-gray-700">Quick Links</h3>
          <ul className="space-y-3">
            {['About Us', 'Collections', 'Blog', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white pb-2 border-b border-gray-700">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-400">
                58 A, East Madison Street<br />
                Baltimore, MD, USA 4508
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="w-4 h-4 text-blue-400" />
              <p className="text-sm text-gray-400">+1 800 234 5678</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-4 h-4 text-blue-400" />
              <p className="text-sm text-gray-400">support@baggo.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="w-4 h-4 text-blue-400" />
              <p className="text-sm text-gray-400">Mon - Fri, 9AM - 6PM</p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white pb-2 border-b border-gray-700">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for updates on new collections and exclusive offers.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Baggo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Accepted Payment Methods:</span>
            <div className="flex gap-2">
              {['Visa', 'Mastercard', 'PayPal', 'Amex'].map((method) => (
                <div key={method} className="bg-gray-800 px-3 py-1 rounded text-xs">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;