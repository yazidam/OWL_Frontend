import React, { useState } from "react";
import entro from "../images/entro.jpg";
import { Select } from "antd";
import memeequipe from "../images/memeequipe.jpg";
import { Button } from "antd";
import { useFormik } from "formik";
import ComboBox from "react-responsive-combo-box";
import * as Yup from "yup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
const { Option } = Select;
const Travailledanslamemeequipe = () => {
  // const [selected, setSelected] = useState("");

  const [value, setValue] = useState("");

  const [yosra, setYosra] = useState([]);

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
    // console.log("res", e);

    axios
      .get(
        `http://localhost:3030/EntrepriseProject/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction+%0Awhere+%7B%0A%3Fpersonne+ns%3ANOM-Complet+%3FNOMComplet+.%0AFILTER+(%3FNOMComplet%3D+%22${e}%22)+.%0A%0A%3Fpersonne+ns%3Atravailledanslamemeequipe+%3Fcollegue+.%0A%3Fcollegue+ns%3ANOM-Complet+%3Fnom+.%0A%3Fcollegue+ns%3ACIN+%3Fcin+.%0A%3Fcollegue+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09`
      )
      .then((res) => {
        setYosra(res.data.results.bindings); // 3ala 5ather yosra mritha
        console.log("res", res.data);
      });
  };
  // const children = [];
  // {
  //   children.push(
  //     <Option>aLI kAMOUN</Option>,
  //     <Option>Khawla Gessmi</Option>,
  //     <Option>mourad tbib</Option>,
  //     <Option>Achref ayari</Option>,
  //     <Option>alya louti</Option>,
  //     <Option>Mouldi Lakhel</Option>

  //     // <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  //   );
  // }

  // function handleChange(value) {
  //   console.log(`Selected: ${value}`);
  // }

  // const handleSizeChange = (e) => {
  //   setSelected(e.target.value);
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     selected: selected,
  //     employe: [
  //       "aLI kAMOUN",
  //       "Khawla Gessmi",
  //       "mourad tbib",
  //       "Achref ayari",
  //       "alya louti",
  //       "Mouldi Lakhel",
  //     ],
  //   },

  //   validationSchema: yupSchema,
  //   onSubmit: async (values) => {
  //     console.log("oooooooooooooooooooooo");
  //     console.log("object", selected);
  //   },
  // });
  // const t = () => {
  //   console.log("object");
  // };

  return (
    <>
      <div
        style={{
          // backgroundImage: `url(${memeequipe})`,
          // backgroundColor: "#CAB8FF",
          width: "100%",
          opacity: 0.7,
          height: "625px",
          position: "absolute",
        }}
      >
        <h1 className="App" style={{ color: "#ffff" }}>
          Travaille Dans La Meme Equipe
        </h1>

        {/* <Select
          className="App"
          mode="multiple"
          name={selected}
          placeholder="Please select"
          // defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{
            width: "50%",
            margin: "100px 290px",
          }}
        > */}
        {/* <ComboBox
          options={formik.values.employe}
          name="selected"
          onChange={formik.handleChange}
          value={formik.values.selected}
          // onSelect={setSelectedlevel}
          enableAutocomplete
        /> */}
        {/* {children} */}
        {/* </Select> */}
        {/* <br /> */}
        <div className="">
          {/* <Button
            type="submit"
            ghost
            onClick={t}
            style={{ backgroundColor: "#F9F3DF", color: "black" }}
          >
            Primary
          </Button> */}

          <div className="container">
            <DropdownButton
              alignRight
              title="Dropdown right"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="aLI kAMOUN">aLI kAMOUN</Dropdown.Item>
              <Dropdown.Item eventKey="khawla Gessmi">
                khawla Gessmi
              </Dropdown.Item>
              <Dropdown.Item eventKey="mourad tbib">mourad tbib</Dropdown.Item>
              <Dropdown.Item eventKey="achref ayari">
                achref ayari
              </Dropdown.Item>
              <Dropdown.Item eventKey="alya louti">alya louti</Dropdown.Item>
              <Dropdown.Item eventKey="mouldi Lakhel">
                mouldi Lakhel
              </Dropdown.Item>
              <Dropdown.Divider />
              {/* <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
            </DropdownButton>
            <h4>You selected {value}</h4>
          </div>

          {yosra.map((x) => (
            <h1>{x.nom.value}</h1>
          ))}

          {/* <button type="submit" className="btn btn-info mb-1 mx-4">
            okkkkkkkkkk
          </button> */}
        </div>
      </div>
    </>
  );
};
const yupSchema = Yup.object({});
export default Travailledanslamemeequipe;
