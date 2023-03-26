import React from "react";
import "./Arrow.css";

const Arrow = ({ id, type, rotatePos, interval }) => {
  return (
    <div
      className={`container container_${type}`}
      style={{ transform: `rotate(${rotatePos}deg)` }}
    >
      <div className={`block block_${type}`}></div>
      <div className="invisible-block"></div>
    </div>
  );
};

export default React.memo(Arrow);
