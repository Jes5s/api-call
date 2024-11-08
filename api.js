
const apiKey = 'fa6ddd66969f838303b9f12d35f1e71e';

function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const { main, weather, name } = data;
      const weatherInfo = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Pressure: ${main.pressure} hPa</p>
      `;
      document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
    });
}