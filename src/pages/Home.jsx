import Slider from "../components/Slider";
import Category from "../components/Category"
import ShoppingEveryDay from "../components/ShoppingEveryDay";
import TopSelling from "../components/Topselling";
import Testimonials from "../components/Testimonials"
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter ";
import Footer from "../components/Footer";
import ServiceFeatures from "../components/ServiceFeatures";
import BannerSection from "../components/BannerSection ";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "https://glamics.temptics.com/assets/img/banner-slide-1.jpg",
      title: "Elevate Your Style",
      description: "Explore the latest fashion collections & stay ahead of trends.",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "https://glamics.temptics.com/assets/img/banner-slide-2.jpg",
      title: "Tech at Best Prices",
      description: "Discover unbeatable deals on the latest gadgets & electronics.",
      buttonText: "Explore Deals",
    },
    {
      id: 3,
      image: "https://glamics.temptics.com/assets/img/banner-slide-3.jpg",
      title: "Step Into Comfort",
      description: "Find premium quality footwear designed for all-day comfort.",
      buttonText: "Browse Now",
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Slider Section */}
      <Slider slides={slides} />
 {/* Banner Section Section */}
 <div className="mt-5 w-full">
        <Category />
      </div>
      
       {/* Banner Section Section */}
       <div className="mt-5 w-full">
        <BannerSection />
      </div>

      {/* ShoppingEveryDay Section */}
      <div className="mt-5 w-full">
        <ShoppingEveryDay />
      </div>
      {/* ShoppingEveryDay Section */}
      <div className="mt-5 w-full">
        <TopSelling />
      </div>
      {/* ShoppingEveryDay Section */}
      <div className="mt-5 w-full">
        <Testimonials />
      </div>

      {/* Banner Section */}
      <div className="mt-5 w-full">
        <Banner />
      </div>
      {/* Newsletter Section */}
      <div className="mt-5 w-full">
        <Newsletter />
      </div>
       {/* ServiceFeatures Section */}
       <div className="mt-5 w-full">
        <ServiceFeatures />
      </div>
      {/* Footer Section */}
      <div className="mt-5 w-full">
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
