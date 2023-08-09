import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Helmet } from 'react-helmet-async';;
import { Box, Container, Grid } from '@mui/material'
import { useThemeMode } from './theme';
import BaseLayout from './components/UI/baseLayout';

function App() {
  
    const [ theme ] = useThemeMode();
  
  
    return (
        <ThemeProvider theme={ theme } >
            <CssBaseline />
            <Helmet>
                <meta charSet="utf-8" />
                <title>...just for lols</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Helmet>
            <BaseLayout>
                Still on the lols
            
            </BaseLayout>
        </ThemeProvider>
    );
}

export default App;
