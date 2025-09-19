import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // data fetch from API 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`bagg-backend-qxx4.vercel.app//api/products/${id}`);
        setProduct({
          name: data.name || "",
          category: data.category || "",
          price: data.price || "",
          description: data.description || "",
          image: data.image || "",
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to load product data");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // input field handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // from submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`bagg-backend-qxx4.vercel.app/api/products/${id}`, product);
      alert("Product updated successfully");
      navigate(`/product/${id}`);
    } catch (err) {
      alert("Update failed. Please try again.");
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            min="0"
            className="border rounded px-3 py-2 w-full"
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
            rows={4}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
