import React from "react";
import "./ButtonTimer.css";

const ButtonTimer = ({
  text,
  value,
  gameDuration,
  setGameDuration,
  activeTimerId,
}) => {
  const activeClass =
    value === gameDuration
      ? "button_timer button_timer__active"
      : "button_timer";

  const clickHandler = () => {
    if (activeTimerId) {
      return;
    }
    setGameDuration(value);
  };

  return (
    <div className={activeClass} onClick={clickHandler}>
      {text}
    </div>
  );
};

export default ButtonTimer;
