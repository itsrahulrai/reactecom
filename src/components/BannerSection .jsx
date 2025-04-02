import React from "react";
import  "../assets/Banner.css";
const BannerSection = () => {
  const banners = [
    {
      title: "Music",
      subtitle: "Headphone",
      offer: "View Collection",
      image: "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.fa5c86b4.png&w=384&q=75", // Replace with your image URL
      bgColor: "bg-red-100",
      textColor: "text-red-500",
    },
    {
      title: "Camera",
      subtitle: "Up to 35% OFF",
      offer: "Shop Now",
      image: "https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img8.jpg", // Replace with your image URL
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      title: "Watch",
      subtitle: "Sale Offer 20% OFF This Week",
      offer: "View Collection",
      image: "https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img9.jpg", // Replace with your image URL
      bgColor: "bg-red-100",
      textColor: "text-orange-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {banners.map((banner, index) => (
        <div key={index} className={`p-6 ${banner.bgColor} rounded-lg flex items-center`}>
          <div>
            <p className="text-gray-600 text-sm">{banner.subtitle}</p>
            <h3 className="text-2xl font-bold text-black">{banner.title}</h3>
            <a href="#" className={`mt-2 block font-semibold ${banner.textColor}`}>
              {banner.offer}
            </a>
          </div>
          <img src={banner.image} alt={banner.title} className="h-24 ml-auto" />
        </div>
      ))}
    </div>
  );
};

export default BannerSection;
