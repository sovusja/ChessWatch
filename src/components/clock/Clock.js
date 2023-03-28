import React, { useState } from "react";
import ButtonControl from "../buttons/buttonControl/ButtonControl";
import ButtonStop from "../buttons/buttonStop/ButtonStop";
import ButtonTimer from "../buttons/buttonTimer/ButtonTimer";
import MainClock from "../mainClock/MainClock";
import "./Clock.css";

const Clock = () => {
  const [activeTimerId, setActiveTimerId] = useState(null);

  const timerButton = [
    {
      id: 1,
      text: "15 min",
      value: 1800,
    },
    {
      id: 2,
      text: "30 min",
      value: 3600,
    },
    {
      id: 3,
      text: "45 min",
      value: 5400,
    },
  ];

  const mainActiveClock = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const controlButton = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return (
    <div>
      <div className="clock_button-control">
        {controlButton.map((elem) => {
          return (
            <ButtonControl
              key={elem.id}
              id={elem.id}
              setActiveTimerId={setActiveTimerId}
              activeTimerId={activeTimerId}
            />
          );
        })}
      </div>
      <div className="clock">
        <div className="clock_main">
          {mainActiveClock.map((elem) => {
            return (
              <MainClock
                key={elem.id}
                id={elem.id}
                activeTimerId={activeTimerId}
              />
            );
          })}
        </div>
        <div className="clock_button">
          <ButtonStop />
          <div className="clock_button-timer">
            {timerButton.map((elem) => {
              return (
                <ButtonTimer
                  key={elem.id}
                  text={elem.text}
                  value={elem.value}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
