// import React from "react";
// import { products } from "../data/products";
// import { useCart } from "../context/CartContext";
// import { Link } from 'react-router-dom'

// const Products = () => {
//   const { addToCart } = useCart();

//   return (
//     <div className="bg-white py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
//           Explore Our Collection
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border rounded-lg shadow-md hover:shadow-lg p-4 transition"
//             >
//               <Link to={`/product/${product.id}`}>
//   <img
//     src={product.image}
//     alt={product.name}
//     className="w-full h-64 object-cover rounded-md"
//   />
// </Link>
//               <h2 className="text-xl font-semibold mt-4 text-gray-700">
//                 {product.name}
//               </h2>
//               <p className="text-blue-600 font-bold mt-1">${product.price}</p>
//               <p className="text-sm text-gray-500 mt-2">
//                 {product.description}
//               </p>

//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

// import React, { useState } from "react";
// import { products } from "../data/products";
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const { addToCart } = useCart();

//   // Filter states
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [priceRange, setPriceRange] = useState([0, 500]);

//   // Get unique categories
//   const categories = ["All", ...new Set(products.map((p) => p.category))];

//   // Filtered products
//   const filtered = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" || product.category === selectedCategory;

//     const matchesPrice =
//       product.price >= priceRange[0] && product.price <= priceRange[1];

//     return matchesSearch && matchesCategory && matchesPrice;
//   });

//   return (
//     <div className="bg-white py-12 px-4 mt-10">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
//           Explore Our Collection
//         </h1>

//         {/* Filters */}
// <div className="flex flex-col md:flex-row gap-6 justify-between mb-10">
//   {/* Search */}
//   <input
//     type="text"
//     placeholder="Search products..."
//     className="border px-4 py-2 rounded-md w-full md:w-1/3"
//     value={searchTerm}
//     onChange={(e) => setSearchTerm(e.target.value)}
//   />

//   {/* Category Filter */}
//   <select
//     className="border px-4 py-2 rounded-md w-full md:w-1/4"
//     value={selectedCategory}
//     onChange={(e) => setSelectedCategory(e.target.value)}
//   >
//     {categories.map((cat, i) => (
//       <option key={i} value={cat}>
//         {cat}
//       </option>
//     ))}
//   </select>

//   {/* Price Filter */}
//   <div className="flex flex-col w-full md:w-1/3">
//     <label className="text-sm text-gray-600 mb-1">
//       Price: ${priceRange[0]} - ${priceRange[1]}
//     </label>
//     <div className="flex items-center gap-2">
//       <input
//         type="range"
//         min="0"
//         max="500"
//         value={priceRange[0]}
//         onChange={(e) =>
//           setPriceRange([parseInt(e.target.value), priceRange[1]])
//         }
//         className="w-full"
//       />
//       <input
//         type="range"
//         min="0"
//         max="500"
//         value={priceRange[1]}
//         onChange={(e) =>
//           setPriceRange([priceRange[0], parseInt(e.target.value)])
//         }
//         className="w-full"
//       />
//     </div>
//   </div>
// </div>

//         {/* Products */}
//         {filtered.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//             {filtered.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition"
//               >
//                 <Link to={`/product/${product.id}`}>
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover rounded-md"
//                   />
//                 </Link>
//                 <h2 className="text-xl font-semibold mt-4 text-gray-700">
//                   {product.name}
//                 </h2>
//                 <p className="text-blue-600 font-bold mt-1">${product.price}</p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   {product.description}
//                 </p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-10">
//             No products found matching your filters.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

// src/pages/Products.jsx
// src/pages/Products.jsx
import React, { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Products = () => {
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-white py-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Search</h2>
            <input
              type="text"
              placeholder="Search products..."
              className="border px-4 py-2 rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Category</h2>
            <div className="space-y-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2 rounded-md border ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Price Range</h2>
            <label className="text-sm text-gray-600 mb-1 block">
              ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border rounded-lg shadow-sm hover:shadow-lg p-4 transition group"
                >
                  <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-52 object-cover transform group-hover:scale-105 transition"
                    />
                  </Link>
                  <h2 className="text-lg font-semibold mt-4 text-gray-800">{product.name}</h2>
                  <p className="text-blue-600 font-bold">${product.price}</p>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>

                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-full transition"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">No products found.</p>
          )}
        </div>
      </div>
      
      <Footer/>

    </div>
  );
};

export default Products;
