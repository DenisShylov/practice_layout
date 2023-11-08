import { CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { cache } from './Shared/Cache';
import { theme } from './Theme/Theme';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CacheProvider value={cache}></CacheProvider>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
