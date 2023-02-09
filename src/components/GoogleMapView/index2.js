import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyC_5u48TQ8qeH2KnLRYEQzUwRiukIBxPwM';

const options = {
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER, // 'right-center' ,
        // ...otherOptions
    },
};

export default function GoogleMapView2() {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY, // ,
        // ...otherOptions
    });

    const renderMap = () => {
        // wrapping to a function is useful in case you want to access `window.google`
        // to eg. setup options or create latLng object, it won't be available otherwise
        // feel free to render directly if you don't need that
        const onLoad = useCallback(function onLoad(mapInstance) {
            // do something with map Instance
        });
        return (
            <GoogleMap options={options} onLoad={onLoad}>
                {
                    // ...Your map components
                }
            </GoogleMap>
        );
    };

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    // return isLoaded ? renderMap() : <Spinner />;
    return isLoaded ? renderMap() : <h1>Oops not working</h1>;
}
