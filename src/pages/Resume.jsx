import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import PageWrapper from '../components/PageWrapper';

const Resume = () => (
  <PageWrapper>
    <Container>
      <Box mt={4} textAlign="center">
        <Typography variant="h4" gutterBottom>Resume</Typography>
        <Typography variant="body1" paragraph>
          Click the button below to download my resume.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Button>
      </Box>
    </Container>
  </PageWrapper>
);

export default Resume;
