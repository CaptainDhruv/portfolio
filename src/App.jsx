import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Skills from './pages/Skills';

import DrawerComponent from './components/DrawerComponent';
import AppBarComponent from './components/AppBarComponent';

const App = () => {
  const [mode, setMode] = useState('dark');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                background: {
                  default: '#0a1929',
                  paper: '#112240',
                },
              }
            : {
                background: {
                  default: '#f2faff',
                  paper: '#e0f7fa',
                },
              }),
        },
        typography: {
          fontFamily: 'Poppins, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBarComponent toggleTheme={toggleTheme} mode={mode} onMenuClick={toggleDrawer} />
        <DrawerComponent open={drawerOpen} onClose={toggleDrawer} />
        <div style={{ marginTop: '64px', padding: '16px' }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
