import React, { useState } from "react";
import data from "../data.js";
import setOptionsProperty from "../functions/setOptionsProperty.js";
import room from "../icons/bed.svg";
const SelectSize = props => {
  const [value, setValue] = useState("");
  const handleChange = event => {
    setValue(event.target.value);
    props.changeSize(event.target.value);
  };
  return (
    <select value={value} onChange={handleChange}>
      <option value="">Cualquier tamaño</option>
      <option value="small">Pequeño</option>
      <option value="medium">Mediano</option>
      <option value="big">Grande</option>
    </select>
  );
};

export default SelectSize;
