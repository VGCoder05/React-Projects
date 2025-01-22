import React, { useEffect, useState } from "react";
import "./Analog_Clock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getRotationStyle = (unit, degree) => ({
    transform: `translate(${}) rotate(${-180 + (unit * degree)}deg)`,
  });

  // const secondsStyle = getRotationStyle(time.getSeconds(), 6);
  // const minutesStyle = getRotationStyle(time.getMinutes(), 6);
  // const hoursStyle = getRotationStyle(time.getHours() % 12 + time.getMinutes() / 60, 30);

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="clock-center"></div>
        {/* {[...Array(12)].map((_, i) => (
          <div key={i} className="mark"></div>
        ))} */}
        {[...Array(12)].map((_, i) => (
          <div key={i+50} className="number">{i === 0 ? 12 : i}</div>
        ))}

        <div className="hand second"></div>
        <div className="hand minute"></div>
        <div className="hand hour"></div>
        {/* <div className="hand second" style={secondsStyle}></div>
        <div className="hand minute" style={minutesStyle}></div>
        <div className="hand hour" style={hoursStyle}></div> */}
      </div>
    </div>

  );
};

export default AnalogClock;
