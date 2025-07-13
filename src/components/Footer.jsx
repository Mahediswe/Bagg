import React from 'react'
import logo from '../assets/logo.jpeg'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="Baggo Logo" className="w-full h-160 rounded-full object-cover" />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            We bring best and finest hand bag collections from the premium hand bag makers
            to ensure you are very much satisfied with the purchase you make here in Baggo.
            Welcome back again.
          </p>
        </div>

        {/* Address */}
        <div>
          <h1 className="text-xl font-semibold mb-3">We are here</h1>
          <p className="text-sm text-gray-300">
            No: 58 A, East Madison Street,<br />
            Baltimore, MD, USA 4508
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className="text-xl font-semibold mb-3">Contact us</h1>
          <p className="text-sm text-gray-300">Phone: +1 800 234 5678</p>
          <p className="text-sm text-gray-300">Email: support@baggo.com</p>
          <p className="text-sm text-gray-300">Hours: Mon - Fri, 9AM - 6PM</p>
        </div>

        {/* Social Links */}
        <div>
          <h1 className="text-xl font-semibold mb-3">Get us on Social</h1>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-pink-400 transition duration-300">Instagram</a>
            <a href="#" className="hover:text-sky-400 transition duration-300">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Baggo. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
