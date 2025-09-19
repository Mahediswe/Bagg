// import React from 'react';
// import { Link } from 'react-router-dom';

// const Banner3 = () => {
//   const collections = [
//     {
//       id: 1,
//       name: 'Summer Vibes',
//       image: '/images/banner-1.jpeg' // সরাসরি পাথ ব্যবহার
//     },
//     {
//       id: 2,
//       name: 'Winter Essentials',
//       image: '/images/banner-1.jpeg'
//     },
//     {
//       id: 3,
//       name: 'Office Elegance',
//       image: '/images/banner-1.jpeg'
//     },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Choose your style</h2>
//         <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
//           Providing the best hand bags for your style and choice has always been our aim.
//           We win our customers heart by listening to them
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {collections.map((collection) => (
//             <div 
//               key={collection.id}
//               className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
//             >
//               <div className="relative h-80">
//                 <img
//                   src={collection.image} // এখানে সরাসরি পাথ ব্যবহার
//                   alt={collection.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
//                   <Link
//                     to="/products"
//                     className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 px-8 py-3 bg-white text-gray-800 font-medium rounded-full hover:bg-gray-100"
//                   >
//                     Shop Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner3;


import React from 'react';
import { Link } from 'react-router-dom';

const Banner3 = () => {
  const collections = [
    {
      id: 1,
      name: 'Synthetic Collections',
      image: '/images/hero2.jpg',
      // description: 'Lightweight and durable synthetic materials'
    },
    {
      id: 2,
      name: 'Leather Collections',
      image: '/images/banner2.jpg',
      // description: 'Premium genuine leather with timeless elegance'
    },
    {
      id: 3,
      name: 'Polyurethane Collections',
      image: '/images/banner1.jpg',
      // description: 'Eco-friendly and versatile polyurethane options'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4">
            Collections
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Signature Style</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Providing the finest handbags for your unique style and preferences has always been our mission.
            We win our customers' hearts by truly listening to them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-80 md:h-96"> {/* Adjusted height */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {collection.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center bg-white text-gray-900 px-5 py-2.5 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-200"
                  >
                    Explore Collection
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>

                {/* Top right badge */}
                <div className="absolute top-4 right-4 bg-white text-blue-600 text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                  New
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/collections"
            className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Collections
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner3;