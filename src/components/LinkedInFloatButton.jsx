import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const LinkedInFloatButton = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 100,
          right: 24,
          zIndex: 1300,
          [theme.breakpoints.down('sm')]: {
            top: 'auto',
            bottom: 20,
            right: 20,
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/dhruv-muraleedharan"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </Box>
    </motion.div>
  );
};

export default LinkedInFloatButton;
