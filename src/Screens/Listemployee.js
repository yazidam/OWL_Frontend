import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
const Listemployee = () => {
  const [listingenieur, setListingenieur] = useState(null);
  const [listtechnicien, setListtechnicien] = useState([]);
  const [listcomptable, setListcomptable] = useState([]);
  const [listdirecteur, setListdirecteur] = useState([]);
  const [listresponsable, setListresponsable] = useState([]);
  useEffect(async () => {
    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A++++%0A%0A%0ASELECT+%3Fpersonne+%3Fnom+%3FCIN+%3FFonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3AIngenieur+.%0A%3Fpersonne+ns%3ANOM-Complet+%3Fnom++.%0A%3Fpersonne+ns%3ACIN+%3FCIN++.%0A%3Fpersonne+ns%3AFonction+%3FFonction++.%0A%0A%7D%09%0AORDER+BY+(%3Fnom)&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListingenieur(res.data.results.bindings);
        // console.log("object", listingenieur);
      });

    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A++++%0A%0A%0ASELECT+%3Fpersonne+%3Fnom+%3FCIN+%3FFonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3ADirecteur+.%0A%3Fpersonne+ns%3ANOM-Complet+%3Fnom++.%0A%3Fpersonne+ns%3ACIN+%3FCIN++.%0A%3Fpersonne+ns%3AFonction+%3FFonction++.%0A%0A%7D%09%0AORDER+BY+(%3Fnom)&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListdirecteur(res.data.results.bindings);
        // console.log("object", listdirecteur);
      });

    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A++++%0A%0A%0ASELECT+%3Fpersonne+%3Fnom+%3FCIN+%3FFonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3AComptable+.%0A%3Fpersonne+ns%3ANOM-Complet+%3Fnom++.%0A%3Fpersonne+ns%3ACIN+%3FCIN++.%0A%3Fpersonne+ns%3AFonction+%3FFonction++.%0A%0A%7D%09%0AORDER+BY+(%3Fnom)&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListcomptable(res.data.results.bindings);
        // console.log("object", listcomptable);
      });

    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A++++%0A%0A%0ASELECT+%3Fpersonne+%3Fnom+%3FCIN+%3FFonction%0Awhere+{%0A%3Fpersonne+rdf%3Atype+ns%3ATechnicien+.%0A%3Fpersonne+ns%3ANOM-Complet+%3Fnom++.%0A%3Fpersonne+ns%3ACIN+%3FCIN++.%0A%3Fpersonne+ns%3AFonction+%3FFonction++.%0A%0A}%09%0AORDER+BY+(%3Fnom)&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListtechnicien(res.data.results.bindings);
        // console.log("object", listtechnicien);
      });

    await axios
      .get(
        "http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A++++%0A%0A%0ASELECT+%3Fpersonne+%3Fnom+%3FCIN+%3FFonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3AResponsable+.%0A%3Fpersonne+ns%3ANOM-Complet+%3Fnom++.%0A%3Fpersonne+ns%3ACIN+%3FCIN++.%0A%3Fpersonne+ns%3AFonction+%3FFonction++.%0A%0A%7D%09%0AORDER+BY+(%3Fnom)&output=json"
      )
      .then((res) => {
        // console.log("11", res.data.results.bindings);

        setListresponsable(res.data.results.bindings);
        console.log("object", listresponsable);
      });
  }, []);

  return (
    <>
      <h1>directeurrrr</h1>
      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listdirecteur?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.nom.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h1>Ingenieurrrr</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listingenieur?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.nom.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1>Comptable</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listcomptable?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.nom.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1> technicien</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listtechnicien?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.nom.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1> responsable</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listresponsable?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.nom.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listemployee;
