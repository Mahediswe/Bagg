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

import React from 'react'


const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#f3dbf7] to-[#f3e8f3] min-h-[700px] py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6">
        {/* Left Side - Transparent Bag Image with Title & Price */}
        <div className="flex flex-col items-center">
          <img
            src="/images/banner-2.jpeg"
            alt="Leather Bag 1"
            className="w-full h-72 object-contain rounded-lg "
          />
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold text-gray-800 font-heading">Wally Slim Leather Bags</h1>
            {/* <h2 className="text-xl text-blue-600 mt-2">$124</h2> */}
          </div>
        </div>

        {/* Right Side - Hero Main Bag Image */}
        <div className="relative mt-10 md:mt-0">
          <img
            src="/images/banner-1.jpeg"
            alt="Hero Leather Bag"
            className="w-full h-[650px] object-cover rounded-xl shadow-2xl translate-y-8"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
