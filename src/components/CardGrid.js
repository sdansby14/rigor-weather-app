import React from 'react';
import DailyDescription from './DailyDescription';

const CardGrid = ({ forecast }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  const getDay = (day) => {
    if (day > 6) {
      return days[0];
    }

    return days[day];
  };

  return (
    <div className="card_grid">
      {forecast.map((day, index) => {
        return (
          <div key={index} className="card">
            <h2>{getDay(index)}</h2>
            <DailyDescription weather={day.weather} />
            <div className="temp_container">
              <div className="max_temp">
                {Math.floor(day.temp.max)}
                <sup>&#xb0;</sup>
              </div>

              <div>
                {Math.floor(day.temp.min)}
                <sup>&#xb0;</sup>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
