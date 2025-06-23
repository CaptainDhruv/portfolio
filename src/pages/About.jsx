import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Box,
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

        {/* About Header */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: 'primary.main',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '1.8rem', sm: '2.2rem' },
            textAlign: 'center',
          }}
        >
          Hi, I'm Dhruv Muraleedharan!
        </Typography>

        {/* About Description */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {[
              `I'm a final-year Computer Science Engineering student at Manipal Institute of Technology (MIT), Manipal — one of India’s most prestigious engineering institutions known for its academic excellence and vibrant tech culture.`,
              `I’ve developed a strong foundation in core computer science subjects such as Data Structures and Algorithms, Operating Systems, Databases, and Computer Networks. Over time, I’ve gained practical experience in full-stack web development, software design, and modern DevOps practices.`,
              `I’m proficient with a wide range of technologies and frameworks including:`,
              `.NET Framework, React, Django, Spring Framework, Maven, Microsoft SQL Server, MySQL, PostgreSQL.`,
              `I've applied these skills in real-world projects—ranging from REST APIs and full-stack apps to cloud-based deployments and automation tools. I take pride in solving real problems through clean, efficient, and scalable code.`,
              `I'm currently exploring advanced backend development using Spring Boot and working on containerization and deployment using Docker and Kubernetes.`,
              `Outside of coding, I enjoy mentoring juniors, contributing to open-source, and staying updated with the latest in software and AI. I’m excited to step into the industry and contribute meaningfully while continuing to grow as a developer.`,
            ].map((text, i) => (
              <Typography
                key={i}
                variant="body1"
                paragraph
                sx={{
                  textAlign: 'justify',
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  fontFamily: 'Poppins, sans-serif',
                  color: 'text.primary',
                }}
              >
                {i === 3 ? <strong>{text}</strong> : text}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default About;
