const apiKey = "01ff7d0b73e849ea342c84f4de854e4f";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const iconElement = document.getElementById('icon');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');


searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    getWeather(location);
});
const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;

function getWeather(location) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            locationElement.textContent = data.name;
            temperatureElement.textContent = `Temperature: ${data.main.temp}°`;
            iconElement.src = data.current.condition.icon;
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
            windElement.textContent = `Wind: ${data.main.wind_kph} km/h`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}