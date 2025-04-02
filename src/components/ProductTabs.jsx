import { Tabs, Card } from "antd";
import { FaBoxOpen, FaTruck, FaStar } from "react-icons/fa";
import ProductReviews from "../components/ProductReviews";

const { TabPane } = Tabs;

const ProductTabs = () => {
  return (
    <Tabs defaultActiveKey="1" tabBarGutter={50} className="text-gray-900 font-semibold text-left">
      
      {/* Product Details */}
      <TabPane tab={<span><FaBoxOpen className="inline w-5 h-5 mr-2" /> Product Details</span>} key="1">
        <Card className="shadow-sm border-0 p-6 rounded-lg bg-gray-50">
          <p className="text-gray-700 text-sm leading-relaxed">
            This premium product is designed with the latest materials to provide <strong>comfort & durability</strong>. Perfect for all seasons.
          </p>
        </Card>
      </TabPane>

      {/* Reviews with user profile images & review form */}
      <TabPane tab={<span><FaStar className="inline w-5 h-5 mr-2 text-yellow-500" /> Reviews</span>} key="2">
        <ProductReviews />
      </TabPane>

      {/* Shipping & Returns */}
      <TabPane tab={<span><FaTruck className="inline w-5 h-5 mr-2" /> Shipping & Returns</span>} key="3">
        <Card className="shadow-sm border-0 p-6 rounded-lg bg-gray-50">
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
            <li><strong>Free Shipping</strong> on orders above ₹1000.</li>
            <li><strong>Easy Returns</strong> within 30 days of purchase.</li>
            <li><strong>Fast Nationwide Delivery</strong> available.</li>
          </ul>
        </Card>
      </TabPane>
    </Tabs>
  );
};

export default ProductTabs;
