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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import QuizIcon from '@mui/icons-material/Quiz';

function TopNav() {
  const [open, setOpen] = useState(false);

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
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider>
        <p>Testy</p>
      </Divider>
      <List>
        {['Test 1', 'Test 2', 'Test 3', 'About'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/test/${index + 1}`}>
              <ListItemIcon>
                <QuizIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <AppBar
        position="absolute"
        sx={{ top: -10, backgroundColor: 'transparent', boxShadow: 'none', mx:0 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <HomeIcon sx={{ color: 'gray', ml:2 }} />
            </Link>
          </Typography>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
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
