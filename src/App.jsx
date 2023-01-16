// import React from 'react';
// import './hooks/useCountDown' ;
import ShowCounter from './countdowntimer'
import React, { useState, useEffect } from 'react';
import date from './date';
import axios  from 'axios';

import './App.css';

// function App() {
//   const NOW_IN_MS = new Date().getTime();
//   console.log(LEFT_DAYS_IN_MS)
//   return (
//     <div className='underRoot'>
//       <h1 className='glow'>Something amazing is on the way</h1>
//       <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="" />
//       <CountdownTimer targetDate={LEFT_DAYS_IN_MS} />
//     </div>
//   );
// }

function App() {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    // Get the remaining time from the server
        // Get the remaining time from the server
        axios
        .get('http://localhost:3000/api/remaining-time')
        .then(res => {
          setRemainingTime(res.data.remainingTime);
        })
        .catch(err => {
          console.log(err);
        });
    return () => clearInterval(intervalId);
  }, [remainingTime]);

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / 86400);
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className='underRoot'>
            <h1 className='glow'>Something amazing is on the way</h1>
      <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="" />
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}

export default App;



// export default App