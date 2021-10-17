import React from "react";
import entro from "../images/entro.jpg";
import { Button } from "antd";
import { Container, Row, Col } from "react-bootstrap";
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
          <Button
            type="primary"
            onClick={Totravaillesous}
            ghost
            to="/travaillesous"
            style={{ backgroundColor: "#F9F3DF", color: "black" }}
          >
            Filttre To travaille sous
          </Button>
          <Button
            type="primary"
            onClick={Totravaillesous}
            ghost
            to="/travaillesous"
            style={{ backgroundColor: "#F9F3DF", color: "black" }}
          >
            Filttre travaille sous le meme departement
          </Button>
          <Button
            type="primary"
            onClick={Totravaillesous}
            ghost
            to="/travaillesous"
            style={{ backgroundColor: "#F9F3DF", color: "black" }}
          >
            Filttre To travaille dans la meme equipe
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
