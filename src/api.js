const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5';
const OPEN_CAGE_URL = 'https://api.opencagedata.com/geocode/v1';
const api_key = 'e667daa519e5906a2449e266ce416e75';
const open_cage_key = '0264db5477fe4b1c9ee9ae23b3ec59e5';

const fetchSevenDay = (lat, lon) => {
  return new Promise((resolve, reject) => {
    fetch(`${OPEN_WEATHER_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api_key}&units=imperial`)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => reject(error));
  });
};

const fetchLocation = (lat, long) => {
  return new Promise((resolve, reject) => {
    fetch(`${OPEN_CAGE_URL}/json?q=${lat}+${long}&key=${open_cage_key}`)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export { fetchSevenDay, fetchLocation };
