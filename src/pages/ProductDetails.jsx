import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-2xl mt-20">Product not found</div>;
  }

  return (
    <div className="bg-white py-16 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-[450px] h-[450px] object-cover rounded-lg shadow-lg"
        />

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-blue-600 text-2xl font-semibold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
