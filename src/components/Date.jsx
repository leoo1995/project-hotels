import React, { useEffect } from "react";
import moment, { isMoment } from "moment";
import "moment/locale/es";
const Date = props => {
  const dates = props.value;
  let idDate = props.id;
  const handleChange = event => {
    props.changeDate(props.id, event.target.value);
  };

  return (
    <input
      type="date"
      min={moment().format("YYYY-MM-DD")}
      value={dates[idDate - 1].value}
      onChange={handleChange}
    />
  );
};

export default Date;
