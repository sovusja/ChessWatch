import React from "react";
import useButtonTimer from "../../../hooks/useButtonTimer";
import "./ButtonTimer.css";

const ButtonTimer = (props) => {
  const { text, value, gameDuration, setGameDuration, activeTimerId } = props;

  const { clickHandler, activeClass } = useButtonTimer({
    value,
    gameDuration,
    setGameDuration,
    activeTimerId,
  });

  return (
    <div className={activeClass} onClick={clickHandler}>
      {text}
    </div>
  );
};

export default React.memo(ButtonTimer);
