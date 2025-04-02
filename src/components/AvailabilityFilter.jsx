import { Switch } from "antd";

const AvailabilityFilter = () => (
  <div className="mb-5 flex justify-between items-center">
    <h3 className="text-lg font-semibold font-playfair">In Stock Only</h3>
    <Switch defaultChecked />
  </div>
);

export default AvailabilityFilter