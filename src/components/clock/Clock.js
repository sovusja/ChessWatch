import React from "react";
import ButtonControl from "../buttons/buttonControl/ButtonControl";
import ButtonStop from "../buttons/buttonStop/ButtonStop";
import ButtonTimer from "../buttons/buttonTimer/ButtonTimer";
import MainClock from "../mainClock/MainClock";
import "./Clock.css";

const Clock = () => {
  return (
    <div>
      <div className="clock_button-control">
        <ButtonControl />
        <ButtonControl />
      </div>
      <div className="clock">
        <div className="clock_main">
          <MainClock />
          <MainClock />
        </div>
        <div className="clock_button">
          <ButtonStop />
          <div className="clock_button-timer">
            <ButtonTimer />
            <ButtonTimer />
            <ButtonTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
