import React from "react";
import { Button } from "antd";
const ButtonTo = ({ FunctionName, text }) => {
  return (
    <div>
      <Button
        type="primary"
        onClick={FunctionName}
        ghost
        style={{
          backgroundColor: "#C1FFD7",
          color: "black",
          borderRadius: "10px",
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonTo;
