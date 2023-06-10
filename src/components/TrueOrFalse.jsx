import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint, noPoint } from '../features/score/scoreSlice';
import CheckMark from './CheckMark';
import CrossMark from './CrossMark';


export default function TrueOrFlase({
  question,
  answer,
  submitted,
  id,
}) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const dispatch = useDispatch();
  const points = useSelector((state) => state.point.points);
  

  useEffect(() => {
    if (submitted && !id=="0") {
      const isCorrect = selectedValue === answer;
      if (isCorrect) {
        dispatch(addPoint());
      } else {
        dispatch(noPoint());
      }
    }
  }, [submitted]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setIsAnswered(true);
  };

  return (
    <>
      <FormControl component="fieldset" sx={{px:3}}>
        <FormLabel>{question}</FormLabel>
        <RadioGroup
          aria-label="choices"
          name="choices"
          value={id==0? answer: selectedValue}
          onChange={handleChange}
          sx={{ ":disabled": { submitted: true } }}
          >
          <FormControlLabel value="p" control={<Radio />} label="P"disabled={submitted || id=="0"}/>
          <FormControlLabel value="f" control={<Radio />} label="F" disabled={submitted || id=="0"}/>
        </RadioGroup>
      </FormControl>
      {submitted && id!="0" && (
        <Box mt={2}>
          {selectedValue === answer ? (
            <>
            <CheckMark />

            </>
          ) : (
            <>
            <CrossMark />

            </>
          )}
        </Box>
      )}
  
    </>
  );
}
