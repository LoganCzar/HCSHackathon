import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import Service from '../../../utils/services/service';
import ParkingLotCard from '../ParkingLotCard';

export default function ParkingLotCardList({ city }) {
    const [parkingLots, setParkingLots] = useState([]);

    useEffect(() => {
        retrieveParkingLots();
    }, []);

    const retrieveParkingLots = () => {
        Service.getAll()
            .then((res) => {
                setParkingLots(res.data.data);
                // console.log(res.data.data[0].email);
            })
            .then(console.log(parkingLots))
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <Grid2 container spacing={2}>
                {parkingLots.map((lot) => (
                    <Grid2 key={lot.id}>
                        <ParkingLotCard
                            key={lot.id}
                            name={lot.first_name}
                            email={lot.email}
                            img={lot.avatar}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
}
