import React from "react";
import { Form, Input, Button } from "antd";

const Signup = () => {
  return (
    <div className="w-1/3 mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
      <Form>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" block>Sign Up</Button>
      </Form>
    </div>
  );
};

export default Signup;
