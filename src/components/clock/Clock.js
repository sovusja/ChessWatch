import React, { useState } from "react";
import ButtonControl from "../buttons/buttonControl/ButtonControl";
import ButtonStop from "../buttons/buttonStop/ButtonStop";
import ButtonTimer from "../buttons/buttonTimer/ButtonTimer";
import MainClock from "../mainClock/MainClock";
import "./Clock.css";

const Clock = () => {
  const [activeTimerId, setActiveTimerId] = useState(null);
  const [gameDuration, setGameDuration] = useState(1800);
  const [winner, setWinner] = useState(null);

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

  const mainClockData = [
    {
      id: 1,
      type: "Whyte",
    },
    {
      id: 2,
      type: "Black",
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
              setWinner={setWinner}
            />
          );
        })}
      </div>
      <div className="clock">
        {winner && <div className="winner">{winner} Won</div>}
        <div className="clock_main">
          {mainClockData.map((elem) => {
            return (
              <MainClock
                key={elem.id}
                id={elem.id}
                activeTimerId={activeTimerId}
                gameDuration={gameDuration}
                setActiveTimerId={setActiveTimerId}
                type={elem.type}
                setWinner={setWinner}
              />
            );
          })}
        </div>
        <div className="clock_button">
          <ButtonStop setActiveTimerId={setActiveTimerId} />
          <div className="clock_button-timer">
            {timerButton.map((elem) => {
              return (
                <ButtonTimer
                  key={elem.id}
                  text={elem.text}
                  value={elem.value}
                  gameDuration={gameDuration}
                  setGameDuration={setGameDuration}
                  activeTimerId={activeTimerId}
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
