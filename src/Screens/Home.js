import React from "react";
import entro from "../images/entro.jpg";
import { Button } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import ButtonTo from "../components/ButtonTo";
const Home = ({ history }) => {
  const Totravaillesous = () => {
    history.push("/travaillesous");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${entro})`,
          width: "100%",
          opacity: 0.7,
          height: "625px",
          position: "absolute",
        }}
      >
        <h1 className="App" style={{ color: "#FEFBF3" }}>
          Entreprise Hiérarchie
        </h1>
        <div className="home">
          <ButtonTo
            FunctionName={Totravaillesous}
            text="Filttre To travaille sous"
          />
          <ButtonTo
            FunctionName={Totravaillesous}
            text="Filttre To travaille dans la meme equipe"
          />
          <ButtonTo
            FunctionName={Totravaillesous}
            text="Filttre travaille sous le meme departement"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
