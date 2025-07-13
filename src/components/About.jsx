import React from "react";

const About = () => {
  const data = [
    { id: 0, title: "Quality Materials" },
    { id: 1, title: "Best Design" },
    { id: 2, title: "Finest Leather" },
    { id: 3, title: "Long Stitchline" },
    { id: 4, title: "Premium Finish" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#f6defa] to-[#f3e8f3] min-h-[700px] pt-40 px-6">
      {/* Top section with title and description */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold text-gray-800 font-heading">
            A Quality Hand Bag Baggo Providers
          </h1>
        </div>
        <div className="md:w-1/2 text-gray-600 text-2xl leading-relaxed font-body">
          Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. At
          auctor urna nunc id cursus metus. Purus sit amet luctus venenatis
          lectus magna. Rhoncus aenean vel elit scelerisque mauris. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      {/* Bottom feature section */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6 border-t border-gray-300 pt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-1 min-w-[150px] text-center relative after:content-[''] after:absolute after:h-10 after:border-r after:border-gray-300 after:right-0 after:top-1/2 after:-translate-y-1/2 last:after:hidden"
          >
            <p className="text-xl font-medium text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
