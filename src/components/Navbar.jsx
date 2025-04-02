import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Input } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
  LockOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-['Inter']">
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Left Side: Logo & Menu */}
          <div className="flex items-center flex-1">
            <Link to="/">
              <img
                src="https://glamics.temptics.com/assets/img/logo.svg"
                alt="Logo"
                className="h-12 w-36 object-contain"
              />
            </Link>
            <div className="hidden md:flex space-x-8 text-[16px] font-semibold ml-30">
              <Link to="/" className="hover:text-[#ef2853]">Home</Link>
              <Link to="/about" className="hover:text-[#ef2853]">About</Link>
              <Link to="/product" className="hover:text-[#ef2853]">Products</Link>
              <Link to="" className="hover:text-[#ef2853]">Blog</Link>
              <Link to="" className="hover:text-[#ef2853]">Contact</Link>
            </div>
          </div>

          {/* Right Section: Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-5 md:flex">
            <Link to="/wishlist" className="relative hover:text-[#D77B6D] md:block hidden">
              <HeartOutlined className="text-[22px]" />
            </Link>
            <Link to="/cart" className="relative md:block hidden">
              <ShoppingCartOutlined className="text-[22px] hover:text-[#D77B6D]" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1 rounded-full">2</span>
            </Link>
            <button onClick={() => setIsModalOpen(true)} className="text-[22px] hover:text-[#D77B6D] md:block hidden">
              <UserOutlined />
            </button>
            {/* Mobile Login Button */}
            <button onClick={() => setIsModalOpen(true)} className="md:hidden bg-[#EF2853] text-white py-2 px-4 rounded-lg">
              <UserOutlined />
            </button>
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[22px] hover:text-[#D77B6D]">
              {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full flex flex-col items-center py-4 space-y-4">
            <Link to="/" className="hover:text-[#ef2853]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-[#ef2853]" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/product" className="hover:text-[#ef2853]" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/categories" className="hover:text-[#ef2853]" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/blog" className="hover:text-[#ef2853]" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="hover:text-[#ef2853]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <Modal
        title={<h2 className="text-2xl font-bold text-gray-900 text-center">Sign In</h2>}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <p className="text-gray-600 text-center">Welcome back! Sign in to continue your shopping experience.</p>
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-800">Email</label>
          <Input prefix={<UserOutlined className="text-gray-500 text-lg" />} placeholder="Enter your email" className="mt-2" />
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-800">Password</label>
          <Input.Password prefix={<LockOutlined className="text-gray-500 text-lg" />} placeholder="Enter your password" className="mt-2" />
        </div>
        <div className="text-right mt-2">
          <Link to="/forgot-password" className="text-sm text-gray-800">Forgot Your Password?</Link>
        </div>
        <button className="w-full mt-5 bg-[#EF2853] text-white py-3 rounded-lg">LOG IN</button>
        <p className="text-center mt-4">Don't have an account? <Link to="/register" className="text-gray-900 font-semibold">Register Here</Link></p>
      </Modal>
    </header>
  );
};

export default Navbar;