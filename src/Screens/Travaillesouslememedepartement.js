import React, { useState, useEffect } from "react";
// import travailavec from "../images/travailavec.jpg";
import { Select } from "antd";

import { Table } from "react-bootstrap";
import axios from "axios";
const { Option } = Select;
const Travaillesouslememedepartement = () => {
  const [listproduction, setListproduction] = useState([]);
  const [listrh, setListrh] = useState([]);
  const [listfinaciee, setListfinaciee] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3ADirecteur_de_production+.%0A%3Fpersonne+ns%3Atravaillesouslememedepartement+%3Fcollegue+.%0A%3Fcollegue+ns%3ANOM-Complet+%3Fnom+.%0A%3Fcollegue+ns%3ACIN+%3Fcin+.%0A%3Fcollegue+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListproduction(res.data.results.bindings);
        // console.log("object", listproduction);
      });

    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3ADirecteur_RH+.%0A%0A%3Fpersonne+ns%3Atravaillesouslememedepartement+%3Fcollegue+.%0A%3Fcollegue+ns%3ANOM-Complet+%3Fnom+.%0A%3Fcollegue+ns%3ACIN+%3Fcin+.%0A%3Fcollegue+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListrh(res.data.results.bindings);
        // console.log("object", setListrh);
      });

    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3ADirecteur_financier+.%0A%0A%3Fpersonne+ns%3Atravaillesouslememedepartement+%3Fcollegue+.%0A%3Fcollegue+ns%3ANOM-Complet+%3Fnom+.%0A%3Fcollegue+ns%3ACIN+%3Fcin+.%0A%3Fcollegue+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListfinaciee(res.data.results.bindings);
        // console.log("object", listfinaciee);
      });
  }, []);

  // const [size, setSize] = useState("default");

  // const children = [];
  // for (let i = 10; i < 36; i++) {
  //   children.push(
  //     <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  //   );
  // }

  // function handleChange(value) {
  //   console.log(`Selected: ${value}`);
  // }

  // const handleSizeChange = (e) => {
  //   setSize(e.target.value);
  // };

  return (
    <>
      <div
        style={{
          // backgroundImage: `url(${travailavec})`,
          // backgroundColor: "#F6F5F5",
          width: "100%",
          // opacity: 0.7,
          height: "625px",
          position: "absolute",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <marquee scrollamount="15">
            <div
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "50px",
                fontFamily: "inherit",
                fontStyle: "normal",
                // backgroundColor: "#f8f9fb",
              }}
            >
              Production
            </div>
          </marquee>
          <Table
            striped
            hover
            responsive
            className="table-sm"

            // style={{ backgroundColor: "rgba(117, 190, 218, 0.0)" }}
          >
            <thead>
              <tr style={{ WebkitTextFillColor: "black" }}>
                <th>Name</th>
                <th>CIN</th>
                <th>FUNCTION</th>
              </tr>
            </thead>
            <tbody>
              {listproduction?.map((x) => (
                <tr key={x.cin.value}>
                  <td>{x.nom.value}</td>
                  <td>{x.cin.value}</td>

                  <td>{x.fonction.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <marquee scrollamount="15">
            <div
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "50px",
                fontFamily: "inherit",
                fontStyle: "normal",
                // backgroundColor: "#f8f9fb",
              }}
            >
              RH
            </div>
          </marquee>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>cin</th>
                <th>FUNCTION</th>
              </tr>
            </thead>
            <tbody>
              {listrh?.map((x) => (
                <tr key={x.cin.value}>
                  <td>{x.nom.value}</td>
                  <td>{x.cin.value}</td>

                  <td>{x.fonction.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <marquee scrollamount="15">
            <div
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "50px",
                fontFamily: "inherit",
                fontStyle: "normal",
                // backgroundColor: "#f8f9fb",
              }}
            >
              Finance
            </div>
          </marquee>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>CIN</th>
                <th>FUNCTION</th>
              </tr>
            </thead>
            <tbody>
              {listfinaciee?.map((x) => (
                <tr key={x.cin.value}>
                  <td>{x.nom.value}</td>
                  <td>{x.cin.value}</td>

                  <td>{x.fonction.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Travaillesouslememedepartement;
