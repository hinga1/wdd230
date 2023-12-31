
const currentEvents = [
    "Join us for the Chamber Gala on October 15th!",
    "Business Networking Breakfast on November 5th.",
    "Community Cleanup Day on December 3rd."
];

function getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * currentEvents.length);
    return currentEvents[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    const currentEventDiv = document.getElementById("currentEvent");
    const randomEvent = getRandomEvent();
    currentEventDiv.textContent = randomEvent;
});

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    // Existing code...

    // Fetch and display weather data
    fetchWeather();

    // Check if it's Monday, Tuesday, or Wednesday
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        // Show the meet and greet banner
        const bannerContainer = document.getElementById("meetGreetBanner");
        bannerContainer.style.display = "block";

        // Close banner functionality
        const closeButton = document.getElementById("closeBannerButton");
        closeButton.addEventListener("click", function () {
            bannerContainer.style.display = "none";
        });
    }
});

function fetchWeather() {
    const apiKey = 'f97ad2c131d55d683e196f22701a1cee'; 
    const location = 'Busia, Kenya'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById('location');
            const temperatureElement = document.getElementById('temperature');
            const conditionElement = document.getElementById('condition');
            const weatherIconElement = document.querySelector('.weather-icon img');

            locationElement.textContent = `${data.name}, ${data.sys.country}`;
            temperatureElement.textContent = `${data.main.temp}°C`;
            conditionElement.textContent = data.weather[0].description;
            weatherIconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(forecastData => {
            // Display forecast data
            const forecastContainer = document.getElementById('forecast');

            // Clear previous forecast content
            forecastContainer.innerHTML = '';

            // Loop through the next three days and display the forecast
            for (let i = 1; i <= 3; i++) {
                const forecastDay = forecastData.daily[i];
                const forecastItem = document.createElement('div');
                forecastItem.classList.add('forecast-item');

                // Customize the HTML structure based on your needs
                forecastItem.innerHTML = `
                    <p><strong>Day ${i}:</strong></p>
                    <p>Temperature: ${forecastDay.temp.day}°C</p>
                    <p>Condition: ${forecastDay.weather[0].description}</p>
                `;

                // Append the forecast item to the container
                forecastContainer.appendChild(forecastItem);
            }
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
        });

}

fetchWeather();

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.getElementById('cta-button').addEventListener('click', function () {
    document.getElementById('contact-form-container').style.display = 'flex';
});

document.getElementById('close-button').addEventListener('click', function () {
    document.getElementById('contact-form-container').style.display = 'none';
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

if (localStorage.getItem("visitCount")) {
    var count = parseInt(localStorage.getItem("visitCount"));
    count++;
    localStorage.setItem("visitCount", count);
  } else {
    localStorage.setItem("visitCount", 1);
  }
document.getElementById("visitCount").innerHTML = localStorage.getItem("visitCount");
  

