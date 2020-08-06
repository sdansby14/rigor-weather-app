import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState();

  const getLocation = (latitude, longitude) => {
    return {
      latitude,
      longitude,
    };
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(getLocation(position.coords.latitude, position.coords.longitude));
      });
    } else {
      return false;
    }
  }, []);

  return location;
};

export default useGeolocation;
