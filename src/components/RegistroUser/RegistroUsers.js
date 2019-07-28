import React from "react";
import { Button, Input, Typography, Form, Icon } from "antd";

const RegistroUser = () => {
  const { Text } = Typography;
  return (
    <div>
      <Form layout="inline">
        <Form.Item>
          <Text
            style={{ color: "#f7f5f5a6", display: "flex", alignSelf: "end" }}
            level={5}
          >
            nombre
          </Text>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistroUser;
