import { useState } from "react";
import { Drawer, Table, Tabs, Typography } from "antd";

const { Title, Text } = Typography;

const sizeData = [
  { key: "1", size: "S", chest: "38.0", frontLength: "26.8", shoulder: "16.6" },
  { key: "2", size: "M", chest: "40.0", frontLength: "27.3", shoulder: "17.1" },
  { key: "3", size: "L", chest: "42.0", frontLength: "27.8", shoulder: "17.6" },
  { key: "4", size: "XL", chest: "44.0", frontLength: "28.3", shoulder: "18.1" },
  { key: "5", size: "XXL", chest: "46.0", frontLength: "28.8", shoulder: "18.6" },
];

const columns = [
  { title: "Size", dataIndex: "size", key: "size" },
  { title: "Chest (in)", dataIndex: "chest", key: "chest" },
  { title: "Front Length (in)", dataIndex: "frontLength", key: "frontLength" },
  { title: "Across Shoulder (in)", dataIndex: "shoulder", key: "shoulder" },
];

const SizeChart = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <Drawer
      title="Size Guide"
      placement="right"
      width={700}
      onClose={() => setIsDrawerOpen(false)}
      open={isDrawerOpen}
      className="p-4"
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Size Chart" key="1">
          <Table columns={columns} dataSource={sizeData} pagination={false} bordered />
          <Text type="secondary">* Garment Measurements in inches</Text>
        </Tabs.TabPane>

        <Tabs.TabPane tab="How to Measure" key="2">
          <Title level={4}>How to measure yourself</Title>
          <Text>Use a measuring tape to get accurate body measurements.</Text>
        </Tabs.TabPane>
      </Tabs>
    </Drawer>
  );
};

export default SizeChart;
