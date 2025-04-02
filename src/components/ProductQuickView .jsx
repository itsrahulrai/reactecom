import React, { useState } from "react";
import { Modal, Button, Rate, Tooltip } from "antd";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0] || "");

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={900}
      className="rounded-lg overflow-hidden slide-in-right"
      style={{ top: 50 }}
    >
      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Left - Product Images */}
        <div className="flex flex-col gap-4">
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <div className="flex gap-2">
            {product.images.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage === img ? "border-red-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
          <p className="text-gray-500 uppercase text-xs">{product.category}</p>
          <div className="flex items-center mt-2">
            <Rate disabled defaultValue={product.rating} />
            <span className="ml-2 text-gray-500 text-sm">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold text-red-600">₹{product.price}</span>
            {product.discount && (
              <span className="ml-2 text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="ml-2 text-green-600 text-sm">-{product.discount}%</span>
            )}
          </div>

          {/* Colors */}
          <div className="mt-4">
            <span className="text-gray-700 font-medium">Colors:</span>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-4">
            <span className="text-gray-700 font-medium">Size:</span>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-1 border rounded-lg hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart & Wishlist */}
          <div className="mt-6 flex gap-3">
            <Button type="primary" danger size="large" className="w-full flex justify-center items-center gap-2">
              <FaShoppingBag /> Add to Cart
            </Button>
            <Tooltip title="Add to Wishlist">
              <Button type="default" size="large" className="flex justify-center items-center gap-2">
                <FaHeart /> Wishlist
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
