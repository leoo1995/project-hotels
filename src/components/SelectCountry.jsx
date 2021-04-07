import React, { useState } from "react";
import data from "../data.js";
import setOptionsProperty from "../functions/setOptionsProperty.js";
const SelectCountry = props => {
  const [value, setValue] = useState("");
  const handleChange = event => {
    setValue(event.target.value);
    props.changeCountry(event.target.value);
  };
  return (
    <select value={value} onChange={handleChange}>
      <option value="">Todos los países</option>
      {setOptionsProperty("country", data).map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectCountry;
