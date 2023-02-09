import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ParkingLotCard({ name, email, img }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='140'
                    // image={require('../../assets/images/cards/parking-lot.jpg')}
                    image={img}
                    alt='parking lot'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
