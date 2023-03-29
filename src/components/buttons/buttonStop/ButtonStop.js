import React from "react";
import "./ButtonStop.css";

const ButtonStop = ({ setActiveTimerId }) => {
  const clickHandler = () => {
    setActiveTimerId(null);
  };
  return (
    <div className="button_stop" onClick={clickHandler}>
      STOP
    </div>
  );
};

export default ButtonStop;
