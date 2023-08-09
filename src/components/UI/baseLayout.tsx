import React, { ReactNode } from 'react';
import { Box, Grid } from '@mui/material'
import Header from './header';

const styling = {
    height: '20em', 
    width: '40em', 
    color: '#e1e1e1',
    background: 'linear-gradient(to right bottom, #268CF2, #123C5E)',
    padding: '0.3em 0.5em 0.3em 0.5em'
}

interface props {
    children?: ReactNode
}

export default function BaseLayout( { children, ...props }: props ) {


    return (
        <Box sx={ styling }>
            <Header />
            <Grid container sx={{ flexGrow: 1 }}>
                { children }
            </Grid>
        </Box>
    );
}