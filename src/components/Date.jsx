import React, { useState } from "react";

const Date = props => {
  const [date, setDate] = useState("");

  const handleChange = event => {
    setDate(event.target.value);
    props.changeDate(props.id, event.target.value);
  };
  return <input type="date" value={date} onChange={handleChange} />;
};

export default Date;
