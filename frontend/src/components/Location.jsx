import { useEffect } from 'react';
import axios from 'axios';

const Location = () => {
  const openCageApiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your OpenCage API Key

  // Get current location (lat, long) and address
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);

        // Log address from latitude and longitude using OpenCage API
        fetchAddressFromCoordinates(lat, lon);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Reverse Geocoding: Get address from latitude and longitude using OpenCage API
  const fetchAddressFromCoordinates = async (lat, lon) => {
    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${"cfd1196570b34075bafd616e18abf585"}`;
      const response = await axios.get(url);
      if (response.data.results.length > 0) {
        const address = response.data.results[0].formatted;

      } else {
        console.error('Address not found.');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  useEffect(() => {
    // Get current location when the component mounts
    getCurrentLocation();
  }, []);

  return (
    <div>
      <h2>Location Logger</h2>
      <p>Check the console for the current latitude, longitude, and address.</p>
    </div>
  );
};

export default Location;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';  // Import Leaflet
import 'leaflet/dist/leaflet.css';

const LocationLogger = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: ''
  });

  const openCageApiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your OpenCage API Key

  // Get current location (lat, long) and address
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(Latitude: ${lat}, Longitude: ${lon});

        setLocation({ latitude: lat, longitude: lon });

        // Log address from latitude and longitude using OpenCage API
        fetchAddressFromCoordinates(lat, lon);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Reverse Geocoding: Get address from latitude and longitude using OpenCage API
  const fetchAddressFromCoordinates = async (lat, lon) => {
    try {
      const url = https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${openCageApiKey};
      const response = await axios.get(url);
      if (response.data.results.length > 0) {
        const address = response.data.results[0].formatted;
        setLocation((prevLocation) => ({
          ...prevLocation,
          address: address
        }));
      } else {
        console.error('Address not found.');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  useEffect(() => {
    // Get current location when the component mounts
    getCurrentLocation();
  }, []);

  return (
    <div>
      <h2>Location Logger</h2>
      <p>Check the console for the current latitude, longitude, and address.</p>

      {/* Map Section */}
      <div style={{ height: '500px', marginTop: '20px' }}>
        {location.latitude && location.longitude && (
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>
                {location.address || 'No address found'}
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default LocationLogger;