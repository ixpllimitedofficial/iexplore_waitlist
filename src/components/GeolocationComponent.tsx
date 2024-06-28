"use client";

import { useEffect, useState } from "react";
import { Button } from "./UI/button";

const GeolocationComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [status, setStatus] = useState('Click the button to get your location');

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating…');
      navigator.geolocation.getCurrentPosition(success, error, { timeout: 10000 });
    }
  };

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setStatus('Location found');
    setLocation({ latitude, longitude });
  };

  const error = (err: any) => {
    console.error(err);
    if (err.code === 1) {
      setStatus('Permission denied. Please enable location access in your browser settings and try again.');
    } else if (err.code === 2) {
      setStatus('Position unavailable. Please try again.');
    } else if (err.code === 3) {
      setStatus('Request timed out. Please try again.');
    } else {
      setStatus('Unable to retrieve your location.');
    }
  };


  return (
    <div style={{ textAlign: "center" }}>
      <h1>Get User Location</h1>
      <Button variant="destructive" onClick={getLocation}>Get Location</Button>
      <p>{status}</p>
      {location.latitude && location.longitude && (
        <p>
          Latitude: {location.latitude}°, Longitude: {location.longitude}°
        </p>
      )}
    </div>
  );
};

export default GeolocationComponent;
