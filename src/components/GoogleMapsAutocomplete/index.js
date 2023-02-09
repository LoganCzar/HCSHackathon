import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { debounce } from '@mui/material/utils';
import parse from 'autosuggest-highlight/parse';
import * as React from 'react';
import ParkingLotCardList from '../ParkingLot/ParkingLotCardList';

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = 'AIzaSyC_5u48TQ8qeH2KnLRYEQzUwRiukIBxPwM';

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };

export default function GoogleMapsAutocomplete() {
    const [city, setCity] = React.useState(null);
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);

    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
                document.querySelector('head'),
                'google-maps'
            );
        }

        loaded.current = true;
    }

    const fetch = React.useMemo(
        () =>
            debounce((request, callback) => {
                autocompleteService.current.getPlacePredictions(
                    request,
                    callback
                );
            }, 400),
        []
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && window.google) {
            autocompleteService.current =
                new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <div>
            <Autocomplete
                id='google-map-demo'
                sx={{ width: 400 }}
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.description
                }
                filterOptions={(x) => x}
                options={options}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={value}
                noOptionsText='No locations'
                onChange={(event, newValue) => {
                    setOptions(newValue ? [newValue, ...options] : options);
                    setValue(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    setCity(newInputValue.split(', ')[0]);
                }}
                renderInput={(params) => (
                    <div style={{ display: 'flex' }}>
                        <TextField
                            {...params}
                            label='Search for parking'
                            fullWidth
                        />
                        <Button
                            sx={{ marginLeft: 1 }}
                            variant='contained'
                            onClick={() => {
                                console.log(city);
                            }}
                        >
                            Search
                        </Button>
                    </div>
                )}
                renderOption={(props, option) => {
                    const matches =
                        option.structured_formatting
                            .main_text_matched_substrings || [];

                    const parts = parse(
                        option.structured_formatting.main_text,
                        matches.map((match) => [
                            match.offset,
                            match.offset + match.length,
                        ])
                    );

                    return (
                        <li {...props}>
                            <Grid container alignItems='center'>
                                <Grid item sx={{ display: 'flex', width: 44 }}>
                                    <LocationOnIcon
                                        sx={{ color: 'text.secondary' }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    sx={{
                                        width: 'calc(100% - 44px)',
                                        wordWrap: 'break-word',
                                    }}
                                >
                                    {parts.map((part, index) => (
                                        <Box
                                            key={index}
                                            component='span'
                                            sx={{
                                                fontWeight: part.highlight
                                                    ? 'bold'
                                                    : 'regular',
                                            }}
                                        >
                                            {part.text}
                                        </Box>
                                    ))}

                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        {
                                            option.structured_formatting
                                                .secondary_text
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </li>
                    );
                }}
            />
            <div style={{ marginTop: '60px' }}>
                <ParkingLotCardList city={city} />
            </div>
        </div>
    );
}
