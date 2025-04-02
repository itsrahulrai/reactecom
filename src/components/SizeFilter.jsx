import { Checkbox } from "antd";

const SizeFilter = ({ selectedSizes, onChange }) => {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div className="mb-5">
      <h3 className="text-lg font-semibold mb-3 font-playfair">Size</h3>
      <Checkbox.Group className="flex flex-wrap gap-2" options={sizes} value={selectedSizes} onChange={onChange} />
    </div>
  );
};

export default SizeFilter;