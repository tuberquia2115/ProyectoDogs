import React from "react";
import propTypes from "prop-types";
import { Button, Input, Typography, Form, Icon } from "antd";
import * as logo from "../../assets/razas.jpg";

const Login = props => {
  const { Text } = Typography;
  return (
    <div
      style={{
        borderRadius: "1rem",
        backgroundColor: "#001529",
        display: "flex",
        justifyContent: "center",
        width: "25rem",
        height: "22rem"
      }}
    >
      <Form
        layout="inline"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            backgroundColor: "#eeeef5",
            borderRadius: "2rem"
          }}
        >
          <img
            width="70"
            height="70"
            src={logo}
            alt="logo"
            style={{ borderRadius: "2rem" }}
          />
        </div>
        <Text
          style={{ color: "#f7f5f5a6", display: "flex", alignSelf: "end" }}
          level={5}
        >
          Usuario
        </Text>
        <Form.Item>
          <Input
            prefix={<Icon type="user" />}
            style={{ marginBottom: "1rem" }}
            type="text"
          />
        </Form.Item>

        <Text
          style={{ color: "#f7f5f5a6", display: "flex", alignSelf: "end" }}
          level={5}
        >
          Contraseña
        </Text>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" />}
            style={{ marginBottom: "1rem" }}
            type="password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary">Iniciar Sesión</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
