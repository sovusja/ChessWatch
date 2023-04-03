import React from "react";
import useClock from "../../hooks/useClock";
import ButtonControl from "../buttons/buttonControl/ButtonControl";
import ButtonStop from "../buttons/buttonStop/ButtonStop";
import ButtonTimer from "../buttons/buttonTimer/ButtonTimer";
import MainClock from "../mainClock/MainClock";
import "./Clock.css";

const Clock = () => {
  const {
    activeTimerId,
    setActiveTimerId,
    gameDuration,
    setGameDuration,
    winner,
    setWinner,
    timerButtonData,
    mainClockData,
    controlButtonData,
  } = useClock();

  return (
    <div>
      <div className="clock_button-control">
        {controlButtonData.map((elem) => {
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
            {timerButtonData.map((elem) => {
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
