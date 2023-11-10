// links.js

// Define baseURL and linksURL
const baseURL = "https://hinga1.github.io/wdd230/";
const linksURL = "https://hinga1.github.io/wdd230/data/links.json";

// Asynchronous function to get links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// Function to build and display links
function displayLinks(weeks) {
  const linksContainer = document.getElementById("activity-links");

  // Clear any existing content
  linksContainer.innerHTML = "";

  // Loop through each week
  weeks.lessons.forEach((week) => {
    const weekNumber = week.lesson;
    const links = week.links;

    // Create a list item for the week
    const weekListItem = document.createElement("li");
    weekListItem.textContent = `Week ${weekNumber}:`;

    // Create an unordered list for the links
    const linksList = document.createElement("ul");

    // Loop through each link in the week
    links.forEach((link) => {
      // Create a list item for the link
      const linkListItem = document.createElement("li");

      // Create a link element
      const linkElement = document.createElement("a");
      linkElement.href = baseURL + link.url;
      linkElement.textContent = link.title;

      // Append the link to the list item
      linkListItem.appendChild(linkElement);

      // Append the link list item to the links list
      linksList.appendChild(linkListItem);
    });

    // Append the links list to the week list item
    weekListItem.appendChild(linksList);

    // Append the week list item to the container
    linksContainer.appendChild(weekListItem);
  });
}

// Call the getLinks function when the page loads
document.addEventListener("DOMContentLoaded", getLinks);
