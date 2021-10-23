import React, { useState, useEffect } from "react";

import bos from "../images/bos.jpeg";
import { Button } from "antd";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ButtonTo from "../components/ButtonTo";
const Home = ({ history }) => {
  const [pdg, setPdg] = useState([]);
  const Totravaillesous = () => {
    history.push("/travaillesous");
  };

  useEffect(async () => {
    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+%3Fpersonne+%3Fnom+%3FCIN+%3FFonction%0Awhere+{%0A%3Fpersonne+rdf%3Atype+ns%3APDG+.%0A%3Fpersonne+ns%3ANOM-Complet+%3Fnom++.%0A%3Fpersonne+ns%3ACIN+%3FCIN++.%0A%3Fpersonne+ns%3AFonction+%3FFonction++.%0A%0A}%09%0A&output=json"
      )
      .then((res) => {
        setPdg(res.data.results.bindings);
      });
  }, []);

  return (
    <>
      <Row>
        <Col md={5}>
          <div
            style={{
              backgroundImage: `url(${bos})`,
              width: "570px",

              backgroundSize: "cover",

              // opacity: 0.7,
              height: "518px",
            }}
          ></div>
        </Col>
        <Col md={7} style={{ backgroundColor: "#EAE7C6" }}>
          <div style={{}}>
            {pdg.map((x) => (
              <>
                <h1 className="text-center my-5">{x.nom.value}</h1>
                <h3 className="text-center ">{x.Fonction.value}</h3>
              </>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
