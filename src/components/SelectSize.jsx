import React from "react";

const SelectSize = props => {
  const [value, setValue] = props.value;
  const handleChange = event => {
    setValue({ value: event.target.value });
  };
  return (
    <select value={value.value} onChange={handleChange}>
      <option value="">Cualquier tamaño</option>
      <option value="small">Pequeño</option>
      <option value="medium">Mediano</option>
      <option value="big">Grande</option>
    </select>
  );
};

export default SelectSize;
