import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger, isSafe, isDay }) => {
  return (
    <div className={isDanger ?  'countdown danger' : 'countdown'+ isSafe && isDay?  'safe':''}>
      <p className={isDay? !'glow' : 'glow'}>{value}</p>
      <span className={isDay? !'glow' : 'glow'}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
