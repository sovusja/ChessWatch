import React from "react";
import "./ButtonControl.css";

const ButtonControl = ({ id, setActiveTimerId, activeTimerId, setWinner }) => {
  const clickHandler = () => {
    setActiveTimerId(id);
    setWinner(null);
  };

  const activeClass =
    id === activeTimerId
      ? "button_control button_control__active"
      : "button_control";

  return <div className={activeClass} onClick={clickHandler}></div>;
};

export default ButtonControl;
