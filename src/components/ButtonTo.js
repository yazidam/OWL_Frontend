import React from "react";
import { Button } from "antd";
const ButtonTo = ({ FunctionName, text }) => {
  return (
    <div>
      <Button
        type="primary"
        onClick={FunctionName}
        ghost
        style={{ backgroundColor: "#F9F3DF", color: "black" }}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonTo;
