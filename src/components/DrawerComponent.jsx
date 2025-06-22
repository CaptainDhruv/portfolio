import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import { Home, Folder, Description, ContactMail } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

const drawerWidth = 240;

const navItems = [
  { text: 'About', icon: <Home />, path: '/' },
  { text: 'Projects', icon: <Folder />, path: '/projects' },
  { text: 'Resume', icon: <Description />, path: '/resume' },
  { text: 'Contact', icon: <ContactMail />, path: '/contact' },
];

const DrawerComponent = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor: '#1a1a2e',
          color: '#ffffff',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: 2,
        }}
      >
        <Avatar
          alt="Profile"
          src={profileImage}
          sx={{
            width: 100,
            height: 100,
            border: '3px solid #d4145a',
            boxShadow: '0 0 10px #93278f',
            marginBottom: 1,
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffd6e8' }}>
          Dhruv's Portfolio
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: '#444' }} />

      <List>
        {navItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => navigate(path)}
              sx={{
                '&:hover': {
                  background: 'linear-gradient(to right, #d4145a, #93278f)',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#f3c6ff' }}>{icon}</ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: '#ffffff', fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
