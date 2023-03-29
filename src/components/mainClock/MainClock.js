import React, { useEffect, useState } from "react";
import "./MainClock.css";
import Number from "../number/Number";
import Arrow from "../arrow/Arrow";

const MainClock = ({
  id,
  activeTimerId,
  gameDuration,
  setActiveTimerId,
  type,
  setWinner,
}) => {
  const [time, setTime] = useState(0);

  const minDeg = Math.round(time / 10);
  const secDeg = Math.round(time * 6);

  useEffect(() => {
    if (activeTimerId === null) {
      setTime(0);
    }
    if (time > gameDuration) {
      setWinner(type === "White" ? "Black" : "White");
      setTime(0);
      setActiveTimerId(null);
    }
    if (activeTimerId !== id) {
      return;
    }
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [
    setTime,
    id,
    activeTimerId,
    gameDuration,
    time,
    setActiveTimerId,
    setWinner,
    type,
  ]);

  const minutes = [
    {
      id: 1,
      value: 0,
      deg: 0,
    },
    {
      id: 2,
      value: 5,
      deg: 30,
    },
    {
      id: 3,
      value: 10,
      deg: 60,
    },
    {
      id: 4,
      value: 15,
      deg: 90,
    },
    {
      id: 5,
      value: 20,
      deg: 120,
    },
    {
      id: 6,
      value: 25,
      deg: 150,
    },
    {
      id: 7,
      value: 30,
      deg: 180,
    },
    {
      id: 8,
      value: 35,
      deg: 210,
    },
    {
      id: 9,
      value: 40,
      deg: 240,
    },
    {
      id: 10,
      value: 45,
      deg: 270,
    },
    {
      id: 11,
      value: 50,
      deg: 300,
    },
    {
      id: 12,
      value: 55,
      deg: 330,
    },
  ];

  const arrowData = [
    {
      id: 2,
      type: "minute",
      rotatePos: minDeg,
    },
    {
      id: 1,
      type: "second",
      rotatePos: secDeg,
    },
  ];

  return (
    <div className="background">
      {minutes.map((elem) => {
        return <Number key={elem.id} value={elem.value} deg={elem.deg} />;
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
