// Darkmode.js

import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Switch } from '@mui/material';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Define the light and dark themes using Material-UI's createTheme function
  const lightTheme = createTheme({
    palette: {
      type: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* CssBaseline is used to apply global CSS reset */}
      <CssBaseline />
      <div>
        <h1>Dark Mode Example</h1>
        {/* Switch component to toggle dark mode */}
        <Switch checked={darkMode} onChange={handleDarkModeToggle} />
      </div>
    </ThemeProvider>
  );
};

export default DarkMode;
