import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from 'react';
import VehicleTypeCard from '../VehicleTypeCard';

export default function VehicleTypeCardList() {
    return (
        <Grid2 container spacing={2}>
            <Grid2>
                <VehicleTypeCard />
            </Grid2>
            <Grid2>
                <VehicleTypeCard />
            </Grid2>
            <Grid2>
                <VehicleTypeCard />
            </Grid2>
            <Grid2>
                <VehicleTypeCard />
            </Grid2>
        </Grid2>
    );
}
