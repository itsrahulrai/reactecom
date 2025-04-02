import React from "react";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaPinterest, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Side: Logo & About */}
        <div>
          <img 
            src="https://glamics.temptics.com/assets/img/logo.svg" 
            alt="Glamics Logo" 
            className="h-14 mb-5"
          />
          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            Discover the latest trends and enjoy seamless shopping with our exclusive collections.
          </p>
          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#EF2853]" /> Glamics Store, India 345-659
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#EF2853]" /> Call Us: 123-456-7898
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#EF2853]" /> Support@Glamics.Com
            </p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">CATEGORIES</h3>
          <ul className="space-y-3 text-gray-400 text-sm font-medium">
            {["Baby Essentials", "Bag Emporium", "Books", "Christmas", "Classic Furnishings", "Crystal Clarity Optics"]
              .map((item, index) => (
                <li key={index} className="hover:text-[#EF2853] transition cursor-pointer">
                  {item}
                </li>
              ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">USEFUL LINKS</h3>
          <ul className="space-y-3 text-gray-400 text-sm font-medium">
            {["Home", "Collections", "About Us", "Blogs", "Offers", "Search"]
              .map((item, index) => (
                <li key={index} className="hover:text-[#EF2853] transition cursor-pointer">
                  {item}
                </li>
              ))}
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">HELP CENTER</h3>
          <ul className="space-y-3 text-gray-400 text-sm font-medium">
            {["My Account", "My Orders", "Wishlist", "FAQs", "Contact Us"]
              .map((item, index) => (
                <li key={index} className="hover:text-[#EF2853] transition cursor-pointer">
                  {item}
                </li>
              ))}
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>2025-26 © All Rights Reserved.</p>
        
        {/* Social Media */}
        <div className="flex space-x-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaPinterest].map((Icon, index) => (
            <a 
              key={index} 
              href="#" 
              className="bg-gray-800 p-3 rounded-full hover:bg-[#EF2853] transition duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
