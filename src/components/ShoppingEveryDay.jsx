import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard"; 
import  "../assets/Banner.css";

const ShoppingEveryDay = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      price: "39.99",
      rating: "4.6",
      reviews: 140,
      image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: "49.99",
      rating: "4.6",
      reviews: 140,
      image: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png",
    },
    {
      id: 3,
      name: "Casual Sneakers",
      price: "59.99",
      rating: "4.6",
      reviews: 140,
      image: "https://pixio-react.vercel.app/assets/4-Carn452S.png",
    },
    {
      id: 4,
      name: "Trendy Handbag",
      price: "45.99",
      rating: "4.6",
      reviews: 140,
      image: "https://pixio-react.vercel.app/assets/4-Carn452S.png",
    },
    {
      id: 5,
      name: "Stylish Sunglasses",
      price: "19.99",
      rating: "4.6",
      reviews: 140,
      image: "https://pixio-react.vercel.app/assets/4-Carn452S.png",
    },
    {
      id: 6,
      name: "Chic Watch",
      price: "79.99",
      rating: "4.6",
      reviews: 140,
      image: "https://pixio-react.vercel.app/assets/4-Carn452S.png",
    },
  ];
  

  return (
    <div className="w-full mx-auto py-12">
      {/* Main Card */}
      <div className="bg-[#FEF4F6]  p-10 shadow-lg mb-10">
        <p className="font-medium text-[#EF2853] uppercase tracking-widest">
          Summer Collection
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 font-[Playfair Display] leading-tight">
          Elevate Your Everyday Look
        </h2>

        {/* Layout for Banners & Products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mt-8">
          {/* Left Side - Banners */}
          <div className="flex flex-col gap-28 md:col-span-1">
            {[
              { title: "Unmissable Offers", description: "Discover unbeatable deals – up to 50% off!" },
              { title: "Step Into New Trends", description: "Shop the freshest styles, just in!" },
            ].map((banner, index) => (
              <div
                key={index}
                className="hover_effect1 relative rounded-2xl overflow-hidden shadow-lg min-h-[400px] flex items-end p-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(250, 140, 164, 0.2), rgba(248, 105, 136, 0.7)), url('https://glamics.temptics.com/assets/img/products-sub-banner-1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-extrabold text-white font-serif">
                    {banner.title}
                  </h3>
                  <p className="mt-3 text-white text-lg font-[Inter]">
                    {banner.description}
                  </p>
                  <button className="mt-5 flex items-center gap-2 bg-white text-[#EF2853] font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
                    Shop Now <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:col-span-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingEveryDay;
