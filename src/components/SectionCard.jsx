import React from 'react'
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';



export default function SectionCard({children}){
    return(
    <Card className="paper" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my:3,
     borderRadius:5}}>
        {children}
    </Card>
    )
}