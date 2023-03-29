const myLocation = document.getElementById('location');
const search = document.getElementById('search');
const weather1 = document.getElementById('weather');
const API_KEY = 'cabe4f9b4a90578285781adb4b1c07a0';

// To add a search box to the weather application
search.addEventListener('click', function () {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myLocation.value}&appid=${API_KEY}`)
		.then(data => data.json())
		.then(data => {
			const locationCoordinates = data.coord;
			const currentWeather = data.weather[0].description;
			const currentTemp = Math.round(data.main.feels_like - 273.15);
			const currentPressue = data.main.pressure;
			const currentHumidity = data.main.humidity;
			const currentWind = data.wind.speed;
			weather1.innerHTML = `
				<h2>Location: ${myLocation.value}</h2>
				<p>Current weather: ${currentWeather}</p>
				<p>Current temperature: ${currentTemp}°C</p>
				<p>Current pressure: ${currentPressue} hPa</p>
				<p>Current humidity: ${currentHumidity}%</p>
				<p>Current wind: ${currentWind} m/s</p>
			`;
		})
		.catch(error => {
			weather1.innerHTML = `<p>Error: ${error}</p>`;
		});
});
