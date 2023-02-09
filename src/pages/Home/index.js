import GoogleMapsAutocomplete from '../../components/GoogleMapsAutocomplete';
import HeaderAppBar from '../../components/HeaderAppBar';
import Hero from '../../components/Hero';

function Home() {
    return (
        <div>
            <HeaderAppBar />
            <Hero />
            <GoogleMapsAutocomplete />
            {/* <GoogleMapView /> */}
        </div>
    );
}

export default Home;
