// import React from "react";
// import img1 from "../assets/banner-image-1.jpeg";
// import img2 from "../assets/banner-image-2.jpeg";

// const Banner = () => {
//   return (
//     <div className="bg-white py-12 px-4">
//       <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-10">
//         {/* Left Main Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={img1}
//             alt="Main Banner"
//             className="w-360px h-full rounded-xl pl-40"
//           />
//         </div>

//         {/* Right Text and Image Block */}
//         <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6 leading-snug">
//             Style in handcrafts, made by professionals for you
//           </h2>

//           <img
//             src={img2}
//             alt="Secondary"
//             className="w-full max-w-md rounded-lg shadow-md mb-6"
//           />

//           <p className="text-xl text-blue-600 leading-relaxed">
//             Finest leather women's stylish and imported handbag from the best Baggo Leather Company.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import img1 from "../assets/banner-image-1.jpeg";
import img2 from "../assets/banner-image-2.jpeg";

const Banner = () => {
  return (
    <div className=" py-20 px-6 min-h-[700px] bg-gradient-to-r from-[#ece8f0] to-[#fae6fa]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6 p-10 m-5 font-heading">
            Style in Handcrafts, <br className="hidden md:block" />
            Made by Professionals
          </h2>
          <p className="text-2xl text-gray-600 mb-8 p-5 m-5 font-body">
            Discover finest leather women's stylish handbags from the best Baggo Leather Collection. Designed for elegance, built for quality.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Explore Collection
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          {/* Back Image */}
          <img
            src={img2}
            alt="Bag Style 2"
            className="w-64 h-64 object-cover rounded-xl shadow-lg transform translate-x-8 translate-y-8 z-0"
          />
          {/* Front Image */}
          <img
            src={img1}
            alt="Main Banner"
            className="w-64 h-64 object-cover rounded-xl shadow-2xl absolute top-0 left-0 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
