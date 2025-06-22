import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import GitHubFloatButton from '../components/GitHubFloatButton';

const Projects = () => {
  return (
    <PageWrapper>
      <GitHubFloatButton />
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            color: 'primary.main',
            textAlign: 'center',
            mb: 4
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          {/* Portfolio Website */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={5}
              sx={{
                borderRadius: 3,
                backgroundColor: 'background.paper',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}
                >
                  Personal Portfolio Website
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify' }}
                >
                  A fully responsive multi-page portfolio built with React and Material UI.
                  Features include a permanent sidebar, animated page transitions,
                  light/dark mode toggle, and floating social buttons. The site is professionally
                  styled, mobile-friendly, and deployed on Vercel with optimized performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Django Weather App */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={5}
              sx={{
                borderRadius: 3,
                backgroundColor: 'background.paper',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}
                >
                  Django Weather App
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify' }}
                >
                  A full-stack web application using Django and OpenWeather API to fetch real-time weather data.
                  Displays current temperature, air quality index, and a 5-day weather forecast.
                  Built with a clean UI, interactive design, and backend integration for dynamic weather retrieval.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default Projects;
