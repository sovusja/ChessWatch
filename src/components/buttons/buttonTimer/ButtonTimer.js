import React, { useState } from "react";
import "./ButtonTimer.css";

const ButtonTimer = ({ id, text, value }) => {
  const activeClass = id ? "button_timer button_timer__active" : "button_timer";

  return <div className={activeClass}>{text}</div>;
};

export default ButtonTimer;
