import React from "react";
import "./Number.css";

const Number = ({ value, deg }) => {
  return (
    <div className="num" style={{ transform: `rotate(${deg}deg)` }}>
      <span style={{ transform: `rotate(-${deg}deg)` }}>{value}</span>
    </div>
  );
};

export default Number;
