import React from "react";

const Date = props => {
  const dates = props.value;
  let idDate = props.id;
  const handleChange = event => {
    props.changeDate(props.id, event.target.value);
  };
  return (
    <input
      type="date"
      value={dates[idDate - 1].value}
      onChange={handleChange}
    />
  );
};

export default Date;
