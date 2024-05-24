import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "./location.css"

const Location = () => {
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };

  const handleGeocode = async () => {
    const apiKey = 'AIzaSyDnInA_iYp2HPPe5OmAHETryfoEmeFvl0Y'; 
    const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

    try {
      const response = await axios.get(baseUrl, {
        params: {
          address: address,
          key: apiKey,
        },
      });

      if (response.data.status === 'OK') {
        const results = response.data.results[0];
        const location = results.geometry.location;
        setLocation(location);
        setError('');
      } else {
        setError(`Error: ${response.data.status}`);
        setLocation(null);
      }
    } catch (error) {
      setError('An error occurred while fetching the geolocation data.');
      setLocation(null);
    }
  };

  return (
    <div className='googlemap'>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter address"
      />
      <button onClick={handleGeocode}>Get Geolocation</button>
      {location && (
        <LoadScript googleMapsApiKey="AIzaSyDnInA_iYp2HPPe5OmAHETryfoEmeFvl0Y">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Location;