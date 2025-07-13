import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Your cart is empty 👜</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Go to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-indigo-200 pt-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>

        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-6 w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">Qty: {item.qty}</p>
                </div>
              </div>

              <div className="text-xl font-semibold text-blue-600">
                ${item.price * item.qty}
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <h3 className="text-2xl font-bold text-gray-800">
            Total: <span className="text-blue-600">${total.toFixed(2)}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
