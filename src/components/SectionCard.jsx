import React from 'react'
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Card from '@mui/material/Card';



export default function SectionCard({children}){
    const matches = useMediaQuery('(max-width:700px)');

    return(

<Card
  className="paper"
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    my: 3,
    borderRadius: 5,
    width: matches ? '95vw' : 'auto',
    maxWidth: matches ? '95vw' : 'auto',
    marginX: matches ? '-16px' : 0,
    paddingX: matches ? '16px' : 0,
  }}
>
  {children}
</Card>
    )
}