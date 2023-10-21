const apiKey = 'f97ad2c131d55d683e196f22701a1cee';
const location = 'Busia, Kenya';

fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.current.temp_c; // Replace with actual property from API
    const windSpeed = data.current.wind_kph; // Replace with actual property from API

    // Update the HTML elements with the retrieved data
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('windspeed').textContent = `${windSpeed} kph`;
  })
  .catch((error) => console.error(error));

// Get temperature and wind speed values from the page
const temperatureElement = document.getElementById("temperature"); // Replace with the actual ID of the temperature element
const windSpeedElement = document.getElementById("windspeed"); // Replace with the actual ID of the wind speed element

// Check if the temperature and wind speed meet the specification limits
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

if (temperature <= 50 && windSpeed > 3.0) {
    // Calculate the wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the wind chill value on the page
    const windChillElement = document.getElementById("windchill"); // Replace with the actual ID of the wind chill element
    windChillElement.textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;
} else {
    // Display "N/A" if the input values do not meet the requirements
    const windChillElement = document.getElementById("windchill"); // Replace with the actual ID of the wind chill element
    windChillElement.textContent = "N/A";
}

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
}
  