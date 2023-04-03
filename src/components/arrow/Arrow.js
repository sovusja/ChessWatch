import React from "react";
import "./Arrow.css";

const Arrow = (props) => {
  const { type, rotatePos } = props;

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
