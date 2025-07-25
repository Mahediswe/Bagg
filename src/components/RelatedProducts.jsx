import React from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const RelatedProducts = ({ currentProduct }) => {
  const related = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  ).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="mt-20 my-7">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72  object-cover mb-3 rounded"
            />
            <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
            <p className="text-blue-600 font-medium">${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
