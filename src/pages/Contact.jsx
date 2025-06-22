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
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              color: 'primary.main'
            }}
          >
            To contact me, these are my details:
          </Typography>

          <Paper
            elevation={5}
            sx={{
              p: 5,
              mt: 4,
              width: '100%',
              borderRadius: 4,
              backgroundColor: 'background.paper',
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mb: 2 }}
            >
              📞 Phone
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              +91-8971743204
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              ✉️ Email
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={1}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', sm: '1.8rem' }
                }}
              >
                11b31249dhruvm@gmail.com
              </Typography>
              <IconButton
                size="large"
                color="primary"
                onClick={handleEmailCopy}
                sx={{
                  ml: 1,
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#00bcd4' }
                }}
              >
                <ContentCopyIcon fontSize="large" />
              </IconButton>
            </Box>
          </Paper>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={() => setSnackbarOpen(false)}
            message="Email copied to clipboard!"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          />
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default Contact;
