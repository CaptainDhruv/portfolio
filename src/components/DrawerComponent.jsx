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
          backgroundColor: '#004d4d', // Deep teal background
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
            border: '3px solid #20B2AA', // Light teal border
            boxShadow: '0 0 10px #008080', // Classic teal glow
            marginBottom: 1,
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#aaf0d1' }}>
          Dhruv's Portfolio
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: '#006666' }} />

      <List>
        {navItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => navigate(path)}
              sx={{
                '&:hover': {
                  background: 'linear-gradient(to right, #008080, #20B2AA)', // Teal gradient on hover
                },
              }}
            >
              <ListItemIcon sx={{ color: '#aaf0d1' }}>{icon}</ListItemIcon>
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
