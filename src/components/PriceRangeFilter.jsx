import { useState } from "react";
import { Slider, InputNumber } from "antd";

const PriceRangeFilter = () => {
  const [priceRange, setPriceRange] = useState([100, 500]);

  const handleChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="mb-5 p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Price Range</h3>

      {/* Slider */}
      <Slider
        range
        min={0}
        max={1000}
        step={10}
        value={priceRange}
        onChange={handleChange}
        className="mb-4"
        trackStyle={[{ backgroundColor: "#D92048" }]}
        handleStyle={[{ borderColor: "#D92048" }, { borderColor: "#D92048" }]}
      />

      {/* Min & Max Price Inputs */}
      <div className="flex items-center justify-between gap-6">
        {/* Min Price Input */}
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium text-gray-600 mb-1">Min Price</label>
          <InputNumber
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(value) => handleChange([value, priceRange[1]])}
            className="w-full p-2 border rounded-lg shadow-sm text-center"
            prefix="₹"
          />
        </div>

        {/* Max Price Input */}
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium text-gray-600 mb-1">Max Price</label>
          <InputNumber
            min={priceRange[0]}
            max={1000}
            value={priceRange[1]}
            onChange={(value) => handleChange([priceRange[0], value])}
            className="w-full p-2 border rounded-lg shadow-sm text-center"
            prefix="₹"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
