import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint, noPoint } from '../features/score/scoreSlice';

export default function TrueOrFlase({
  question,
  answer,
  submitted,
}) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const dispatch = useDispatch();
  const points = useSelector((state) => state.point.points);
  

  useEffect(() => {
    if (submitted) {
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
          value={selectedValue}
          onChange={handleChange}
          sx={{ ":disabled": { submitted: true } }}
          >
          <FormControlLabel value="p" control={<Radio />} label="P"disabled={submitted}/>
          <FormControlLabel value="f" control={<Radio />} label="F" disabled={submitted}/>
        </RadioGroup>
      </FormControl>
      {submitted && isAnswered && (
        <Box mt={2}>
          {selectedValue === answer ? (
            <CheckIcon color="primary" />
          ) : (
            <ClearIcon color="error" />
          )}
        </Box>
      )}
  
    </>
  );
}
