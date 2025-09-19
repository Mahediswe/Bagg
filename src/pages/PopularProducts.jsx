
// import React from "react";
// import { products } from "../data/products";
// import { useCart } from "../context/CartContext";
// import { FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const PopularProducts = () => {
//   const { addToCart } = useCart();

//   const popularItems = products.slice(0, 6);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//           Popular Products
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {popularItems.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col group"
//             >
//               {/* ✅ Image hover scale */}
//               <div className="overflow-hidden rounded-t-xl">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <div>
//                   <span className="inline-block bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full mb-2">
//                     {product.category}
//                   </span>

//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center gap-1 text-yellow-500 my-2">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <FaStar key={i} size={16} />
//                     ))}
//                   </div>

//                   <p className="text-blue-600 font-bold text-lg mb-4">
//                     ${product.price}
//                   </p>
//                 </div>

//                 {/* ✅ Stylish View Details + Add to Cart */}
//                 <div className="flex items-center justify-between mt-auto gap-2">
//                   <Link
//                     to={`/product/${product.id}`}
//                     className="text-sm px-4 py-2 rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300"
//                   >
//                     View Details
//                   </Link>

//                   <button
//                     onClick={() => addToCart(product)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-300"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularProducts;

import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // data fetch from Backend 
  useEffect(() => {
    setLoading(true);
    fetch("https://bagg-backend-qxx4.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  // 
  const popularItems = products.slice(0, 6);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
          <div className="w-full h-64 bg-gray-200"></div>
          <div className="p-4 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-4 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="flex justify-between pt-4">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4">
            Trending Now
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            Most Popular Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our customers' favorite picks that are trending right now
          </p>
        </div>

        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                      Popular
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-3 font-medium">
                      {product.category}
                    </span>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={14}
                          className={i < 4 ? "fill-current" : "text-gray-300"}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">(42)</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <p className="text-2xl font-bold text-blue-600">
                        ${product.price}
                      </p>
                      {product.oldPrice && (
                        <p className="text-sm text-gray-400 line-through">
                          ${product.oldPrice}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Link
                      to={`/product/${product._id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium"
                    >
                      <FaEye size={14} />
                      View Details
                    </Link>

                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaShoppingCart size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {popularItems.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
            <p className="text-gray-500">Check back later for our popular products</p>
          </div>
        )}

        {popularItems.length > 0 && (
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularProducts;