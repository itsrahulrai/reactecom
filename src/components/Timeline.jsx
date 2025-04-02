import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const timelineData = [
  { year: "2007", description: "Started as an online portal for personalized gifts, offering customers the ability to create unique, custom-made items for their loved ones. This marked the beginning of a journey that would soon evolve into something much bigger.", imageUrl: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png" },
  { year: "2011", description: "Forayed into fashion, expanding beyond gifts to offer trendy and stylish clothing options. The introduction of a wide range of apparel categories laid the foundation for a robust online fashion marketplace.", imageUrl: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png" },
  { year: "2012", description: "Launched the first in-house brand, Roadster Life Co., catering to young and dynamic consumers looking for fashionable yet affordable clothing. This step strengthened our brand identity and set us apart in the industry.", imageUrl: "https://pixio-react.vercel.app/assets/4-Carn452S.png" },
  { year: "2015", description: "Made an industry-first move to go app-only, transforming the shopping experience with seamless navigation, exclusive app features, and personalized recommendations. This strategic decision capitalized on the growing mobile user base.", imageUrl: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png" },
  { year: "2016", description: "Introduced the industry-first Try & Buy feature, allowing customers to try their selected items before making a purchase. This innovative approach significantly enhanced customer trust and satisfaction.", imageUrl: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png" },
  { year: "2017", description: "Opened the first Roadster retail store, bridging the gap between online and offline shopping experiences. This move provided customers with the opportunity to experience the quality of our products firsthand.", imageUrl: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png" },
  { year: "2018", description: "Pioneered AI-led technology to design fashion products at scale, leveraging data-driven insights to predict trends and optimize designs. This technological advancement propelled efficiency and innovation in the fashion industry.", imageUrl: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png" },
  { year: "2019", description: "Became the first in the industry to introduce alteration services, ensuring that customers received perfectly tailored clothing. This customer-centric service reinforced our commitment to delivering exceptional shopping experiences.", imageUrl: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png" },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = timelineData[activeIndex];

  const handlePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setActiveIndex((prev) => Math.min(prev + 1, timelineData.length - 1));

  return (
    <div className="text-dark py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center w-full">
       <h1 className="text-6xl font-extrabold leading-tight text-center mb-10">Explore Our <span className="text-pink-500">Incredible Journey</span></h1>
      
      <div className="relative w-full flex flex-col items-center">
        <div className="relative flex items-center justify-center py-8 w-full">
          <button
            onClick={handlePrev}
            className={`w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-300 shadow-lg ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={activeIndex === 0}
          >
            <FaChevronLeft size={24} className="text-white" />
          </button>
          
          <div className="text-center px-6 flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-3">{activeData.year}</h2>
            <p className="text-lg text-dark-300 max-w-xl mx-auto text-justify">{activeData.description}</p>
            <div className="mt-4 flex justify-center w-full">
              <img src={activeData.imageUrl} alt={activeData.year} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          <button
            onClick={handleNext}
            className={`w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-300 shadow-lg ${activeIndex === timelineData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={activeIndex === timelineData.length - 1}
          >
            <FaChevronRight size={24} className="text-white" />
          </button>
        </div>

        <div className="relative w-full h-1 bg-gray-700 mt-6">
          <div
            className="absolute h-1 bg-pink-500 transition-all duration-500"
            style={{ width: `${(activeIndex / (timelineData.length - 1)) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between mt-4 text-dark-400 text-sm w-full">
          {timelineData.map((item, index) => (
            <button
              key={index}
              className={`relative flex flex-col items-center ${index === activeIndex ? 'text-white' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${index === activeIndex ? 'border-pink-500 bg-pink-500 scale-125' : 'border-gray-500 bg-gray-700'}`}></div>
              <span className="mt-2">{item.year}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;3