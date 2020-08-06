import React from 'react';

const DailyDescription = ({ weather }) => {
  return (
    <div>
      {weather.map(({ id, main, icon }) => {
        return (
          <div key={id}>
            <div>{main}</div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} />
          </div>
        );
      })}
    </div>
  );
};

export default DailyDescription;
