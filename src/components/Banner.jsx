import React from "react";
import { Button, Image } from "antd";
import { FaArrowRight } from "react-icons/fa";
import  "../assets/Banner.css";

const Banner = () => {
    return (
        <div className="w-full  flex items-center justify-between bg-[#FEF4F6] px-10">
            {/* Left Side: Text Content */}
            <div className="max-w-lg space-y-4">
                <p className="text-[#EF2853] font-semibold uppercase tracking-wider text-sm">
                    🌟 Exclusive New Arrivals
                </p>
                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                    Elevate Your Summer Style
                </h1>
                <p className="text-lg text-gray-700">
                    Experience the perfect blend of comfort and fashion with our latest summer collection.
                    Enjoy up to <span className="text-[#EF2853] font-bold">50% OFF</span> for a limited time!
                </p>
                <button className="mt-5 flex items-center gap-2 bg-[#EF2853] text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-[#d92048] transition duration-300">
                    Shop Now <FaArrowRight />
                </button>

            </div>


            {/* Right Side: Image */}
            <div className="h-full flex items-center justify-end overflow-hidden hover_effect1">
                <div className="transition-transform duration-300 transform hover:scale-110">
                    <Image
                        src="https://bestwebcreator.com/shopwise/demo/assets//images/tranding_img.png"
                        alt="Banner"
                        preview={false}
                        className="h-full w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
