import React from "react";
import "./Number.css";

const Number = ({ value, deg, type }) => {
  const activeColor = type === "Whyte" ? "num_black" : "num_whyte";

  return (
    <div className="num" style={{ transform: `rotate(${deg}deg)` }}>
      <span className={activeColor} style={{ transform: `rotate(-${deg}deg)` }}>
        {value}
      </span>
    </div>
  );
};

export default React.memo(Number);
