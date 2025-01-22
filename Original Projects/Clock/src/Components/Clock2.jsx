import React, { useState, useEffect } from 'react';

const ClockWithUseEffect = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up a timer
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: Stop the timer when the component is removed
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h2>Time: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default ClockWithUseEffect;
