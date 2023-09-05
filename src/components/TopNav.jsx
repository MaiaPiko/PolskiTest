import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import QuizIcon from '@mui/icons-material/Quiz';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

function TopNav() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery('(max-width:1600px)');

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const list = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // height: '40%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
         <Divider sx={{mt:5}}>

<Link to="/">
  <HomeIcon className='nav link' sx={{  fontSize:"1.8em" }}/>
</Link>

</Divider>
      <Box
        sx={{
          width: 250,
          margin: 'auto', // Center horizontally
        }}
      >
    
        <Divider className='nav'>
          <h3 >Testy</h3>
        </Divider>
        <List>
          {['Test 1', 'Test 2', 'Test 3'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={`/test/${index + 1}`}>
                <ListItemIcon>
                  <QuizIcon className='nav link'/>
                </ListItemIcon>
                <ListItemText primary={text} className='nav' />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
         
     
      </Box>
    </div>
  );

  return (
    

    <Box sx={{ flexGrow: 1, p: 2, height:50 }}>
      <AppBar
        position="absolute"
        sx={{ top: -10, backgroundColor: 'transparent', boxShadow: 'none', mx: 0 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ ml: 2 , mt:1, flexGrow: 1 }}>
            <Link to="/">
              <HomeIcon sx={{  ml: 2 }} className='text link'/>
            </Link>
          </Typography>
          <IconButton onClick={toggleDrawer(true)} sx={{mr:   2}}>
            <MenuIcon className='text link'/>
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default TopNav;
