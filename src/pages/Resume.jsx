import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import PageWrapper from '../components/PageWrapper';

const Resume = () => (
  <PageWrapper>
    <Container maxWidth="md">
      <Box
        mt={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            borderRadius: 3,
            textAlign: 'center',
            width: '100%',
            maxWidth: 600,
            backgroundColor: 'background.paper',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              color: 'primary.main',
            }}
          >
            Resume
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              marginBottom: 3,
            }}
          >
            Click the button below to view or download my latest resume.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 500,
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'none',
              paddingX: 4,
              paddingY: 1.2,
            }}
          >
            Download Resume
          </Button>
        </Paper>
      </Box>
    </Container>
  </PageWrapper>
);

export default Resume;
