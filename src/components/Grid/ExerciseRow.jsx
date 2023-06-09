import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Blank from '../FillinTheBlanks/Blank';

export default function ExerciseRow({ id, choice, sentence, answer, reset, example=false, submitted }) {
  return (
    <TableRow sx={{display:"flex"}}>
      <TableCell component="th" scope="row" >
        {id}
      </TableCell>
      <TableCell sx={{minWidth:"fit-content"}}>
      <Blank id= {id} submitted={submitted} answer={answer} reset={reset} example={example}/>
      </TableCell>
      <TableCell >{sentence}</TableCell>
    </TableRow>
  );
}
