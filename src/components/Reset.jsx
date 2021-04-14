import React from "react";
import "../sass/Reset.scss";
const Reset = props => {
  const handleReset = () => {
    props.resetFilters();
  };
  return (
    <button onClick={handleReset} className="btn reset">
      Reset
    </button>
  );
};

export default Reset;
