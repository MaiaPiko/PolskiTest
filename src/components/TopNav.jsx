import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function TopNav() {
 return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"transparent", boxShadow:0}}>
        <Toolbar>
         
           
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"black" }}>
          Rozumienie Tekstów Pisanych
          </Typography>

          <Button >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default TopNav;