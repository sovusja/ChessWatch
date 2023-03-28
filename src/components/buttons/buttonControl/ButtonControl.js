import React from "react";
import "./ButtonControl.css";

const ButtonControl = ({ id, setActiveTimerId, activeTimerId }) => {
  const clickHandler = () => {
    setActiveTimerId(id);
  };

  const activeClass =
    id === activeTimerId
      ? "button_control button_control__active"
      : "button_control";

  return <div className={activeClass} onClick={clickHandler}></div>;
};

export default ButtonControl;
