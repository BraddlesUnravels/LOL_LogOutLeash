import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Helmet } from 'react-helmet-async';;
import { Box, Container, Grid } from '@mui/material'
import { useThemeMode } from './theme';

const styling = {
    height: '15em', 
    width: '30em', 
    color: '#e1e1e1',
    borderRadius: '1em',
    background: 'linear-gradient(to right bottom, #268CF2, #123C5E)'
}



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
            <Box className="App" sx={ styling }>
                <Grid container sx={{ flexGrow: 1 }}>
                    loling already
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default App;
