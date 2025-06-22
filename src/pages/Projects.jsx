import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import GitHubFloatButton from '../components/GitHubFloatButton';

const Projects = () => {
  return (
    <PageWrapper>
      <GitHubFloatButton />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Personal Portfolio Website
                </Typography>
                <Typography variant="body1">
                  A fully responsive multi-page portfolio built with React and Material UI. It includes a permanent sidebar, animated page transitions, dark/light mode toggle, and floating social buttons. Hosted and optimized for performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Django Weather App
                </Typography>
                <Typography variant="body1">
                  A weather forecast web application built using Django and OpenWeather API. Shows live weather data for cities, including temperature, AQI, and 5-day forecast with an interactive UI.
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
