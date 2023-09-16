
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
