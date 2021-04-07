import React, { useState } from "react";
import setOptionsProperty from "../functions/setOptionsProperty.js";
import data from "../data.js";
import setPrice from "../functions/setPrice.js";
const SelectPrice = props => {
  const [value, setValue] = useState("");
  const handleChange = event => {
    setValue(event.target.value);
    props.changePrice(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="">Cualquier precio</option>
      {setOptionsProperty("price", data)
        .sort((a, b) => a - b)
        .map(option => (
          <option key={option} value={option}>
            {setPrice(option)}
          </option>
        ))}
    </select>
  );
};

export default SelectPrice;
