import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

const AppBarComponent = ({ toggleTheme, mode }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(to right, #d4145a, #93278f)', // Magenta to Violet
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            color: '#ffd6e8', // Soft pastel pink
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
