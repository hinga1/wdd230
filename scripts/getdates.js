// Weather Placeholder
// Weather API Function
function fetchWeather() {
  const apiKey = 'f97ad2c131d55d683e196f22701a1cee'; 
  const location = 'Busia, Kenya'; 

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
          // Update Weather Information on the Page
          document.getElementById("temperature").textContent = `${data.main.temp}°C`;
          document.getElementById("weather-description").textContent = data.weather[0].description;
          document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          document.querySelector('.weather-icon').alt = data.weather[0].description;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}

// Call the fetchWeather function
fetchWeather();


// Number of Visits Placeholder
if (localStorage.getItem("visitCount")) {
  var count = parseInt(localStorage.getItem("visitCount"));
  count++;
  localStorage.setItem("visitCount", count);
} else {
  localStorage.setItem("visitCount", 1);
}
document.getElementById("visitCount").innerHTML = localStorage.getItem("visitCount");

// Current Year Placeholder
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Last Modified Placeholder
document.getElementById("lastModified").innerHTML = "Last modified: " + document.lastModified;

const hamburgerMenu = document.getElementById('hamburger-menu');
const navigationMenu = document.getElementById('menu-items');

// Add a click event listener to the hamburger menu button
hamburgerMenu.addEventListener('click', () => {
    // Toggle the "clicked" class on the hamburger menu button
    hamburgerMenu.classList.toggle('clicked');
    // Toggle the visibility of the navigation menu
    navigationMenu.style.display = navigationMenu.style.display === 'flex' ? 'none' : 'flex';
});
