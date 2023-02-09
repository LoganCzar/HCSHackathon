import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const placesLibrary = ['places'];

export default function GoogleMapsSearch() {
    const [searchResult, setSearchResult] = useState('Result: none');

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC_5u48TQ8qeH2KnLRYEQzUwRiukIBxPwM',
        libraries: placesLibrary,
    });

    function onLoad(autocomplete) {
        setSearchResult(autocomplete);
    }

    function onPlaceChanged() {
        if (searchResult != null) {
            const place = searchResult.getPlace();
            const name = place.name;
            const status = place.business_status;
            const formattedAddress = place.formatted_address;
            // console.log(place);
            console.log(`Name: ${name}`);
            console.log(`Business Status: ${status}`);
            console.log(`Formatted Address: ${formattedAddress}`);
        } else {
            alert('Please enter text');
        }
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className='App'>
            <div id='searchColumn'>
                <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
                    <input
                        type='text'
                        placeholder='Search for parking...'
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `40px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </Autocomplete>
            </div>
        </div>
    );
}
