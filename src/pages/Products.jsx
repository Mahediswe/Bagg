

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


// import React, {useEffect,  useState } from "react";
// import { products } from "../data/products";
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";


// const Products = () => {
//   const { addToCart } = useCart();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [priceRange, setPriceRange] = useState([0, 500]);

//   const categories = ["All", ...new Set(products.map((p) => p.category))];

//   const filtered = products.filter((product) => {
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
//     const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
//     return matchesSearch && matchesCategory && matchesPrice;
//   });

//   return (
//     <div className="bg-white  mt-24 mb-8 ">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Sidebar Filters */}
//         <div className="lg:col-span-1 space-y-6">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Search</h2>
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="border px-4 py-2 rounded-md w-full"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-2">Category</h2>
//             <div className="space-y-2">
//               {categories.map((cat, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`w-full text-left px-4 py-2 rounded-md border ${
//                     selectedCategory === cat
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-700"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-2">Price Range</h2>
//             <label className="text-sm text-gray-600 mb-1 block">
//               ${priceRange[0]} - ${priceRange[1]}
//             </label>
//             <div className="flex gap-2 items-center">
//               <input
//                 type="range"
//                 min="0"
//                 max="500"
//                 value={priceRange[0]}
//                 onChange={(e) =>
//                   setPriceRange([parseInt(e.target.value), priceRange[1]])
//                 }
//                 className="w-full"
//               />
//               <input
//                 type="range"
//                 min="0"
//                 max="500"
//                 value={priceRange[1]}
//                 onChange={(e) =>
//                   setPriceRange([priceRange[0], parseInt(e.target.value)])
//                 }
//                 className="w-full"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Products */}
//         <div className="lg:col-span-3">
//           {filtered.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {filtered.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white border rounded-lg shadow-sm hover:shadow-lg p-4 transition group"
//                 >
//                   <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-md">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-52 object-cover transform group-hover:scale-105 transition"
//                     />
//                   </Link>
//                   <h2 className="text-lg font-semibold mt-4 text-gray-800">{product.name}</h2>
//                   <p className="text-blue-600 font-bold">${product.price}</p>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>

//                   <div className="mt-4 flex gap-2">
//                     <Link
//                       to={`/product/${product.id}`}
//                       className="flex-1 bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-full transition"
//                     >
//                       View Details
//                     </Link>
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-500 mt-10">No products found.</p>
//           )}
//         </div>
//       </div>

//       <Footer/>

//     </div>
//   );
// };







// export default Products;
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaSearch, FaFilter, FaShoppingCart, FaEye, FaStar, FaTimes } from "react-icons/fa";

const Products = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("name");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://bagg-backend-qxx4.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  // Skeleton loader
  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white border rounded-xl shadow-sm p-4 animate-pulse">
          <div className="w-full h-52 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="flex gap-2">
            <div className="h-10 bg-gray-200 rounded-full w-1/2"></div>
            <div className="h-10 bg-gray-200 rounded-full w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
      <div className="p-3 sm:p-40">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Our Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of handcrafted bags designed for every occasion
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowMobileFilters(true)}
            className="ml-4 bg-blue-600 text-white p-3 rounded-xl"
          >
            <FaFilter />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="lg:col-span-1 space-y-6 hidden lg:block">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="space-y-2">
                  {categories.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filtered.length} of {products.length} products
              </p>
              <div className="hidden lg:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Sort by: Name</option>
                  <option value="price-low">Sort by: Price Low to High</option>
                  <option value="price-high">Sort by: Price High to Low</option>
                </select>
              </div>
            </div>

            {loading ? (
              <SkeletonLoader />
            ) : filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl p-4 transition-all duration-300 group"
                  >
                    <Link to={`/product/${product._id}`} className="block overflow-hidden rounded-lg mb-4">
                      <img
                        src={`/images/${product.image}`}
                        alt={product.name}
                        className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                    
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h2>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={12} className={i < 4 ? "fill-current" : "text-gray-300"} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">(42)</span>
                    </div>
                    
                    <p className="text-2xl font-bold text-blue-600 mb-3">${product.price}</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex gap-2">
                      <Link
                        to={`/product/${product._id}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                      >
                        <FaEye size={12} />
                        Details
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                      >
                        <FaShoppingCart size={12} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)}>
                <FaTimes className="text-gray-500" />
              </button>
            </div>
            
            {/* Mobile filter content would go here */}
            <div className="space-y-6">
              {/* Add the same filter components as desktop but optimized for mobile */}
            </div>
          </div>
        </div>
      )}

      
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default Products;