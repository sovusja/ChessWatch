import { useState } from "react";

const useClock = () => {
  const [activeTimerId, setActiveTimerId] = useState(null);
  const [gameDuration, setGameDuration] = useState(1800);
  const [winner, setWinner] = useState(null);

  const timerButtonData = [
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

  const controlButtonData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return {
    activeTimerId,
    setActiveTimerId,
    gameDuration,
    setGameDuration,
    winner,
    setWinner,
    timerButtonData,
    mainClockData,
    controlButtonData,
  };
};

export default useClock;
