import React, { useState, useEffect } from 'react';
import DailyCard from './components/DailyCard';
import { fetchLocation, fetchSevenDay } from './api';
import useGeolocation from './hooks/useGeolocation';
import CardGrid from './components/CardGrid';

function App() {
  const [sevenDay, setSevenDay] = useState();
  const [location, setLocation] = useState();
  const geoLocation = useGeolocation();
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    if (geoLocation) {
      Promise.all([fetchLocation(geoLocation.latitude, geoLocation.longitude), fetchSevenDay(geoLocation.latitude, geoLocation.longitude)]).then(([location, sevenDay]) => {
        setLocation(location.results[0].components);
        setSevenDay(sevenDay);

        setLoading(false);
      });
    }
  }, [geoLocation]);

  return (
    <div className="App">
      <h1 className="app_header">Weather App</h1>
      {!loading && <DailyCard location={location} currentWeather={sevenDay.current} />}
      {!loading && <CardGrid forecast={sevenDay.daily} />}
    </div>
  );
}

export default App;
