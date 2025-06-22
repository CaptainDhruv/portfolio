import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Box,
  Paper,
  Divider
} from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import LinkedInFloatButton from '../components/LinkedInFloatButton';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <PageWrapper>
      <LinkedInFloatButton />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Profile Photo */}
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <Avatar
            alt="Dhruv Muraleedharan"
            src={profileImage}
            sx={{ width: 160, height: 160 }}
          />
        </Box>

        {/* About Description */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Hi, I'm Dhruv Muraleedharan!
            </Typography>

            <Typography variant="body1" paragraph>
              I'm a final-year Computer Science Engineering student at Manipal Institute of Technology (MIT), Manipal — one of India’s most prestigious engineering institutions known for its academic excellence and vibrant tech culture.
            </Typography>

            <Typography variant="body1" paragraph>
              I’ve developed a strong foundation in core computer science subjects such as Data Structures and Algorithms, Operating Systems, Databases, and Computer Networks. Over time, I’ve gained practical experience in full-stack web development, software design, and modern DevOps practices.
            </Typography>

            <Typography variant="body1" paragraph>
              I’m proficient with a wide range of technologies and frameworks including:
              <br />
              <strong>.NET Framework, React, Django, Spring Framework, Maven, Microsoft SQL Server, MySQL, PostgreSQL</strong>.
            </Typography>

            <Typography variant="body1" paragraph>
              I've applied these skills in real-world projects—ranging from REST APIs and full-stack apps to cloud-based deployments and automation tools. I take pride in solving real problems through clean, efficient, and scalable code.
            </Typography>

            <Typography variant="body1" paragraph>
              I'm currently exploring advanced backend development using Spring Boot and working on containerization and deployment using Docker and Kubernetes.
            </Typography>

            <Typography variant="body1" paragraph>
              Outside of coding, I enjoy mentoring juniors, contributing to open-source, and staying updated with the latest in software and AI. I’m excited to step into the industry and contribute meaningfully while continuing to grow as a developer.
            </Typography>
          </Grid>

          {/* Work Experience Section */}
          <Grid item xs={12}>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Experience
            </Typography>

            {/* Internship 1 */}
            <Paper elevation={2} sx={{ p: 2, mb: 2, minHeight: 150 }}>
              <Typography variant="h6">Web Dev Intern</Typography>
              <Typography variant="subtitle2">
                Manipal Institute of Technology · Internship
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jun 2025 – Present · 1 mo  
                <br />
                Manipal · Remote
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <strong>Skills:</strong> React.js, Spring Framework
              </Typography>
            </Paper>

            {/* Internship 2 */}
            <Paper elevation={2} sx={{ p: 2, minHeight: 150 }}>
              <Typography variant="h6">Co-op Trainee, BSD, IT Department</Typography>
              <Typography variant="subtitle2">
                Jadwa Investment · Internship
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jul 2024 – Jul 2024 · 1 mo  
                <br />
                Riyadh, Saudi Arabia · On-site
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <strong>Skills:</strong> DBMS, Database Administration
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default About;
