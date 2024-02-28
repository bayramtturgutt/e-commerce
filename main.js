// Function to initialize and add the map
function initializeMap() {
    // Coordinates for the location (Russia in this case)
    var russiaCoords = { lat: 3.51602, lng: -2.1969 };

    // Creating a new map centered at the specified coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: russiaCoords
    });

    // Adding a marker at the specified coordinates
    var marker = new google.maps.Marker({
        position: russiaCoords,
        map: map
    });
}

// Function to toggle the menu visibility
function toggleMenu() {
    var menuItems = document.getElementById("menu-items");

    // Setting the maximum height based on the current state
    if (menuItems.style.maxHeight === "0px") {
        menuItems.style.maxHeight = "200px"; // Expand the menu
    } else {
        menuItems.style.maxHeight = "0px"; // Collapse the menu
    }
}

// Ensuring the DOM content is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function() {
    // Initializing the map when the page is loaded
    initializeMap();

    // Adding an event listener for menu toggle button
    document.getElementById("menu-toggle-btn").addEventListener("click", toggleMenu);
});