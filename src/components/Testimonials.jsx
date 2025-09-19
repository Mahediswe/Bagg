import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Ut morbi tincidunt augue interdum velit euismod. Neque gravida in fermentum et sollicitudin ac orci. Phasellus egestas tellus rutrum tellus.",
      author: "Julian Moore",
      role: "Happy Customer",
      rating: 5
    },
    {
      id: 2,
      text: "Excellent service! The products are amazing quality and the delivery was super fast. Will definitely shop here again.",
      author: "Sarah Johnson",
      role: "Frequent Buyer",
      rating: 5
    },
    {
      id: 3,
      text: "I've never been happier with a purchase. The attention to detail is remarkable and the customer support is outstanding.",
      author: "Michael Chen",
      role: "First-time Customer",
      rating: 4
    },
    {
      id: 4,
      text: "Absolutely love my new bag! The craftsmanship is exceptional and it's even better than I expected.",
      author: "Emma Williams",
      role: "Loyal Customer",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-xl">Discover why thousands of customers trust Baggo for their premium handbag needs</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[320px] flex items-center relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors z-10 border border-gray-100"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Testimonial Content */}
          <div className="text-center w-full px-8 md:px-12">
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            
            <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-md">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors z-10 border border-gray-100"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">Join over <span className="font-semibold text-blue-600">5,000+</span> satisfied customers worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;