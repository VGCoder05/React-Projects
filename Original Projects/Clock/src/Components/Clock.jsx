// import React, { useState, useEffect } from 'react';
// import './Clock.css';

// const Clock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="clock-container">
//       <div className="clock">
//         {time.toLocaleTimeString()}
//       </div>
//     </div>
//   );
// };

// export default Clock;


import React, { useState } from 'react';

const ClockWithoutUseEffect = () => {
  const [time, setTime] = useState(new Date());

  // This code runs every time the component renders
  setInterval(() => {
    setTime(new Date());
  }, 1000); // Starts a new timer every render

  return (
    <div>
      <h2>Time: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default ClockWithoutUseEffect;
