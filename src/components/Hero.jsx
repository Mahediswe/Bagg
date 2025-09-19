// import React from 'react'
// import img1 from '../assets/banner-image-1.jpeg'
// import img2 from '../assets/banner-image-2.jpeg'

// const Hero = () => {
//   return (
//     <div className="bg-white-500 p-6 flex flex-row items-center max-w-7xl m-auto gap-60">
//       <div className=" items-center gap-10">
//         <div>
//           <img
//             src={img2}
//             alt="Leather Bag 1"
//             className="w-600 rounded-lg shadow-lg"
//           />
//         </div>
//         <div className='p-5'>
//           <h1 className="text-3xl font-bold text-black">Wally Slim Leather Bags</h1>
//           <h1 className="text-xl text-black mt-2">$124</h1>
//         </div>
//       </div>
//       <div className="mt-10">
//         <img
//           src={img1}
//           alt="Leather Bag 2"
//           className="w-660 rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   )
// }

// export default Hero




// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="relative bg-gradient-to-br from-[#f8f5ff] to-[#eef2ff] min-h-screen py-16 flex items-center">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
//         <div className="absolute top-1/3 -right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 pt-9 relative z-10">
//         {/* Left Side - Content with Transparent Bag */}
//         <div className=" flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/5">
//           <div className="mb-8">
//             <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider shadow-md">
//               Premium Collection
//             </span>
//           </div>
          
//           <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
//             Elevate Your Style with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Wally Slim</span>
//           </h1>
          
//           <p className="text-gray-900 text-xl mb-8 max-w-md leading-relaxed">
//             Crafted from the finest full-grain leather, our Wally Slim collection combines timeless elegance with modern functionality for the discerning professional.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 mb-10">
//             <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
//               </svg>
//               Shop The Collection
//             </button>
//             <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//               </svg>
//               Watch Story
//             </button>
//           </div>
          
//           <div className="grid grid-cols-3 gap-8 text-center mb-6">
//             <div>
//               <div className="text-2xl font-bold text-blue-600">2K+</div>
//               <div className="text-lg text-gray-600">Premium Products</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-blue-600">98%</div>
//               <div className="text-lg text-gray-600">Happy Customers</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-blue-600">5★</div>
//               <div className="text-lg text-gray-600">Average Rating</div>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4 text-lg text-gray-900 mt-4">
//             <div className="flex items-center">
//               <svg className="w-7 h-7 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               Free shipping
//             </div>
//             <div className="flex items-center">
//               <svg className="w-7 h-7 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               2-year warranty
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Hero Main Bag Image */}
//         <div className="relative w-full md:w-3/5 flex justify-center">
//           <div className="relative w-full max-w-2xl">
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform -rotate-3 z-0"></div>
//             <img
//               src="/images/banner-1.jpeg"
//               alt="Premium Leather Bag"
//               className="relative z-10 w-full h-auto object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
//             />
            
//             {/* Floating badge */}
//             <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg py-3 px-5 z-20">
//               <div className="text-center">
//                 <span className="block text-xs text-gray-500">Starting at</span>
//                 <span className="block text-2xl font-bold text-blue-600">$124</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom animations */}
//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;



import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0, rotate: -2 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: -2,
      transition: {
        duration: 0.7,
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
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center py-16 overflow-hidden">
      {/* Background subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-gray-100/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative z-10">
        
        {/* Left Side - Content */}
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium">
              Premium Collection
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            variants={itemVariants}
          >
            Elevate Your Style with{' '}
            <span className="text-blue-600">Wally Slim</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed"
            variants={itemVariants}
          >
            Crafted from the finest full-grain leather, our collection combines 
            timeless elegance with modern functionality.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r from-blue-700 to-purple-700  text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Collection
            </motion.button>
            <motion.button 
              className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Story
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 gap-6 text-center mb-6"
            variants={itemVariants}
          >
            <div>
              <div className="text-xl font-bold text-blue-600">2K+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-600">5★</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Product Image */}
        <motion.div 
          className="relative w-full md:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="relative w-full max-w-md"
            variants={imageVariants}
          >
            <motion.div 
              className="absolute -inset-4 bg-blue-50 rounded-2xl transform"
              initial={{ rotate: -2 }}
              animate={{ rotate: -2 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src="/images/hero1.jpg"
              alt="Premium Leather Bag"
              className="relative z-10 w-full h-auto object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Price Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-md py-2 px-4"
              variants={badgeVariants}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <div className="text-center">
                <span className="block text-xs text-gray-500">From</span>
                <span className="block text-xl font-bold text-blue-600">$124</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements for background */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-20"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default Hero;