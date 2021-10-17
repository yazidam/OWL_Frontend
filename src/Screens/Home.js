import React from "react";
import entro from "../images/entro.jpg";
import { Button } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import ButtonTo from "../components/ButtonTo";
const Home = ({ history }) => {
  const Totravaillesous = () => {
    history.push("/travaillesous");
  };

  const Travaillesouslememedepartement = () => {
    history.push("/travaillesouslememedepartement");
  };

  const Travailledanslamemeequipe = () => {
    history.push("/travailledanslamemeequipe");
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
            FunctionName={Travailledanslamemeequipe}
            text="Filttre To travaille dans la meme equipe"
          />
          <ButtonTo
            FunctionName={Travaillesouslememedepartement}
            text="Filttre travaille sous le meme departement"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
