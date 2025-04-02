import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing Arrow Icon

const categories = [
  { id: 1, name: "Fashion", image: "https://glamics.temptics.com/assets/img/category-1.jpg" },
  { id: 2, name: "Kids", image: "https://glamics.temptics.com/assets/img/category-2.jpg" },
  { id: 3, name: "Pants", image: "https://glamics.temptics.com/assets/img/category-3.jpg" },
  { id: 4, name: "Women", image: "https://glamics.temptics.com/assets/img/category-4.jpg" },
  { id: 5, name: "Jeans", image: "https://glamics.temptics.com/assets/img/category-5.jpg" },
  { id: 6, name: "Sweater", image: "https://glamics.temptics.com/assets/img/category-6.jpg" },
  { id: 7, name: "Shoe", image: "https://glamics.temptics.com/assets/img/category-7.jpg" },
  { id: 8, name: "Man", image: "https://glamics.temptics.com/assets/img/category-1.jpg" },
];

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-6">
       
      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between transition-all cursor-pointer border border-gray-200
                       hover:bg-gradient-to-r hover:from-[#EF2853] hover:via-[#F98EA3] hover:to-[#FFB6C1] hover:text-white hover:shadow-xl"
          >
            {/* Rounded Image on Left */}
            <div className="w-16 h-16">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-full border border-gray-300"
              />
            </div>

            {/* Category Name in Center */}
            <h3 className="text-lg font-semibold text-gray-800 flex-1 text-center group-hover:text-white">
              {category.name}
            </h3>

            {/* Arrow Icon on Right with Background */}
            <div className="bg-[#EF2853] text-white p-2 rounded-full group-hover:bg-white group-hover:text-[#EF2853]">
              <FaArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
