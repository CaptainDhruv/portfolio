import React from 'react';
import { Box, Toolbar } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <Box component="main" sx={{ paddingX: 2 }}>
      {/* Spacer to push content below AppBar */}
      <Toolbar />
      {children}
    </Box>
  );
};

export default PageWrapper;
