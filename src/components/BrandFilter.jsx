import { Checkbox } from "antd";

const BrandFilter = ({ selectedBrands, onChange }) => {
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Louis Vuitton", "Gucci"];
  return (
    <div className="mb-5">
      <h3 className="text-lg font-semibold mb-3 font-playfair">Brand</h3>
      <Checkbox.Group className="flex flex-col gap-2" options={brands} value={selectedBrands} onChange={onChange} />
    </div>
  );
};

export default BrandFilter;
