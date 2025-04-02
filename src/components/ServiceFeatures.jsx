import React from "react";
import { FaShippingFast, FaHeadset, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-[#E62C4D] font-[Playfair Display] text-4xl" />,
      title: "Fast & Free Shipping",
      description: "Worldwide delivery on all orders over $50",
    },
    {
      icon: <FaHeadset className="text-[#E62C4D] font-[Playfair Display] text-4xl" />,
      title: "24/7 Customer Support",
      description: "Dedicated support for all your queries",
    },
    {
      icon: <FaExchangeAlt className="text-[#E62C4D] font-[Playfair Display] text-4xl" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days",
    },
    {
      icon: <FaShieldAlt className="text-[#E62C4D] font-[Playfair Display] text-4xl" />,
      title: "Secure Payments",
      description: "100% secure transactions and data protection",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 text-center items-center  border-gray-300 py-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center space-y-3 px-6 ${
              index !== features.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            {feature.icon}
            <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
