import React, { useState } from "react";
import { Modal, Button, Select, InputNumber, Rate, Tooltip } from "antd";
import { FaHeart, FaShoppingBag, FaEye, FaTruck, FaShieldAlt, FaShareAlt } from "react-icons/fa";

const { Option } = Select;

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Ensure product properties are defined
  const images = product.images && product.images.length > 0 ? product.images : [
    "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png",  // Dummy Image
    "https://pixio-react.vercel.app/assets/6-CodJOEYz.png",
    "https://pixio-react.vercel.app/assets/4-Carn452S.png"
  ];
  const colors = product.colors || [];
  const sizes = product.sizes || [];
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Product Card */}
      <div className="relative w-72 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden border border-gray-200">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <div className="relative w-full h-65 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Actions */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-3">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all hover:scale-110">
              <FaHeart className="text-gray-600 hover:text-red-500" />
            </button>
            <button
              onClick={handleModalToggle}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all hover:scale-110"
            >
              <FaEye className="text-gray-600 hover:text-blue-500" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all hover:scale-110">
              <FaShoppingBag className="text-gray-600 hover:text-green-500" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-5 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.description}</p>

          {/* Price & Rating */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-gray-900"> ₹ {product.price}</span>
            <div className="flex items-center text-yellow-500 text-sm">
              ★ <span className="ml-1 font-medium">{product.rating} ({product.reviews})</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full mt-5 py-2 text-sm font-semibold text-white bg-[#D92048] rounded-lg hover:bg-[#b81b3b] transition-all shadow-md hover:shadow-lg">
            <FaShoppingBag className="inline mr-2" /> Add to Cart
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleModalToggle}
        footer={null}
        width={900}
        className="rounded-lg overflow-hidden"
      >
        <div className="grid grid-cols-2 gap-6 p-4">
          {/* Left - Product Images */}
          <div className="flex flex-col gap-4">
            {/* Main Product Image */}
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Product"
                className="w-full h-125 object-cover rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.length > 0 ? (
                images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img ? "border-red-500" : "border-gray-200"
                      }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))
              ) : (
                <span className="text-gray-500">No Thumbnails</span>
              )}
            </div>
          </div>
          {/* Right - Product Details */}
          <div className="flex flex-col justify-between h-full">
            {/* Product Title & Category */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{product.name || "No Product Name"}</h2>
              <p className="text-gray-500 uppercase text-sm tracking-wide mt-1">
                {product.category || "Fashion & Apparel"}
              </p>
              {/* Product Description */}
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {product.description || "This is a stylish and comfortable product designed with premium materials to ensure durability and elegance."}
              </p>



              {/* Rating & Reviews */}
              <div className="flex items-center mt-3">
                <Rate disabled defaultValue={product.rating || 0} />
                <span className="ml-2 text-gray-600 text-sm">({product.reviews || 0} reviews)</span>
              </div>

              {/* Price & Discount */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-3xl font-bold text-red-600">₹{product.price || "999.00"}</span>
                <span className="text-gray-400 line-through text-lg">₹{product.oldPrice || "1,299.00"}</span>
                <span className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded-md">
                  {product.discount || "20"}% OFF
                </span>
              </div>


            </div>

            {/* Color Selection */}
            <div className="mt-4">
              <h4 className="text-gray-700 font-medium mb-2">Colors:</h4>
              <div className="flex gap-2">
                {product.colors && product.colors.length > 0
                  ? product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${selectedColor === color ? "border-red-500 scale-110" : "border-gray-300"
                        }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))
                  : ["#D77700", "#CC0012", "#DD858F"].map((color, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${selectedColor === color ? "border-red-500 scale-110" : "border-gray-300"
                        }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))}
              </div>
            </div>


            {/* Size Selection */}
            <div className="mt-4">
              <h4 className="text-gray-700 font-medium mb-2">Size:</h4>
              <div className="flex gap-3">
                {product.sizes && product.sizes.length > 0
                  ? product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${selectedSize === size ? "bg-red-500 text-white" : "border-gray-300 text-gray-700 hover:border-red-500"
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))
                  : ["S", "M", "L", "XL"].map((size, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${selectedSize === size ? "bg-red-500 text-white" : "border-gray-300 text-gray-700 hover:border-red-500"
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
              </div>
            </div>


            {/* Quantity Selection with Plus/Minus Buttons */}
            <div className="mt-4 flex items-center">
              <span className="mr-3 text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition-all rounded-l-md"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-x border-gray-300"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition-all rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* Delivery & Security */}
            <div className="mt-4 text-gray-600 text-sm space-y-2">
              <div className="flex items-center">
                <FaTruck className="text-lg text-gray-500 mr-2" />
                <span>Free delivery by <b className="text-gray-900">April 10-15</b></span>
              </div>
              <div className="flex items-center">
                <FaShieldAlt className="text-lg text-gray-500 mr-2" />
                <span>100% Secure Payment</span>
              </div>
              <div className="flex items-center">
                <FaShareAlt className="text-lg text-gray-500 mr-2" />
                <span>Share this product</span>
              </div>
            </div>

            {/* Add to Cart & Wishlist Buttons */}
            <div className="mt-6 flex gap-3">
              <Button
                type="primary"
                danger
                size="large"
                className="w-full flex justify-center items-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <FaShoppingBag /> Add to Cart
              </Button>
              <Tooltip title="Add to Wishlist">
                <Button
                  type="default"
                  size="large"
                  className="flex justify-center items-center gap-2 border-gray-300 shadow-md hover:shadow-lg transition-all"
                >
                  <FaHeart className="text-red-500" /> Wishlist
                </Button>
              </Tooltip>
            </div>
          </div>

        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
