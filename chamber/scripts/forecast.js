document.addEventListener("DOMContentLoaded", function() {
    // Coordinates for Anthem, Arizona
    const lat = 33.8584;
    const lon = -112.1280;
    const apiKey = 'c69a1f4880580b1453df17578e44e815'; // Make sure to use your actual API key

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayWeatherData(data) {
    const weatherDiv = document.getElementById('weather-data');
    // Convert Kelvin to Fahrenheit
    const temp = (data.main.temp - 273.15) * 9/5 + 32;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const iconCode = data.weather[0].icon; // Get the icon code from the API response
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`; // Use HTTPS for the icon URL

    weatherDiv.innerHTML = `
        <img src="${iconUrl}" alt="Weather Icon" /> <!-- Display the weather icon -->
        <p>Temperature: ${temp.toFixed(2)}°F</p> <!-- Display temperature in Fahrenheit -->
        <p>Weather: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
    `;
}










