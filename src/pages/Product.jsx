import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/SidebarFilters";
import Pagination from "../components/Pagination";
import { FiShoppingBag } from "react-icons/fi";
import { RiFireFill } from "react-icons/ri";

const products = [
  { id: 1, slug: "key-nylon-backpack", name: "Key Nylon Backpack", price: 40, image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png", rating: 4.5, reviews: 120 },
  { id: 2, slug: "round-backpack", name: "Round Backpack", price: 55, image: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png", rating: 4.2, reviews: 98 },
  { id: 3, slug: "wool-beanie", name: "Wool Beanie", price: 20, image: "https://pixio-react.vercel.app/assets/4-Carn452S.png", rating: 4.7, reviews: 150 },
  { id: 4, slug: "textured-flap-clutch", name: "Textured Flap Clutch", price: 30, image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png", rating: 4.3, reviews: 75 },
  { id: 5, slug: "leather-sweater", name: "Leather Sweater", price: 60, image: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png", rating: 4.6, reviews: 130 },
];

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const navigate = useNavigate(); // Hook for navigation

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  // Navigate to product details
  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <div className="bg-white">
      <header className="mt-20 bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 text-center shadow-md">
        <div className="flex items-center justify-center gap-4">
          <FiShoppingBag size={40} className="text-white animate-bounce" />
          <h1 className="text-4xl font-bold tracking-wide font-playfair">
            Shop Smart, Look Stunning!
          </h1>
        </div>
        <p className="text-lg mt-2 opacity-90 flex items-center justify-center gap-2 font-poppins">
          Unbeatable deals, just for you!
          <RiFireFill size={28} className="text-yellow-300 animate-pulse" />
        </p>
      </header>

      <div className="p-8 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <Sidebar />

          <div className="flex-1">
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} onClick={() => handleProductClick(product.slug)} className="cursor-pointer">
                  <ProductCard product={product} />
                </div>
              ))}
            </main>

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(products.length / pageSize)}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
