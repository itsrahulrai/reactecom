import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import FastDeliveryFilter from "./FastDeliveryFilter";

const SidebarFilters = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  return (
    <aside className="md:w-1/4 bg-white p-6 shadow-lg">
      <CategoryFilter selectedCategories={selectedCategories} onChange={setSelectedCategories} />
      <hr className="my-4 border-gray-300" />
      <BrandFilter selectedBrands={selectedBrands} onChange={setSelectedBrands} />
      <hr className="my-4 border-gray-300" />
      <ColorFilter />
      <hr className="my-4 border-gray-300" />
      <SizeFilter selectedSizes={selectedSizes} onChange={setSelectedSizes} />
      <hr className="my-4 border-gray-300" />
      <PriceRangeFilter />
      <hr className="my-4 border-gray-300" />
      <AvailabilityFilter />
      <hr className="my-4 border-gray-300" />
      <FastDeliveryFilter />
      <hr className="my-4 border-gray-300" />
    </aside>
  );
};

export default SidebarFilters;
