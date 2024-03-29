const apiKey = 'c69a1f4880580b1453df17578e44e815'; // Your API key
const lat = 43.8231; // Latitude for Rexburg
const lon = -111.7924; // Longitude for Rexburg

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp; 
        const description = data.weather[0].description; 
        const iconCode = data.weather[0].icon; 
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        document.getElementById('weather').innerHTML = `
            <p>${temperature}°F, ${description},</p> <img src="${iconUrl}" alt="Weather icon">`;
    })
    .catch(error => console.error('Error fetching weather:', error));
