import React from "react";
const TeamSection = () => {
    return (
      <div className="rounded mt-10 bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 text-center shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Meet Our Leaders<br />
          <span className="block mt-4 text-2xl md:text-5xl font-serif bg-clip-text text-transparent">
            Innovating. Excelling. Growing.
          </span>
        </h1>
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          {[{ name: "Rahul Rai", role: "CEO" }, { name: "Manish Sharma", role: "CMO" }, { name: "Shivam Pal", role: "Head of Operations" }].map((leader, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 w-72 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src="https://via.placeholder.com/150"
                alt={leader.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-pink-500 shadow-lg"
              />
              <h4 className="font-bold text-xl text-gray-900 mt-4">{leader.name}</h4>
              <p className="text-pink-500 font-medium">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default  TeamSection