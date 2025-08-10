// // src/context/CartContext.jsx
// import React, { createContext, useState, useContext } from 'react'

// const CartContext = createContext()

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([])

//   // Add item to cart
//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const exists = prevItems.find(item => item.id === product.id)
//       if (exists) {
//         return prevItems.map(item =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         )
//       } else {
//         return [...prevItems, { ...product, qty: 1 }]
//       }
//     })
//   }

//   // Remove item from cart
//   const removeFromCart = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id))
//   }

//   // Get total quantity
//   const getCartCount = () => {
//     return cartItems.reduce((total, item) => total + item.qty, 0)
//   }

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// // Custom hook
// export const useCart = () => useContext(CartContext)


// import React, { createContext, useState, useContext, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const stored = localStorage.getItem("cartItems");
//     return stored ? JSON.parse(stored) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product, qty = 1) => {
//     setCartItems(prevItems => {
//       const exists = prevItems.find(item => item.id === product.id);
//       if (exists) {
//         return prevItems.map(item =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       } else {
//         return [...prevItems, { ...product, qty: 1 }];
//       }
//     });
//   };

// //   const addToCart = (product, quantity = 1) => {
// //   setCartItems(prevItems => {
// //     const existing = prevItems.find(item => item.id === product.id);

// //     if (existing) {
// //       return prevItems.map(item =>
// //         item.id === product.id
// //           ? { ...item, quantity: item.quantity + quantity }
// //           : item
// //       );
// //     } else {
// //       return [...prevItems, { ...product, quantity }];
// //     }
// //   });
// // };


//   const removeFromCart = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   const getCartCount = () => {
//     return cartItems.reduce((total, item) => total + item.qty, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    setCartItems(prevItems => {
      const exists = prevItems.find(item => item._id === product._id);
      if (exists) {
        return prevItems.map(item =>
          item._id === product._id ? { ...item, qty: item.qty + qty } : item
        );
      } else {
        return [...prevItems, { ...product, qty }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== id));
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
