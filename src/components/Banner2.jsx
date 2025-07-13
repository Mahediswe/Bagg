import React from 'react'
import { FaPlay } from 'react-icons/fa'
import img from '../assets/banner-image-2.jpeg'

const Banner2 = () => {
  return (
    <div className="bg-gradient-to-r from-[#f4cbfa] to-[#f3e8f3] min-h-[500px]">
      <div className="flex h-full max-w-8xl mx-auto">
        {/* Left Image */}
        <div className="w-1/2 h-full  p-16 m-16">
          <img
            src={img}
            alt="Banner"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-1/2 flex flex-col justify-center items-start p-10 bg-gray-100 rounded-r-lg">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-heading">
            Custom made bags for you
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-body">
            Watch our exclusive fashion hand bags from Baggo. We inspire a lot of people to get into wearing special to make them comfortable to live the life you desire.
          </p>
          <button className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 text-lg rounded-full shadow hover:bg-red-700 transition duration-300">
            <span className="bg-white text-red-600 p-2 rounded-full">
              <FaPlay size={18} />
            </span>
            View Our Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner2
