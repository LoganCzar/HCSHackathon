import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function VehicleTypeCard() {
    return (
        <Card
            sx={{
                maxWidth: 100,
            }}
        >
            <CardActionArea>
                <CardMedia
                    component='img'
                    image='https://i.fbcd.co/products/resized/resized-1500-1000/1d83834ba8fa525bbff21a3f201cc93870cf12a7715bd8cf12a426fc71c15005.webp'
                    alt='car icon'
                />
                <CardContent sx={{ background: 'gray' }}>
                    <Typography
                        gutterBottom
                        variant='h6'
                        component='div'
                        textAlign='center'
                        margin='auto'
                        color='white'
                    >
                        Car
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
