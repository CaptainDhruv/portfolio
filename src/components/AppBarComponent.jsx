import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { LightMode, DarkMode, Menu } from '@mui/icons-material';

const AppBarComponent = ({ toggleTheme, mode, onMenuClick }) => {
  const isDark = mode === 'dark';
  const textColor = isDark ? '#ffffff' : '#004d4d'; // Darker for light mode
  const iconColor = isDark ? '#d0f0f0' : '#004d4d';

  return (
    <AppBar
      position="fixed"
      sx={{
        background: isDark
          ? 'linear-gradient(to right, #004d4d, #007373)'
          : 'linear-gradient(to right, #a7ffeb, #e0ffff)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton edge="start" onClick={onMenuClick} sx={{ color: iconColor }}>
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
            color: textColor,
          }}
        >
          Dhruv Muraleedharan | Full-Stack Developer
        </Typography>

        <IconButton
          onClick={toggleTheme}
          sx={{
            color: iconColor,
            transition: 'color 0.3s ease',
            '&:hover': {
              color: isDark ? '#ffffff' : '#008080',
            },
          }}
        >
          {isDark ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
