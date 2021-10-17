import React from "react";
import entro from "../images/entro.jpg";
const mainPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${entro})`,
        width: "100%",
        height: "625px",
      }}
    >
      this is entreprise page lore
    </div>
  );
};

export default mainPage;
