// import React from "react";

// const About = () => {
//   const data = [
//     { id: 0, title: "Quality Materials" },
//     { id: 1, title: "Best Design" },
//     { id: 2, title: "Finest Leather" },
//     { id: 3, title: "Long Stitchline" },
//     { id: 4, title: "Premium Finish" },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-[#f6defa] to-[#f3e8f3] min-h-[700px] pt-40 px-6">
//       {/* Top section with title and description */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 mb-12">
//         <div className="md:w-1/2">
//           <h1 className="text-6xl font-bold text-gray-800 font-heading">
//             A Quality Hand Bag Baggo Providers
//           </h1>
//         </div>
//         <div className="md:w-1/2 text-gray-600 text-2xl leading-relaxed font-body">
//           Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. At
//           auctor urna nunc id cursus metus. Purus sit amet luctus venenatis
//           lectus magna. Rhoncus aenean vel elit scelerisque mauris. <br />
//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </div>
//       </div>

//       {/* Bottom feature section */}
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6 border-t border-gray-300 pt-10">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="flex-1 min-w-[150px] text-center relative after:content-[''] after:absolute after:h-10 after:border-r after:border-gray-300 after:right-0 after:top-1/2 after:-translate-y-1/2 last:after:hidden"
//           >
//             <p className="text-xl font-medium text-gray-700">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;



import React from "react";

const About = () => {
  const data = [
    { 
      id: 0, 
      title: "Quality Materials",
      description: "Sourced from trusted suppliers worldwide",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      )
    },
    { 
      id: 1, 
      title: "Best Design",
      description: "Award-winning designs that blend form and function",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      )
    },
    { 
      id: 2, 
      title: "Finest Leather",
      description: "Only premium full-grain leathers selected",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      )
    },
    { 
      id: 3, 
      title: "Long Stitchline",
      description: "Reinforced stitching for exceptional durability",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    { 
      id: 4, 
      title: "Premium Finish",
      description: "Meticulous attention to every detail",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
      )
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#faf5ff] to-[#f0f4ff] py-24 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section with title and description */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
          <div className="md:w-1/2">
            
            <h1 className="pt-16 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Exceptional Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Handcrafted Bags</span>
            </h1>
          </div>
          <div className="md:w-1/2">
            <div className="text-gray-700 text-lg md:text-2xl leading-relaxed space-y-6">
              <p>
                At Baggo, we believe that excellence is in the details. Each bag is meticulously crafted by skilled artisans who have perfected their craft over decades. We combine traditional techniques with innovative design to create products that stand the test of time.
              </p>
              <p>
                Our commitment to sustainability means we carefully select materials that are not only beautiful but also responsibly sourced. Every stitch, every seam, and every finish is executed with precision and care.
              </p>
            </div>
            
            
          </div>
        </div>

        {/* Bottom feature section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-12 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="text-center group relative p-5"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-lg">{item.description}</p>
              
              {/* Hover effect line */}
              {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-12 transition-all duration-300"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;