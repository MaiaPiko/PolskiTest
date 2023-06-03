import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { green, red } from '@mui/material/colors';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const Timer = ({ minutes }) => {
  const [seconds, setSeconds] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleToggleTimer = () => {
    setIsRunning((prevState) => !prevState);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div >

      <Button
        variant="contained"
        onClick={handleToggleTimer}
        style={{ backgroundColor: isRunning ? red[500] : green[500] }}
      >
      <AccessTimeOutlinedIcon sx={{pr:2}}/> 
        {formatTime(seconds)}      
      </Button>
      
      <p style={{fontSize:"0.75em"}}>Start the timer when ready!</p>
    </div>
  );
};

export default Timer;
