import { Marker } from '@react-google-maps/api';
import React from 'react';

export default function MapMarker({ lat, lng }) {
    const position = {
        lat: lat,
        lng: lng,
    };

    const onLoad = (marker) => {
        console.log('marker: ', marker);
    };
    return <Marker onLoad={onLoad} position={position} />;
}
