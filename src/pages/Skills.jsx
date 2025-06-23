import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  Box,
} from '@mui/material';
import PageWrapper from '../components/PageWrapper';

const skillData = [
  {
    title: 'Web Development',
    skills: [
      'React', 'HTML', 'PostgreSQL', 'MySQL', 'Oracle',
      'Microsoft SQL Server', '.NET', 'Spring Framework',
      'Spring Boot', 'Django', 'Maven', 'SQL', 'JavaScript',
    ],
  },
  {
    title: 'Web Development Tools',
    skills: [
      'VS Code', 'Microsoft Visual Studio', 'Spyder',
      'Postman', 'Git', 'GitHub',
    ],
  },
  {
    title: 'Programming Languages',
    skills: ['C', 'Python', 'Java', 'C#'],
  },
];

const Skills = () => {
  const theme = useTheme();

  return (
    <PageWrapper>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: 'primary.main',
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Skills
        </Typography>

        {skillData.map((section, index) => (
          <Card
            key={index}
            elevation={4}
            sx={{
              mb: 4,
              borderRadius: 3,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: 'secondary.main',
                  fontFamily: 'Poppins, sans-serif',
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>

              <Grid container spacing={2}>
                {section.skills.map((skill, i) => (
                  <Grid item xs={6} sm={4} key={i}>
                    <Box
                      sx={{
                        padding: '8px 12px',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        fontFamily: 'Poppins, sans-serif',
                        color: theme.palette.text.primary,
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundColor:
                            theme.palette.mode === 'dark'
                              ? '#004d4d'
                              : '#b2fefa',
                          color: theme.palette.mode === 'dark'
                            ? '#aaf0d1'
                            : '#004d4d',
                          cursor: 'default',
                        },
                      }}
                    >
                      • {skill}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Container>
    </PageWrapper>
  );
};

export default Skills;
