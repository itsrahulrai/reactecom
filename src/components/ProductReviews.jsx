import React, { useState } from "react";
import { Rate } from "antd";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ProductReviews = () => {
  const [reviewData] = useState({
    rating: 4.4,
    totalReviews: 7460,
    stars: [
      { value: 5, count: 4921 },
      { value: 4, count: 1340 },
      { value: 3, count: 424 },
      { value: 2, count: 231 },
      { value: 1, count: 485 },
    ],
    customerFeedback: [
      { category: "Fit", value: 66, label: "Just Right" },
      { category: "Length", value: 75, label: "Just Right" },
      { category: "Transparency", value: 53, label: "Medium" },
    ],
    photoCount: 10,
    reviewCount: 1122,
    selectedSort: "Most Helpful",
  });

  // Generate dummy customer photos based on photoCount
  const customerPhotos = [
    "https://pixio-react.vercel.app/assets/4-Carn452S.png",
    "https://pixio-react.vercel.app/assets/6-CodJOEYz.png",
    "https://pixio-react.vercel.app/assets/11-BOvtKs0r.png",
  ];

 
  const reviewPhotos = [
    "https://pixio-react.vercel.app/assets/6-CodJOEYz.png",
    "https://pixio-react.vercel.app/assets/6-CodJOEYz.png",
    "https://pixio-react.vercel.app/assets/6-CodJOEYz.png",
  ];

  return (
    <div className="w-full mx-auto mt-3 p-6 bg-white shadow-md rounded-lg">
      {/* Overall Rating */}
      <div className="flex flex-col md:flex-row justify-start items-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="text-left">
          <h2 className="text-lg font-bold uppercase">Ratings</h2>
          <div className="flex items-center mt-2">
            <span className="text-4xl font-bold" style={{ color: "#D92048" }}>{reviewData.rating}</span>
            <Rate style={{ color: "#D92048" }} disabled defaultValue={reviewData.rating} className="text-lg ml-2" />
          </div>
          <p className="text-sm text-gray-600 mt-1">{reviewData.totalReviews} Verified Buyers</p>

          {/* Star Rating Breakdown */}
          <div className="mt-4 space-y-2">
            {reviewData.stars.map((star) => (
              <div key={star.value} className="flex items-center text-sm">
                <span className="w-4">{star.value}</span>
                <span className="w-4 text-yellow-500 ml-1" style={{ color: "#D92048" }}>★</span>
                <div className="w-40 bg-gray-200 rounded-full h-2 ml-2">
                  <div
                    className="bg-[#D92048] h-2 rounded-full"
                    style={{
                      width: `${(star.count / Math.max(...reviewData.stars.map((s) => s.count))) * 100}%`,
                    }}
                  />
                </div>
                <span className="ml-2 text-gray-600">{star.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Feedback */}
        <div className="text-left ml-20">
          <h2 className="text-lg font-bold uppercase">What Customers Said</h2>
          <div className="mt-2 space-y-2">
            {reviewData.customerFeedback.map((feedback) => (
              <div key={feedback.category} className="mb-2">
                <p className="text-sm mb-1">{feedback.category}</p>
                <div className="flex items-center">
                  <div className="w-52 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#D92048] h-2 rounded-full" style={{ width: `${feedback.value}%` }} />
                  </div>
                  <span className="ml-3 text-sm">{feedback.label} ({feedback.value}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Photos */}
      <div className="mt-6">
        <h2 className="text-base font-medium mb-3">Customer Photos ({reviewData.photoCount})</h2>
        <div className="flex flex-row space-x-3 pb-2 overflow-x-auto">
          {customerPhotos.map((photo, index) => (
            <div key={index} className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border border-gray-200">
              <img src={photo} alt={`Customer photo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-6">
        <h2 className="text-base font-medium">Customer Reviews ({reviewData.reviewCount})</h2>
        <div className="border-t pt-4 mt-3">
          {/* Single Review */}
          <div className="flex items-start space-x-4">
            <div className="w-15  rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/50?img=1" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center">
                <Rate style={{ color: "#D92048" }} disabled defaultValue={4.5} className="text-sm" />
                <span className="ml-2 text-sm text-gray-600">4.5</span>
              </div>
              <p className="text-sm mt-2 text-gray-700">
                This came more than I expected. It's so beautiful and elegant. I really loved the embroidery design on the front side, at the bottom, and the trousers bottom. The dupatta is so beautiful and versatile.
              </p>

              {/* Review Photos */}
              <div className="flex space-x-2 mt-2">
                {reviewPhotos.map((photo, index) => (
                  <div key={index} className="w-14 h-14 rounded-md overflow-hidden border border-gray-200">
                    <img src={photo} alt={`Review photo ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Review Footer */}
              <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                <div>Rahul Rai | 21 April 2025</div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center cursor-pointer hover:text-blue-500">
                    <FaThumbsUp className="mr-1" /> 36
                  </div>
                  <div className="flex items-center cursor-pointer hover:text-blue-500">
                    <FaThumbsDown className="mr-1" /> 7
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Review */}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
