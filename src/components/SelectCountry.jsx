import React from "react";
import data from "../data.js";
import setOptionsProperty from "../functions/setOptionsProperty.js";
const SelectCountry = props => {
  const [value, setValue] = props.value;
  const handleChange = event => {
    setValue({ value: event.target.value });
  };
  return (
    <select value={value.value} onChange={handleChange}>
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
