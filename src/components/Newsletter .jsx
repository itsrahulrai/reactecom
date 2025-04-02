import React from "react";
import { Input, Button } from "antd";
import { FaPaperPlane, FaEnvelopeOpenText  } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#FF3F57] to-[#D92048] py-12 px-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
            {/* Left Side: Icon & Text */}
            <div className="flex items-center space-x-4 text-white">
                <FaPaperPlane className="text-5xl opacity-80 animate-bounce" />
                <div>
                    <h2 className="text-3xl font-extrabold tracking-wide">Stay Updated with Our Deals!</h2>
                    <p className="text-md opacity-90">Subscribe now and never miss out on exclusive offers & latest trends.</p>
                </div>
            </div>

            {/* Right Side: Input & Button */}
            <div className="flex w-full md:w-auto items-center rounded-lg bg-white shadow-lg overflow-hidden">
                <Input
                    placeholder="Enter your email..."
                    className="w-full h-[55px] px-6 text-lg text-gray-700 bg-white border-none outline-none focus:ring-0 focus:border-none transition-all duration-300"
                />
                <button className="h-[55px] flex items-center gap-2  bg-white text-[#EF2853] font-semibold px-6 rounded-lg shadow-md hover:bg-[#FEF4F6] transition">
                    Subscribe <FaEnvelopeOpenText />
                </button>
            </div>



        </div>
    );
};

export default Newsletter;
