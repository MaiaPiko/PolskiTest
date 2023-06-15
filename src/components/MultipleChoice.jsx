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
import { customRadio } from './Styles';
import { green } from '@mui/material/colors';

export default function MultipleChoice({
  question,
  choiceA,
  choiceB,
  choiceC,
  answer,
  submitted,
  id
  
}) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const dispatch = useDispatch();
  const points = useSelector((state) => state.point.points);
  const radioColor = green[700];
  const className = id == "0" ? "green-text" : "";
  const isCorrect = selectedValue === answer;

  useEffect(() => {
    if (submitted && !id=="0") {
 
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
        <FormLabel sx={{ "&.Mui-focused": { color: green[700] }, pb:1 }}>{question}</FormLabel>
        <RadioGroup
          aria-label="choices"
          name="choices"
          value={id===0? answer: selectedValue}
          onChange={handleChange}
          sx={{ ":disabled": { submitted: true || id=="0"}, '&.Mui-checked': {
            color: 'green',
            backgroundColor:'green'
          }, }}
          disabled = {id==="0"}
          className={className}
          >
           <div style={{display:"flex"}}>
          <FormControlLabel value="a" control={<Radio />} label={choiceA} disabled={submitted || id=="0"} sx={{"& .Mui-checked": {color:green[700]}, paddingBottom:1}}/>
          <div style={{marginTop:"10px"}}>

          {submitted && selectedValue === "a" && isCorrect ? <CheckMark sx={{mt:10}}/> : null}
          {submitted && selectedValue === "a" && !isCorrect ? <CrossMark sx={{mt:10}}/> : null}
          </div>
          </div>
          <div style={{display:"flex"}}>
          
          <FormControlLabel value="b" control={<Radio />} label={choiceB} disabled={submitted || id=="0"} sx={{"& .Mui-checked": {color: green[700]}, paddingBottom:1}}/>
          <div style={{marginTop:"10px"}}>

          {submitted && selectedValue === "b" && isCorrect  ? <CheckMark sx={{mt:10}}/> : null}
          {submitted && selectedValue === "b" && !isCorrect  ? <CrossMark sx={{mt:10}}/> : null}
          
          </div>
          </div>
          <div style={{display:"flex"}}>
          <FormControlLabel value="c" control={<Radio />} label={choiceC} disabled={submitted || id=="0"} sx={{"& .Mui-checked": {color: green[700]}, paddingBottom:1}}/>
          <div style={{marginTop:"10px"}}>

          {submitted && selectedValue === "c" && isCorrect   ? <CheckMark sx={{mt:10}}/> : null}
          {submitted && selectedValue === "c" && !isCorrect ? <CrossMark sx={{mt:10}}/> : null}
          {submitted && selectedValue !== "a" && selectedValue !=="b" && selectedValue !== "c" && id !="0" ? <CrossMark sx={{mt:0}}/> : null}
          </div>
          </div>
        </RadioGroup>
      </FormControl>
      {/* {submitted && !id=="0" &&(
        <Box ml={2} sx={{pl:4}}>
          {selectedValue === answer ? (
            <CheckMark />
          ) : (
            <CrossMark/>
          )}
        </Box>
      )} */}
  
    </>
  );
}
