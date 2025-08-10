// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// //import { products } from "../data/products";
// import { useCart } from "../context/CartContext";
// import RelatedProducts from "../components/RelatedProducts";
// import Footer from "../components/Footer";


// const ProductDetails = () => {
//   // const { id } = useParams();
//   // const { addToCart } = useCart();

//   // const product = products.find((item) => item.id === parseInt(id));

//   // const [quantity, setQuantity] = useState(1);

//   // if (!product) {
//   //   return (
//   //     <div className="text-center text-2xl mt-20 text-red-600">
//   //       Product not found
//   //     </div>
//   //   );
//   // }

//   // const renderStars = (rating) => {
//   //   const fullStars = Math.floor(rating);
//   //   const starsArray = [];

//   //   for (let i = 1; i <= 5; i++) {
//   //     if (i <= fullStars) {
//   //       starsArray.push(
//   //         <span key={i} className="text-yellow-400 text-xl">
//   //           ★
//   //         </span>
//   //       );
//   //     } else {
//   //       starsArray.push(
//   //         <span key={i} className="text-gray-300 text-xl">
//   //           ★
//   //         </span>
//   //       );
//   //     }
//   //   }

//   //   return starsArray;

// const { id } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//  useEffect(() => {
//   fetch(`http://localhost:5000/api/products/${id}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(data => setProduct(data))
//     .catch(err => {
//       console.error("Fetch error:", err);
//       setProduct(null);
//     });
// }, [id]);
// console.log("Product ID from URL:", id);


//   if (!product) {
//     return <div className="text-center text-2xl mt-20 text-red-600">Loading...</div>;
//   }

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     return [...Array(5)].map((_, i) => (
//       <span key={i} className={i < fullStars ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}>★</span>
//     ));

//   };

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-12">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//         {/* Product Image */}
//         <div className="w-full h-full">
//           <img
//             src={`/images/${product.image}`}
//             alt={product.name}
//             className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
//           />
//           console.log("Product image:", product.image);

//         </div>

//         {/* Product Info */}

//         <div className="flex flex-col gap-6">
//           {/* Title */}
//           <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

//           {/* Category */}
//           <p className="text-sm text-gray-500 uppercase">{product.category}</p>

//           {/* Description */}
//           <p className="text-gray-700 leading-relaxed">{product.description}</p>

//           {/* Price */}
//           <p className="text-3xl text-pink-600 font-semibold">
//             ${product.price}
//           </p>

//           {/* Rating Stars */}
//           <div className="flex items-center gap-2">
//             {renderStars(product.rating || 4.5)}
//             <span className="text-sm text-gray-500 ml-2">
//               ({product.rating || 4.5})
//             </span>
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-gray-700 font-medium">Quantity:</span>

//             <div className="flex items-center border rounded-md px-3 py-1">
//               <button
//                 onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
//                 className="text-xl px-2 text-gray-600"
//               >
//                 -
//               </button>

//               <span className="px-4 text-lg">{quantity}</span>

//               <button
//                 onClick={() => setQuantity((prev) => prev + 1)}
//                 className="text-xl px-2 text-gray-600"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Add to Cart */}
//           <button
//             onClick={() => addToCart(product, quantity)}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <RelatedProducts currentProduct={product} />

//       <Footer/>

//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setProduct(null);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-2xl mt-20 text-red-600">Loading...</div>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < fullStars ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="w-full h-full">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-500 uppercase">{product.category}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          <p className="text-3xl text-pink-600 font-semibold">${product.price}</p>

          {/* Rating Stars */}
          <div className="flex items-center gap-2">
            {renderStars(product.rating || 4.5)}
            <span className="text-sm text-gray-500 ml-2">({product.rating || 4.5})</span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md px-3 py-1">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="text-xl px-2 text-gray-600"
              >
                -
              </button>
              <span className="px-4 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-xl px-2 text-gray-600"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product, quantity)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
   <RelatedProducts currentProduct={product} />
{/* <RelatedProducts currentProduct={product} products={product} /> */}

      <Footer />

    </div>
  );
};

export default ProductDetails;
