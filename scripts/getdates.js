// Weather Placeholder
document.getElementById("weather").innerHTML = "Current weather: Sunny";

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
