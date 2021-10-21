import React, { useState } from "react";
import entro from "../images/entro.jpg";
import { Select } from "antd";
import memeequipe from "../images/memeequipe.jpg";
import { Button } from "antd";
import { useFormik } from "formik";
import ComboBox from "react-responsive-combo-box";
import * as Yup from "yup";
const { Option } = Select;
const Travailledanslamemeequipe = () => {
  const [selected, setSelected] = useState("");

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

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  // const handleSizeChange = (e) => {
  //   setSelected(e.target.value);
  // };

  const formik = useFormik({
    initialValues: {
      selected: selected,
      employe: [
        "aLI kAMOUN",
        "Khawla Gessmi",
        "mourad tbib",
        "Achref ayari",
        "alya louti",
        "Mouldi Lakhel",
      ],
    },

    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log("oooooooooooooooooooooo");
      console.log("object", selected);
    },
  });
  const t = () => {
    console.log("object");
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${memeequipe})`,
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
        <ComboBox
          options={formik.values.employe}
          name="selected"
          onChange={formik.handleChange}
          value={formik.values.selected}
          // onSelect={setSelectedlevel}
          enableAutocomplete
        />
        {/* {children} */}
        {/* </Select> */}
        {/* <br /> */}
        <div className="App">
          {/* <Button
            type="submit"
            ghost
            onClick={t}
            style={{ backgroundColor: "#F9F3DF", color: "black" }}
          >
            Primary
          </Button> */}
          <button type="submit" className="btn btn-info mb-1 mx-4">
            okkkkkkkkkk
          </button>
        </div>
      </div>
    </>
  );
};
const yupSchema = Yup.object({});
export default Travailledanslamemeequipe;
