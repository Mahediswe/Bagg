import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaChevronDown, FaUser } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-200 shadow-lg p-3 fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-xl">
            <Link to="/">
              <img
                src="/images/logo.jpeg"
                alt="Baggo Logo"
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-100 shadow-sm"
              />
            </Link>
            <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:block">Baggo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block text-xl">
            <div className="ml-10 flex items-baseline space-x-6 ">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md  font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* <div 
                className="relative"
                onMouseEnter={() => setShowSubmenu(true)}
                onMouseLeave={() => setShowSubmenu(false)}
              >
                <button className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md  font-medium flex items-center transition-colors duration-200">
                  <span>Catalog</span>
                  <FaChevronDown className="ml-1 text-xs" />
                </button>
                
                {showSubmenu && (
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                    <div className="py-1">
                      <Link 
                        to="/category/men" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        Men
                      </Link>
                      <Link 
                        to="/category/women" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        Women
                      </Link>
                      <Link 
                        to="/category/kids" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        Kids
                      </Link>
                    </div>
                  </div>
                )}
              </div> */}

              <Link 
                to="/products" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Products
              </Link>
              
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md  font-medium transition-colors duration-200"
              >
                Blog
              </Link>
              
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md  font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Auth + Cart (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {token ? (
                <>
                  <Link 
                    to="/profile" 
                    className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FaUser className="h-5 w-5" />
                  </Link>
                  
                  <button 
                    onClick={handleLogout} 
                    className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md  font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                  
                  <Link 
                    to="/cart" 
                    className="relative p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FaShoppingCart className="h-5 w-5" />
                    {getCartCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {getCartCount()}
                      </span>
                    )}
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {token && (
              <Link to="/cart" className="relative p-2 mr-2">
                <FaShoppingCart className="h-5 w-5 text-gray-600" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
            >
              {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="px-3 py-2">
              <details>
                <summary className="flex items-center justify-between text-base font-medium text-gray-600 cursor-pointer list-none">
                  <span>Catalog</span>
                  <FaChevronDown className="text-xs" />
                </summary>
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    to="/category/men"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    Men
                  </Link>
                  <Link
                    to="/category/women"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    Women
                  </Link>
                  <Link
                    to="/category/kids"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    Kids
                  </Link>
                </div>
              </details>
            </div>

            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {token ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors duration-150"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
