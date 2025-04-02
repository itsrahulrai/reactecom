import { Checkbox } from "antd";

const CategoryFilter = ({ selectedCategories, onChange }) => {
  const categories = ["Backpacks", "Shoes", "Clothing", "Accessories", "Watches", "Jewelry"];
  return (
    <div className="mb-5">
      <h3 className="text-lg font-semibold mb-3 font-playfair">Categories</h3>
      <Checkbox.Group className="flex flex-col gap-2" options={categories} value={selectedCategories} onChange={onChange} />
    </div>
  );
};

export default CategoryFilter;