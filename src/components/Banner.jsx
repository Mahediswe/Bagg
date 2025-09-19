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


// import React from "react";


// const Banner = () => {
//   return (
//     <div className=" py-20 px-6 min-h-[700px] bg-gradient-to-r from-[#ece8f0] to-[#fae6fa]">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
//         {/* Left Text Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6 p-10 m-5 font-heading">
//             Style in Handcrafts, <br className="hidden md:block" />
//             Made by Professionals
//           </h2>
//           <p className="text-2xl text-gray-600 mb-8 p-5 m-5 font-body">
//             Discover finest leather women's stylish handbags from the best Baggo Leather Collection. Designed for elegance, built for quality.
//           </p>
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
//             Explore Collection
//           </button>
//         </div>

//         {/* Right Image Section */}
//         <div className="w-full md:w-1/2 relative flex justify-center">
//           {/* Back Image */}
//           <img
//             src="/images/banner-2.jpeg"
//             alt="Bag Style 2"
//             className="w-64 h-64 object-cover rounded-xl shadow-lg transform translate-x-8 translate-y-8 z-0"
//           />
//           {/* Front Image */}
//           <img
//             src="/images/banner-1.jpeg"
//             alt="Main Banner"
//             className="w-64 h-64 object-cover rounded-xl shadow-2xl absolute top-0 left-0 z-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6 min-h-[500px] overflow-hidden">
      
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20"
        animate={{
          y: [0, 12, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Text Content */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full uppercase font-semibold tracking-wide shadow-md">
              New Collection
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Premium Handbags for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Everyday Elegance
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-700 text-lg mb-8 max-w-md leading-relaxed"
            variants={itemVariants}
          >
            Discover our curated collection of handcrafted leather bags designed for the modern woman.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            variants={itemVariants}
          >
            <motion.button 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
            <motion.button 
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Collection
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center md:justify-start"
            variants={itemVariants}
          >
            <div className="flex items-center text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Free shipping on orders over $99
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="relative w-80 h-80"
            variants={imageVariants}
          >
            <motion.img
              src="/images/hero.jpg"
              alt="Premium Handbag"
              className="w-full h-full object-contain rounded-2xl shadow-xl"
              whileHover={{ 
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.3 }
              }}
            />
            <motion.div 
              className="absolute -bottom-3 -right-3 bg-red-600 text-white text-sm font-bold px-3 py-2 rounded-lg shadow-lg"
              variants={badgeVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              Sale
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;