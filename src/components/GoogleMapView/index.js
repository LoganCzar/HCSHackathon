import {
    GoogleMap,
    LoadScript,
    StandaloneSearchBox,
} from '@react-google-maps/api';
import React, { useState } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyC_5u48TQ8qeH2KnLRYEQzUwRiukIBxPwM';

const places = ['places'];

const containerStyle = {
    width: '0px',
    height: '0px',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

export default function GoogleMapView() {
    const [searchBox, setSearchBox] = useState(null);

    const handleLoad = (ref) => setSearchBox(ref);
    const handlePlacesChanged = () => {
        const place = searchBox.getPlaces();
        const placeObj = place[0].address_components;
        const city = placeObj[0].long_name;
        // console.log(searchBox.getPlaces());
        console.log(city);
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={places}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {/* Child components, such as markers, info windows, etc. */}
                <StandaloneSearchBox
                    onLoad={handleLoad}
                    onPlacesChanged={handlePlacesChanged}
                >
                    <input
                        type='text'
                        placeholder='Search for parking...'
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: 'absolute',
                            left: '50%',
                            marginLeft: '-120px',
                        }}
                    />
                </StandaloneSearchBox>
            </GoogleMap>
        </LoadScript>
    );
}
