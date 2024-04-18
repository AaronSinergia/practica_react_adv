import './Timer.css';
import React from 'react';
import useCurrentHour from '../../customHooks/useCurrentHour';

const Timer = () => {
  const hour = useCurrentHour();

  return (
    <>
      <div className="current_hour_title">CURRENT HOUR</div>
      <h2 className="hour">{hour.toLocaleTimeString()}</h2>
    </>
  );
};

export default Timer;
