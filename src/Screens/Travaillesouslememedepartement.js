import React, { useState } from "react";
import travailavec from "../images/travailavec.jpg";
import { Select } from "antd";
import { Button } from "antd";
const { Option } = Select;
const Travaillesouslememedepartement = () => {
  const [size, setSize] = useState("default");

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${travailavec})`,
          // backgroundColor: "#C1FFD7",
          width: "100%",
          opacity: 0.7,
          height: "625px",
          position: "absolute",
        }}
      >
        <h1 className="App" style={{ color: "#FEFBF3" }}>
          Travaille Sous Le Meme Departement
        </h1>

        <Select
          className="App"
          mode="multiple"
          size={size}
          placeholder="Please select"
          // defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{
            width: "50%",

            margin: "100px 290px",
          }}
        >
          {children}
        </Select>
        {/* <br /> */}
        <div className="App">
          <Button
            type="primary"
            ghost
            style={{ backgroundColor: "#F9F3DF", color: "black" }}
          >
            Primary
          </Button>
        </div>
      </div>
    </>
  );
};

export default Travaillesouslememedepartement;
