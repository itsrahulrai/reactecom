import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rate, Button, Collapse, Row, Col, Card, Typography, Image, } from "antd";
import { PlusOutlined, MinusOutlined, ShoppingCartOutlined, CreditCardOutlined, TruckOutlined, ReloadOutlined, GlobalOutlined, DollarCircleOutlined } from "@ant-design/icons";

import ProductTabs from "../components/ProductTabs";

const { Title, Text } = Typography;





const colorNames = {
  "#FF5733": "Orange",
  "#3498DB": "Blue",
  "#2ECC71": "Green",
  "#9B59B6": "Purple",
  "#E74C3C": "Red",
  "#F1C40F": "Yellow",
};



const products = [
  {
    id: 1,
    name: "Heavy Weight Shoes",
    price: 120,
    image: "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png",
    rating: 4.5,
    reviews: 220,
    sizes: [6, 7, 8, 9, 10, 11],
    shortDescription: "Crafted for athletes and casual wearers alike, these heavy-weight shoes provide exceptional durability, shock absorption, and superior traction. Designed with breathable materials and a cushioned sole, they ensure all-day comfort whether you're hitting the gym, going for a run, or styling up your casual outfits.",
    colors: Object.keys(colorNames),
  },
  {
    id: 2,
    name: "Round Backpack",
    price: 55,
    image: "https://pixio-react.vercel.app/assets/6-CodJOEYz.png",
    rating: 4.2,
    reviews: 98,
    sizes: [6, 7, 8, 9, 10, 11],
    shortDescription: "Designed for both style and practicality, this round backpack is lightweight yet spacious, making it perfect for work, school, or travel. Made from high-quality water-resistant fabric.",
    colors: Object.keys(colorNames),
  }
];



