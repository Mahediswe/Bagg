// import React from 'react';
// import { products } from '../data/products';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const PopularProducts = () => {
//   const { addToCart } = useCart();

//   // Top 4 product নিই
//   const topProducts = products.slice(0, 4);

//   return (
//     <div className="bg-gradient-to-r from-[#f4cbfa] to-[#f3e8f3] min-h-[500px] py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-heading">
//           Popular Products
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {topProducts.map((product) => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//               <Link to={`/product/${product.id}`}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//               </Link>
//               <h3 className="text-lg font-semibold mt-4 text-gray-700">{product.name}</h3>
//               <p className="text-blue-600 font-bold">${product.price}</p>
//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 text-center">
//           <Link to="/products">
//             <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
//               View All Products
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;


import React from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const { addToCart } = useCart();

  const popularItems = products.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {popularItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* ✅ Image hover scale */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <span className="inline-block bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-500 my-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>

                  <p className="text-blue-600 font-bold text-lg mb-4">
                    ${product.price}
                  </p>
                </div>

                {/* ✅ Stylish View Details + Add to Cart */}
                <div className="flex items-center justify-between mt-auto gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-sm px-4 py-2 rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
