import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart"; // (Step 7 e add korbo)
import Contact from './components/Contact';
import Blog from './pages/Blog';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </>
  )
}

export default App
