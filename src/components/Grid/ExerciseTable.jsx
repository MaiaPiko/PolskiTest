import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ExerciseTable({rows}){
    return(
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
  
      <TableBody>
        {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );

}