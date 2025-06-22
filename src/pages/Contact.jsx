import React, { useState } from 'react';
import {
  Container,
  Typography,
  Snackbar,
  IconButton,
  Box,
  Paper
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('11b31249dhruvm@gmail.com');
    setSnackbarOpen(true);
  };

  return (
    <PageWrapper>
      <Container maxWidth="md">
        <Box
          mt={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Typography variant="h4" gutterBottom>
            To contact me, these are my details:
          </Typography>

          <Paper elevation={4} sx={{ p: 5, mt: 4, width: '100%', maxWidth: 600 }}>
            <Typography variant="h5" gutterBottom>
              📞 Phone
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              +91-8971743204
            </Typography>

            <Typography variant="h5" gutterBottom>
              ✉️ Email
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4" color="primary">
                11b31249dhruvm@gmail.com
              </Typography>
              <IconButton
                size="large"
                color="primary"
                onClick={handleEmailCopy}
                sx={{ ml: 1 }}
              >
                <ContentCopyIcon />
              </IconButton>
            </Box>
          </Paper>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={() => setSnackbarOpen(false)}
            message="Email copied!"
          />
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default Contact;
