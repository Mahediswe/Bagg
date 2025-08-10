import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
//import logo from '../assets/logo.jpeg'; // Replace with your actual logo
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
    const { getCartCount } = useCart();


  return (
    <div className="bg-sky-400 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="Baggo Logo" className="w-full h-12 rounded-full object-cover" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
          >
            <span className="cursor-pointer hover:text-blue-500 transition">Catalog</span>
            {/* Submenu */}
            {showSubmenu && (
              <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 w-40 z-40">
                <li>
                  <Link to="/category/men" className="block px-4 py-2 hover:bg-blue-100">Men</Link>
                </li>
                <li>
                  <Link to="/category/women" className="block px-4 py-2 hover:bg-blue-100">Women</Link>
                </li>
                <li>
                  <Link to="/category/kids" className="block px-4 py-2 hover:bg-blue-100">Kids</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-500 transition">Product</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-500 transition">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          
          <Link to="/cart" className="relative">
             <FaShoppingCart className="text-2xl text-black" />
             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
               {getCartCount()}
             </span>
        </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer">Catalog</summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li><Link to="/category/men" onClick={() => setIsOpen(false)}>Men</Link></li>
                  <li><Link to="/category/women" onClick={() => setIsOpen(false)}>Women</Link></li>
                  <li><Link to="/category/kids" onClick={() => setIsOpen(false)}>Kids</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>Pages</Link></li>
            <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            
            <li>
              <button className="flex items-center gap-2 bg-blue-500 text-white rounded-full px-4 py-2 mt-2">
                <FaShoppingCart />
                Cart
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

