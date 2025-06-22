// AppBarComponent.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { LightMode, DarkMode, Menu } from '@mui/icons-material';

const AppBarComponent = ({ toggleTheme, mode, onMenuClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(to right, #008080, #20B2AA)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={onMenuClick} sx={{ color: '#fff', mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: '#fff',
          }}
        >
          Dhruv Muraleedharan | Full-Stack Developer
        </Typography>

        <IconButton
          onClick={toggleTheme}
          sx={{
            color: '#d0f0f0',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#fff',
            },
          }}
        >
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
