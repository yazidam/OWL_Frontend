import React, { useState } from "react";
import bg1 from "../images/bg3.jpg";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const Travaillesous = () => {
  const [value, setValue] = useState("");

  const [yosra, setYosra] = useState([]);

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);

    axios
      .get(
        `http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction+%0Awhere+%7B%0A%3Fpersonne+ns%3ANOM-Complet+%3FNOMComplet++.%0AFILTER+(%3FNOMComplet+%3D+%22${e}%22)+%0A%0A%3Fpersonne+ns%3Atravaillesous+%3Fdirector+.%0A%3Fdirector+ns%3ANOM-Complet++%3Fnom+.%0A%3Fdirector+ns%3ACIN+%3Fcin+.%0A%3Fdirector+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json`
      )
      .then((res) => {
        setYosra(res.data.results.bindings); // 3ala 5ather yosra mritha
        console.log("res", res.data);
      });
  };

  return (
    <>
      <div
        className="text-center"
        style={{
          backgroundImage: `url(${bg1})`,
          // backgroundColor: "#FCFFA6",
          width: "100%",
          backgroundSize: "cover",

          opacity: 0.7,
          height: "625px",
          position: "absolute",
        }}
      >
        <div className="my-3">
          <div className=" container my-5">
            <DropdownButton
              alignRight
              title="Employé"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <div style={{ overflowY: "scroll", height: "250px" }}>
                <Dropdown.Item eventKey="zehid aamar">
                  zehid aamar
                </Dropdown.Item>
                <Dropdown.Item eventKey="yassine alouane">
                  yassine alouane
                </Dropdown.Item>
                <Dropdown.Item eventKey="soumaya kaabi">
                  soumaya kaabi
                </Dropdown.Item>
                <Dropdown.Item eventKey="mourad tbib">
                  mourad tbib
                </Dropdown.Item>
                <Dropdown.Item eventKey="khawla Gessmi">
                  khawla Gessmi
                </Dropdown.Item>
                <Dropdown.Item eventKey="karima nouni">
                  karima nouni
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="chahrazed almia">
                  chahrazed almia
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="bechir ben yahia">
                  bechir ben yahia
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="azer malouli">
                  azer malouli
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="alya louti">alya louti</Dropdown.Item>{" "}
                <Dropdown.Item eventKey="youssef Bayrem">
                  youssef Bayrem
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="yosra bouafif">
                  yosra bouafif
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="wissal fatnassi">
                  wissal fatnassi
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="sara Abderazzk">
                  sara Abderazzk
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="nabil wetherfi">
                  nabil wetherfi
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="mouldi Lakhel">
                  mouldi Lakhel
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="monia messelmani">
                  monia messelmani
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="laila said">laila said</Dropdown.Item>{" "}
                <Dropdown.Item eventKey="karim chalouah">
                  karim chalouah
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="iheb Mabrouki">
                  iheb Mabrouki
                </Dropdown.Item>{" "}
                <Dropdown.Item eventKey="ferid mrad">ferid mrad</Dropdown.Item>{" "}
                <Dropdown.Item eventKey="faten mahnouch">
                  faten mahnouch
                </Dropdown.Item>
                <Dropdown.Item eventKey="aLI kAMOUN">aLI kAMOUN</Dropdown.Item>
                <Dropdown.Item eventKey="achref ayari">
                  achref ayari
                </Dropdown.Item>
              </div>
              <Dropdown.Divider />
            </DropdownButton>
            {value && <h4 className="my-3">Le directeur de {value} est : </h4>}
          </div>
          {yosra.map((x) => (
            <h1>{x.nom.value}</h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Travaillesous;
