// import React from 'react';
// import './hooks/useCountDown' ;
import ShowCounter from './countdowntimer'
import React, { useState, useEffect } from 'react';
import axios  from 'axios';

import './App.css';

const END_DATE = new Date("Monday, 20 February 2023 12:00:00")
const START_DATE = new Date()
const DIFF_TIME =  Math.abs(START_DATE - END_DATE)
const DAYS_LEFT = Math.ceil(DIFF_TIME / (1000 * 60 * 60 * 24)); 
const LEFT_DAYS_IN_S = DAYS_LEFT * 24 * 60 * 60 ;

function App() {
  const [remainingTime, setRemainingTime] = useState(LEFT_DAYS_IN_S);

  useEffect(() => {
    // Get the remaining time from the server


  
      const intervalId = setInterval(() => {
        setRemainingTime(remainingTime - 1);
        axios
        .get('https://dateserver.onrender.com/api/remaining-time')
        .then(res => {
          setRemainingTime(res.data.remainingTime);
        })
        .catch(err => {
          console.log(err);
        });
      }, 1000);
  

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