const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug);

  useEffect(() => {
    console.log("Slug from URL:", slug);
    console.log("Matched Product:", product);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Title level={3} type="danger">Product Not Found</Title>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (

    <div className="container mx-auto px-6 py-12 mt-20">
      <Row gutter={[40, 40]} justify="center">
        {/* Left Section - Product Images */}
        <Col xs={24} md={10}>
          <Card className="rounded-lg shadow-lg border-0  bg-white/80 backdrop-blur-md">
            <Image.PreviewGroup>
              <Image
                src={product.image}
                width="100%"
                className="rounded-lg h-20 object-cover transition-transform transform hover:scale-105 duration-300"
              />

              <Row gutter={8} className="mt-3">
                {[product.image, product.image, product.image].map((img, idx) => (
                  <Col key={idx} span={8}>
                    <Image src={img} width="100%" className="rounded-lg" />
                  </Col>
                ))}
              </Row>
            </Image.PreviewGroup>
          </Card>
        </Col>

        {/* Right Section - Product Info */}
        <Col xs={24} md={14}>
          <Card className="p-6 rounded-lg">
            <Title level={2} className="font-semibold text-gray-900">{product.name}</Title>

            {/* Short Description */}
            <Text className="text-gray-600 text-base">{product.shortDescription}</Text>
            {/* Price & Rating */}
            {/* Price & Discount Section */}
            <div className="flex flex-col gap-1 mb-3 mt-2">
              {/* Selling Price & MRP */}
              <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <span>₹ 1749</span>
                <span className="text-gray-500 text-base line-through">MRP ₹ 5999</span>
                <span className="text-red-600 text-sm font-semibold">(Rs. 4250 OFF)</span>
              </div>

              {/* Inclusive of all taxes */}
              <span className="text-green-600 text-sm font-medium">( inclusive of all taxes )</span>
            </div>




            {/* Color Selection */}
            <div className="mt-4">
              <Text strong className="text-gray-700">
                Color: <span className="text-gray-900">{colorNames[selectedColor] || "Select Color"}</span>
              </Text>
              <div className="flex gap-2 mt-3 flex-wrap">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 border-2 rounded-full cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-105 ${selectedColor === color ? "border-blue-500 scale-110 shadow-md" : "border-gray-300"
                      }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>



            {/* Size Selection */}
            <div className="mt-4 flex items-center justify-between">
              <Text strong className="text-gray-700">
                Size: <span className="text-gray-900">{selectedSize || "Select"}</span>
              </Text>
              <p href="#" className="text-red-600 text-sm uppercase font-semibold">
                Size Chart
              </p>
            </div>


            <div className="mt-2 flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  type={selectedSize === size ? "primary" : "default"}
                  className={`rounded-lg px-4 py-2 text-sm font-medium ${selectedSize === size ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>

            {/* Quantity and Add to Cart Section */}
            <div className="mt-5 mb-5 flex flex-wrap items-center gap-4 justify-center md:justify-start">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100 rounded px-3 py-2 w-2/5 sm:w-1/3 md:w-1/5 justify-between shadow-md">
                <Button
                  icon={<MinusOutlined />}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border-none bg-transparent text-gray-600 hover:text-blue-500"
                />
                <Text className="text-lg font-semibold">{quantity}</Text>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-none bg-transparent text-gray-600 hover:text-blue-500"
                />
              </div>


              {/* Add to Cart Button */}
              <button
                className="w-full md:w-1/3 py-3 text-lg font-semibold text-white bg-[#D92048] rounded-xl hover:bg-[#b81b3b] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingCartOutlined className="text-xl" /> Add to Cart
              </button>

              {/* Buy Now Button */}
              <button
                className="w-full md:w-1/3 py-3 text-lg font-semibold text-white bg-[#FF9800] rounded-xl hover:bg-[#e68900] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <CreditCardOutlined className="text-xl" /> Buy Now
              </button>
            </div>


            {/* Product Details Accordion */}
            <Collapse
              className="mt-30 bg-[#F4F7FA] rounded-lg shadow-md gap-4"
              bordered={false}
              expandIcon={({ isActive }) =>
                isActive ? <MinusOutlined className="text-gray-500 text-base" /> : <PlusOutlined className="text-gray-500 text-base" />
              }
              expandIconPosition="end"
            >
              {[
                { title: "Description", content: "This is a high-quality product made with premium materials." },
                { title: "Fabric + Care", content: "Made with 100% cotton. Machine washable." },
                { title: "How it Fits", content: "True to size. Check the size chart for more details." },
                { title: "FAQ", content: "Common questions and answers about this product." },
              ].map(({ title, content }, idx) => (
                <Collapse.Panel
                  key={idx}
                  header={<Text strong>{title}</Text>}
                  className=" border-b border-gray-300 mb-2"
                >
                  <p className="text-gray-600 text-sm">{content}</p>
                </Collapse.Panel>
              ))}
            </Collapse>




            {/* Extra Information */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[{
                icon: <TruckOutlined className="text-2xl text-blue-600" />,
                title: "Free Shipping",
                desc: "On orders over ₹100.00",
                bg: "#DBEAFE"
              }, {
                icon: <ReloadOutlined className="text-2xl text-pink-600" />,
                title: "Easy Returns",
                desc: "Just phone number required.",
                bg: "#FBCFE8"
              }, {
                icon: <GlobalOutlined className="text-2xl text-yellow-600" />,
                title: "Nationwide Delivery",
                desc: "Fast shipping across the US.",
                bg: "#FEF08A"
              }, {
                icon: <DollarCircleOutlined className="text-2xl text-green-600" />,
                title: "Refund Policy",
                desc: "60-day return policy.",
                bg: "#BBF7D0"
              }].map(({ icon, title, desc, bg }, idx) => (
                <Card key={idx} className="p-4 rounded-lg flex items-center gap-3 shadow-md" style={{ backgroundColor: bg }}>
                  {icon}
                  <div>
                    <Text strong>{title}</Text>
                    <p className="text-sm">{desc}</p>
                  </div>
                </Card>
              ))}
            </div>




          </Card>
        </Col>


      </Row>

    <ProductTabs></ProductTabs>



    </div>
  );
};

export default ProductDetails;
