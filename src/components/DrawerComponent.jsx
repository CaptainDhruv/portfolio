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
  useTheme,
} from '@mui/material';
import {
  Home,
  Folder,
  Description,
  ContactMail,
  Work,
} from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

const drawerWidth = 240;

const navItems = [
  { text: 'About', icon: <Home />, path: '/' },
  { text: 'Projects', icon: <Folder />, path: '/projects' },
  { text: 'Resume', icon: <Description />, path: '/resume' },
  { text: 'Contact', icon: <ContactMail />, path: '/contact' },
  { text: 'Experience', icon: <Work />, path: '/experience' },
  { text: 'Skills', icon: <CodeIcon />, path: '/skills' },
];

const DrawerComponent = ({ open, onClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#003c3c' : '#e0ffff',
          color: theme.palette.mode === 'dark' ? '#ffffff' : '#004d4d',
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
            border: '3px solid #20B2AA',
            boxShadow: '0 0 10px #008080',
            marginBottom: 1,
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Dhruv's Portfolio
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: theme.palette.divider }} />

      <List>
        {navItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(path);
                onClose();
              }}
              sx={{
                '&:hover': {
                  background:
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(to right, #006666, #009999)'
                      : 'linear-gradient(to right, #b2fefa, #e0ffff)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: theme.palette.mode === 'dark' ? '#aaf0d1' : '#008080',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#fff' : '#004d4d',
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
