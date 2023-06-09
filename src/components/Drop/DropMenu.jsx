import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { addPoint, noPoint, addHalfPoint } from '../../features/score/scoreSlice';
import CheckMark from '../CheckMark';
import CrossMark from '../CrossMark';

export default function DropMenu({ choice1, choice2, choice3, answer, submitted, id }) {
  const [choice, setChoice] = useState('');
  const [result, setResult] = useState(null); // Track the result (check mark or cross mark)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  useEffect(() => {
    if (submitted && id != 0) {
      const isCorrect = choice === answer;
      if (isCorrect) {
        dispatch(addHalfPoint());
        setResult(<CheckMark />); 
      } else {
        dispatch(noPoint());
        setResult(<CrossMark />); 
      }
    }
  }, [choice, answer, submitted, dispatch]);

  return (
    <>
      <div style={{ display: 'inline-flex' }}>
        <FormControl sx={{ minWidth: choice?'fit-content':'6em', mb: 2, width:id==="0"&&"9em" }} size="small" >
        <InputLabel id={id} >
        {id === "0" ? answer : (!choice ? ".........." : id)}
          </InputLabel>
          <Select
            labelId={id}
            id={id}
            value={choice}
            label={id}
            onChange={handleChange}
            disabled={submitted || id==="0"}
       
            
          >
            <MenuItem value={choice1}>{choice1}</MenuItem>
            <MenuItem value={choice2}>{choice2}</MenuItem>
            <MenuItem value={choice3}>{choice3}</MenuItem>
          </Select>
        </FormControl>
        {result}
      </div>
    </>
  );
}
