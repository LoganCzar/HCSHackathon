import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Hero() {
    return (
        <Box sx={{ marginY: 8 }}>
            <Typography variant='h5' color='gray'>
                Let's find the best parking space
            </Typography>
        </Box>
    );
}
