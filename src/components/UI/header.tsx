import React from 'react';
import { Box, Paper, Container, Grid, Typography } from '@mui/material'
import LogoChip from './logoChip';

export default function Header() {

    return (
        <Container component={ Paper } sx={{ height: '2.5em', width: '100%', background: 'transparent' }} elevation={3}>
            <Grid container columns={ 12 }>
                <Grid item xs={ 6 } justifyContent='flex-start'>
                    <LogoChip />
                </Grid>
                <Grid item xs={ 6 } justifyContent='flex-end'>
                    <Typography variant='h6'>Just for Lols</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}