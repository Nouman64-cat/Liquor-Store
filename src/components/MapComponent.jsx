import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: 38.893170515731484, // Latitude of the location
    lng: -104.75270064818878, // Longitude of the location
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB5Z_I49P7AK88ngjPDGs0vP0wYz10S8ac">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
