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
import { green } from '@mui/material/colors';


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
  const radioColor = green[700]
  const isCorrect = selectedValue === answer;

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
            <div style={{display:"flex"}}>
          <FormControlLabel value="p" control={<Radio />} label="P"disabled={submitted || id=="0"} sx={{  "& .Mui-checked": {color:radioColor}}}/>
          <div style={{marginTop:"10px"}}>
          {submitted && selectedValue === "p" && isCorrect  ? <CheckMark sx={{mt:4}}/> : null}
          {submitted && selectedValue === "p" && !isCorrect  ? <CrossMark sx={{mt:4}}/> : null}
          </div>
          </div>
          <div style={{display:"flex"}}>
          <FormControlLabel value="f" control={<Radio />} label="F" disabled={submitted || id=="0"} sx={{  "& .Mui-checked": {color:radioColor}}}/>
          <div style={{marginTop:"10px"}}>
          {submitted && selectedValue === "f" && isCorrect  ? <CheckMark sx={{mt:5}}/> : null}
          {submitted && selectedValue === "f" && !isCorrect  ? <CrossMark sx={{mt:5}}/> : null}
          {submitted && selectedValue !== "f" && selectedValue !=="p" && id !="0"  ? <CrossMark sx={{mt:0}}/> : null}
          </div>
          </div>
        </RadioGroup>
      </FormControl>
      {/* {submitted && id!="0" && (
        <Box ml={3}>
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
      )} */}
  
    </>
  );
}
