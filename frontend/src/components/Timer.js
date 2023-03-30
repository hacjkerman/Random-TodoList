import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Modal from "./Modal";

const formatTime = (time) => {
  const seconds = time;
  const hours = Math.floor(seconds / 3600);
  const remainingMinutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${remainingMinutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

function Timer(props) {
  const [time, setTime] = useState();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  useEffect(() => {
    setTime(parseInt(props.todo.time));
  }, [props.todo]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="w-120 flex justify-between items-center">
      <Modal />
      <Clock time={formatTime(time)} />
      <div>
        {!isActive ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
            onClick={handleStart}
          >
            Start
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md mx-2"
            onClick={handlePause}
          >
            Pause
          </button>
        )}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md mx-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
