import React from 'react'

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';



export default function TextCard({text}){
    return(
        <Card className='small'>
            <Box sx={{p:2, display:'flex', alignContent:"center"}}>
                {text}
            </Box>

        </Card>
    )
}