import React from "react";
import "./MainClock.css";
import Number from "../number/Number";
import Arrow from "../arrow/Arrow";
import useMainClock from "../../hooks/useMainClock";

const MainClock = (props) => {
  const { id, activeTimerId, gameDuration, setActiveTimerId, type, setWinner } =
    props;

  const { minutes, activeClass, arrowData } = useMainClock({
    activeTimerId,
    gameDuration,
    setActiveTimerId,
    setWinner,
    type,
    id,
  });

  return (
    <div className={activeClass}>
      {minutes.map((elem) => {
        return (
          <Number key={elem.id} value={elem.value} deg={elem.deg} type={type} />
        );
      })}
      {arrowData.map((elem) => {
        return (
          <Arrow key={elem.id} type={elem.type} rotatePos={elem.rotatePos} />
        );
      })}
    </div>
  );
};

export default MainClock;
