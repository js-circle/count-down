import React from 'react';
import './hooks/useCountDown' ;
import CountdownTimer from './countdowntimer'
import date from './date';

import './App.css';

function App() {
  const END_DATE = new Date(date)
  const START_DATE = new Date()
  const DIFF_TIME =  Math.abs(START_DATE - END_DATE)
  const DAYS_LEFT = Math.ceil(DIFF_TIME / (1000 * 60 * 60 * 24)); 
  const LEFT_DAYS_IN_MS = DAYS_LEFT * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  console.log(LEFT_DAYS_IN_MS)
  const dateTimeAfterThreeDays = NOW_IN_MS + LEFT_DAYS_IN_MS;
  return (
    <div className='underRoot'>
      <h1 className='glow'>Something amazing is on the way</h1>
      <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="" />
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}


export default App