import React from 'react';

import Footer from '../components/Footer';

const blogs = [
  {
    id: 1,
    title: '5 Tips to Style Your Outfit Perfectly',
    excerpt: 'Discover easy fashion hacks that elevate your everyday look effortlessly.',
    image: '/images/p1.jpeg',
    author: 'Sadia Islam',
    date: 'July 20, 2025',
  },
  {
    id: 2,
    title: 'Top 10 Summer Essentials for Women',
    excerpt: 'Beat the heat with these trending summer essentials for 2025.',
    image: '/images/p2.jpeg',
    author: 'Mira Haque',
    date: 'July 15, 2025',
  },
  {
    id: 3,
    title: 'How to Choose Accessories for Any Occasion',
    excerpt: 'Learn the art of matching accessories to elevate your outfit for any event.',
    image: '/images/p3.jpeg',
    author: 'Nabila Akter',
    date: 'July 10, 2025',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-12 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Latest From Our Blog</h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-gray-800 hover:text-orange-500 transition">{blog.title}</h2>
              <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-7'>
        <Footer/>
      </div>
    </div>
  );
};

export default Blog;
