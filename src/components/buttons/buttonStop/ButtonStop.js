import React from "react";
import useButtonStop from "../../../hooks/useButtonStop";
import "./ButtonStop.css";

const ButtonStop = (props) => {
  const { setActiveTimerId } = props;
  const { clickHandler } = useButtonStop({ setActiveTimerId });

  return (
    <div className="button_stop" onClick={clickHandler}>
      STOP
    </div>
  );
};

export default React.memo(ButtonStop);
