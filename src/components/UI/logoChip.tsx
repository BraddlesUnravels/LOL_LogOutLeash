import React from 'react';
import { Chip, Avatar } from '@mui/material';
import avatarlol from '../../assets/avatarlol.png'



export default function LogoChip() {
    return (
        <React.Fragment>
            <Avatar 
                alt='lols'
                sx={{ height: '2em', width: '3em' }}
                src={ avatarlol }
                variant='rounded'
            />
        </React.Fragment>
    );
}