import React from "react";
import useButtonControl from "../../../hooks/useButtonControl";
import "./ButtonControl.css";

const ButtonControl = (props) => {
  const { id, setActiveTimerId, activeTimerId, setWinner } = props;

  const { clickHandler, activeClass } = useButtonControl({
    id,
    setActiveTimerId,
    activeTimerId,
    setWinner,
  });

  return <div className={activeClass} onClick={clickHandler}></div>;
};

export default React.memo(ButtonControl);
