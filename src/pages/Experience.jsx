import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Divider,
  useTheme,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const experiences = [
  {
    icon: <WorkIcon fontSize="large" sx={{ color: '#008080' }} />,
    title: 'Web Dev Intern',
    organization: 'Manipal Institute of Technology',
    type: 'Internship',
    duration: 'Jun 2025 – Present · 1 mo',
    location: 'Manipal · Remote',
    skills: 'React.js, Spring Framework',
  },
  {
    icon: <BusinessIcon fontSize="large" sx={{ color: '#008080' }} />,
    title: 'Co-op Trainee, BSD, IT Department',
    organization: 'Jadwa Investment',
    type: 'Internship',
    duration: 'Jul 2024 – Jul 2024 · 1 mo',
    location: 'Riyadh, Saudi Arabia · On-site',
    skills: 'DBMS, Database Administration',
  },
];

const Experience = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <PageWrapper>
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Professional Experience
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    display: 'flex',
                    gap: 2,
                    borderLeft: '5px solid #20B2AA',
                    borderRadius: 3,
                    height: '100%',
                    backgroundColor: isDark ? '#1e1e1e' : '#fafafa',
                    color: isDark ? '#ffffff' : '#000000',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <Box>{exp.icon}</Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                      {exp.organization} · {exp.type}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {exp.duration}
                      <br />
                      {exp.location}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      <strong>Skills:</strong> {exp.skills}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default Experience;
