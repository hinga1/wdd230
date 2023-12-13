// Sample weather data (replace with actual data from openweathermap.org)
const weatherData = {
    temperature: 28,
    humidity: 60,
    forecast: {
        time: "15:00",
        main: "Clouds",
        description: "Partly cloudy",
        icon: "01d"
    }
};

// Display weather information on the home page
const weatherContainer = document.getElementById("weather-container");
weatherContainer.innerHTML = `
    <h2>Current Weather</h2>
    <p>Temperature: ${weatherData.temperature}&deg;C</p>
    <p>Humidity: ${weatherData.humidity}%</p>
    <p>Forecast at ${weatherData.forecast.time}: ${weatherData.forecast.description}</p>
    <img src="http://openweathermap.org/img/w/${weatherData.forecast.icon}.png" alt="Weather Icon">
`;

// Sample rental data (replace with actual data from your JSON file)
// Sample rental data (replace with actual data from your JSON file)
const rentalData = [
    { type: "Honda Metro Scooter", maxPersons: 1, halfDay: 20, fullDay: 30 },
    { type: "Honda Dio Scooter", maxPersons: 2, halfDay: 30, fullDay: 40 },
    { type: "Honda PCX150 Scooter", maxPersons: 2, halfDay: 40, fullDay: 50 },
    { type: "Honda Pioneer ATV", maxPersons: 4, halfDay: 50, fullDay: 70 },
    { type: "Jeep Wrangler - 4 door with a/c", maxPersons: 5, halfDay: 70, fullDay: 100 },
    { type: "Jeep Wrangler - 2 door", maxPersons: 4, halfDay: 60, fullDay: 85 },
];

// Display rental options and prices on the rentals page
const rentalsTable = document.getElementById("rentals-table");
rentalsTable.innerHTML = `
    <h2>Rental Options and Prices</h2>
    <table>
        <thead>
            <tr>
                <th>Rental Type</th>
                <th>Max Persons</th>
                <th>Half Day</th>
                <th>Full Day</th>
            </tr>
        </thead>
        <tbody>
            ${rentalData.map(rental => `
                <tr>
                    <td>${rental.type}</td>
                    <td>${rental.maxPersons}</td>
                    <td>$${rental.halfDay}</td>
                    <td>$${rental.fullDay}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;

// Sample contact information
const contactInfo = `
    <h2>Contact Information</h2>
    <p>Email: info@scootsrentals.com</p>
    <p>Phone: +123 456 7890</p>
`;

// Display contact information on the contact page
const contactInfoContainer = document.getElementById("contact-info");
contactInfoContainer.innerHTML = contactInfo;

// Initialize Google Map (replace with your actual locations)
function initMap() {
    const map = new google.maps.Map(document.getElementById("google-map"), {
        center: { lat: 20.5000, lng: -86.9450 }, // Cozumel coordinates
        zoom: 12
    });
}

// Sample reservation form logic (replace with actual form handling)
const reservationForm = document.getElementById("reservation-form");
reservationForm.innerHTML = `
    <h2>Make a Reservation</h2>
    <label for="rental-type">Rental Type:</label>
    <select id="rental-type">
        ${rentalData.map(rental => `<option value="${rental.type.toLowerCase().replace(/\s+/g, '-')}"">${rental.type}</option>`).join('')}
    </select>
    <label for="date">Date:</label>
    <input type="date" id="date" required>
    <!-- Add other form fields... -->
    <button type="submit">Submit Reservation</button>
`;

// Display high temperature message at the top of the home page
const highTemperatureMsg = document.createElement("div");
highTemperatureMsg.classList.add("high-temperature-msg");
highTemperatureMsg.innerHTML = `High temperature today: ${weatherData.temperature}&deg;C`;
document.body.insertBefore(highTemperatureMsg, document.body.firstChild);
