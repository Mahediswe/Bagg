import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Banner2 = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#f8f5ff] to-[#fae6fa] h-[700px] flex items-center justify-center px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row h-[480px] w-full">
        {/* Left Image */}
        <div className="w-full lg:w-2/5 h-64 lg:h-full relative overflow-hidden">
          <img
            src="/images/banner-1.jpeg"
            alt="Custom made luxury bag"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          
          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute top-0 right-0 w-full h-full bg-blue-600 opacity-90 rounded-bl-full"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center p-8 lg:p-12 bg-white">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide">
              Bespoke Collection
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Custom Made Bags <br className="hidden lg:block" />Crafted For Your Style
          </h1>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Discover our exclusive collection of fashion handbags from Baggo. We inspire individuals to express their unique style with specially crafted accessories that bring comfort and elegance to everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group">
              <span className="bg-white text-blue-600 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaPlay size={14} />
              </span>
              Watch Our Story
            </button>
            
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
              Explore Collection
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default Banner2