import React from 'react'

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';



export default function TextCard({text, id}){
    const className = id == "0" ? "green-text" : "text";

    return(
        <Card className='small'>
            <Box sx={{p:2, display:'flex', alignContent:"center"}}>
                <p className={className}>
                {text}
                </p>
            </Box>

        </Card>
    )
}