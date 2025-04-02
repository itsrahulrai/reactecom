import React, { useState } from "react";
import ProductCard from "./ProductCard"; // Import ProductCard Component

const TopSelling = () => {
    const allProducts = [
        { 
            id: 1, 
            name: "Elegant Summer Dress", 
            price: "39.99", 
            category: "best",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
        { 
            id: 2, 
            name: "Classic Denim Jacket", 
            price: "49.99", 
            category: "sale",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
        { 
            id: 3, 
            name: "Casual Sneakers", 
            price: "59.99", 
            category: "best",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
        { 
            id: 4, 
            name: "Trendy Handbag", 
            price: "45.99", 
            category: "sale",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
        { 
            id: 5, 
            name: "Stylish Sunglasses", 
            price: "19.99", 
            category: "all",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
        { 
            id: 6, 
            name: "Chic Watch", 
            price: "79.99", 
            category: "best",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
        { 
            id: 7, 
            name: "Sporty Running Shoes", 
            price: "69.99", 
            category: "sale",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
        { 
            id: 8, 
            name: "Casual T-shirt", 
            price: "29.99", 
            category: "best",
            rating: "4.6",
            reviews: 140,
            image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png"
        },
    ];
    
    
  

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all" ? allProducts : allProducts.filter((p) => p.category === filter);

  return (
    <div className="w-full mx-auto py-12">
      {/* Main Card */}
      <div className="bg-[#FEF4F6] p-10 shadow-lg mb-10 relative">
        {/* Heading & Filters */}
        <div className="flex justify-between items-center">
          <div>
          <p className="font-medium text-[#EF2853] uppercase tracking-widest">
            Hottest Picks of the Season
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 font-[Playfair Display] leading-tight">
            Bestsellers You’ll Love
            </h2>

          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3">
            {["all", "sale", "best"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                  filter === category
                    ? "bg-[#D92048] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category === "all" ? "All Products" : category === "sale" ? "On Sale" : "Best Selling"}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - 4 Products per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
