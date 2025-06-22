import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const GitHubFloatButton = () => {
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
            bottom: 80,
            right: 20,
          },
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          startIcon={<GitHubIcon />}
          href="https://github.com/CaptainDhruv"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </Box>
    </motion.div>
  );
};

export default GitHubFloatButton;
