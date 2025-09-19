import React from 'react';
import Footer from '../components/Footer';
import { FaCalendar, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: '5 Tips to Style Your Outfit Perfectly',
    excerpt: 'Discover easy fashion hacks that elevate your everyday look effortlessly with our expert styling tips and tricks.',
    image: '/images/p1.jpeg',
    author: 'Sadia Islam',
    date: 'July 20, 2025',
    readTime: '5 min read',
    category: 'Fashion Tips'
  },
  {
    id: 2,
    title: 'Top 10 Summer Essentials for Women',
    excerpt: 'Beat the heat with these trending summer essentials for 2025. Stay stylish and comfortable all season long.',
    image: '/images/p2.jpeg',
    author: 'Mira Haque',
    date: 'July 15, 2025',
    readTime: '7 min read',
    category: 'Seasonal Guide'
  },
  {
    id: 3,
    title: 'How to Choose Accessories for Any Occasion',
    excerpt: 'Learn the art of matching accessories to elevate your outfit for any event, from casual outings to formal gatherings.',
    image: '/images/p3.jpeg',
    author: 'Nabila Akter',
    date: 'July 10, 2025',
    readTime: '6 min read',
    category: 'Accessories'
  },
];

const Blog = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Fashion Insights & Style Tips
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the latest fashion trends, styling tips, and industry insights from our expert team
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white text-blue-600 text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 space-y-4">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <FaUser className="w-3 h-3" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {blog.title}
                </h2>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all duration-300 pt-2">
                  Read More
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Latest Posts</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest fashion tips, trends, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Fashion Tips', 'Seasonal Guide', 'Accessories', 'Trends', 'Lifestyle', 'Inspiration'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      
    </div>
    <Footer />
    </div>
  );
};

export default Blog;