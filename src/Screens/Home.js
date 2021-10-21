import React from "react";
import entro from "../images/entro.jpg";
import { Button } from "antd";
import axios from "axios";
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

  const Listemployee = () => {
    history.push("/listemployee");
  };
  const x = axios
    .get(
      "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction+%0Awhere+{%0A%3Fpersonne+rdf%3Atype+ns%3ADGA+.%0A%0A%3Fpersonne+ns%3Atravaillesous+%3Fdirector+.%0A%3Fdirector+ns%3ANOM-Complet++%3Fnom+.%0A%3Fdirector+ns%3ACIN+%3Fcin+.%0A%3Fdirector+ns%3AFonction+%3Ffonction+.%0A%0A}%09&output=json"
    )
    .then((x) =>
      x.data.results.bindings.map((k, v) => {
        console.log("object", k.nom.value);
      })
    );

  // console.log("object", x);
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

          <ButtonTo FunctionName={Listemployee} text="List tous les employee" />
        </div>
      </div>
    </>
  );
};

export default Home;
