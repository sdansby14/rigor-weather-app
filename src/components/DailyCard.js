import React from 'react';
import DailyDescription from './DailyDescription';
import useTime from '../hooks/useTime';

const DailyCard = ({ location, currentWeather }) => {
  const { temp, weather } = currentWeather;
  const { state_code, town } = location;
  const time = useTime();
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <section>
      {!!currentWeather && (
        <div className="main_card">
          <h2>
            {town}, {state_code}
          </h2>
          <span>
            {days[d.getDay()]} {time}
          </span>
          <div className="weather_description">
            <DailyDescription weather={weather} />
            <h1 className="temp">
              {Math.floor(temp)}
              <sup className="degrees">&#8457;</sup>
            </h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default DailyCard;
