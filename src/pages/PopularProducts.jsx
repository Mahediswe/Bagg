import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const PopularProducts = () => {
  const { addToCart } = useCart();

  // Top 4 product নিই
  const topProducts = products.slice(0, 4);

  return (
    <div className="bg-gradient-to-r from-[#f4cbfa] to-[#f3e8f3] min-h-[500px] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-heading">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              </Link>
              <h3 className="text-lg font-semibold mt-4 text-gray-700">{product.name}</h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/products">
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
