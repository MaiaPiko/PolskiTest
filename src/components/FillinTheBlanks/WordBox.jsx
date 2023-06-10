import React, { useEffect, useState } from 'react';
import CopyButton from './CopyButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function WordBox({ textArray, isReset, submitted, example }) {
  const [shuffledArray, setShuffledArray] = useState([]);
  const matches = useMediaQuery('(max-width:600px)');
  useEffect(() => {
   
    const shuffleWords = () => {
      const newArray = [...textArray];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      setShuffledArray(newArray);
    };

    shuffleWords();
  }, []); // Empty dependency array ensures it runs only once on page load

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ m: matches ? 0 : 2, pr: 0.75, p:1}}>
          {shuffledArray.map((text, index) => (
            <CopyButton
              text={text}
              example={example}
              key={index}
              isReset={isReset}
              submitted={submitted}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}
