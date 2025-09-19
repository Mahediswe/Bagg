import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const brandLogos = [
    { id: 1, name: 'TIFFANY', logo: '/images/p1.jpeg' },
    { id: 2, name: 'GUCCI', logo: '/images/p2.jpeg' },
    { id: 3, name: 'PRADA', logo: '/images/p3.jpeg' },
    { id: 4, name: 'LOUIS VUITTON', logo: 'images/p4.jpeg' },
    { id: 5, name: 'CHANEL', logo: '/images/p2.jpeg' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="max-w-7xl mx-auto  absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Never Miss Our Latest Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter and be the first to know about exclusive offers, new arrivals, and styling tips.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-16">
          {isSubscribed ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to the Baggo Family!</h3>
              <p className="text-gray-600 mb-6">Thank you for subscribing. Check your inbox for our welcome message.</p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="text-blue-600 hover:text-blue-700 font-medium underline"
              >
                Subscribe again with a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </div>

        {/* Brand Logos Section */}
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-6">Trusted by renowned brands worldwide</p>
          
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-marquee space-x-12 py-2">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div key={`${brand.id}-${index}`} className="flex-shrink-0">
                  {brand.logo ? (
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <span className="text-lg font-bold text-gray-400">{brand.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;