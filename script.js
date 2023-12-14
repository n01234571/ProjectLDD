const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");    
}))

// Diamonds code
// Function to handle city name click event
function onCityNameClick(cityName) {
    var cityDropdown = document.getElementById('cityDropdown');

    // Find the corresponding city in the dropdown and select it
    for (var i = 0; i < cityDropdown.options.length; i++) {
        if (cityDropdown.options[i].text === cityName) {
            cityDropdown.selectedIndex = i;
            changeTemperature(cityDropdown.value); // Trigger the temperature change function
            break;
        }
    }
}

// Add event listeners to city names in the table
var city1 = document.getElementById('city1');
city1.addEventListener('click', function() {
    onCityNameClick('Toronto');
});

var city2 = document.getElementById('city2');
city2.addEventListener('click', function() {
    onCityNameClick('Mississauga');
});

var city3 = document.getElementById('city3');
city3.addEventListener('click', function() {
    onCityNameClick('Brampton');
});

var city4 = document.getElementById('city4');
city4.addEventListener('click', function() {
    onCityNameClick('Markham');
});

var city5 = document.getElementById('city5');
city5.addEventListener('click', function() {
    onCityNameClick('Vaughan');
});

var city6 = document.getElementById('city6');
city6.addEventListener('click', function() {
    onCityNameClick('Richmond Hill');
});

var city7 = document.getElementById('city7');
city7.addEventListener('click', function() {
    onCityNameClick('Oakville');
});

var city8 = document.getElementById('city8');
city8.addEventListener('click', function() {
    onCityNameClick('Burlington');
});


// Function to handle temperature change when city is selected
function changeTemperature(selectedCity) {
    var temperature = generateRandomTemperature();
    var temperatureDisplay = document.getElementById('temperature');
    var cityDropdown = document.getElementById('cityDropdown');
    var selectedCityName = cityDropdown.options[cityDropdown.selectedIndex].text; // Get the selected city name

    // Display the selected city name in the weather container
    var locationDisplay = document.querySelector('.location');
    locationDisplay.textContent = selectedCityName;

    // Limit the temperature to two digits without decimal places
    temperatureDisplay.textContent = temperature.toLocaleString('en-US', {
        minimumIntegerDigits: 1,
        useGrouping: false
    }) + '°C';
    updateWeatherConditions(temperature);
}


// Function to generate random temperature (0-45) - Replace this with your logic
function generateRandomTemperature() {
return Math.floor(Math.random() * 46); // Generates a random whole number between 0 and 45
}

// Function to update weather conditions based on temperature
function updateWeatherConditions(temperature) {
var weatherIcon = document.querySelector('.weather-icon');
var body = document.body;

if (temperature >= 0 && temperature <= 9) {
    // Change to snowing background and update weather icon for temperatures 0-9°C
    body.style.background = 'url("https://i.gifer.com/Dv9E.gif")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundRepeat = 'no-repeat';
    weatherIcon.textContent = '❄️'; // Change icon to snowflake

} else if (temperature >= 10 && temperature <= 19) {
    // Change to cloudy weather for temperatures 10-19°C
    body.style.background = 'url("https://i.kinja-img.com/gawker-media/image/upload/t_original/is9l7titozic2s3xpqjk.gif")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundRepeat = 'no-repeat';
    weatherIcon.textContent = '☁️'; // Change icon to cloud
} else {
    // Change to sunny weather for temperatures 20-45°C
    body.style.background = 'url("https://i.pinimg.com/originals/d7/53/71/d75371382edd046496e8d04771be738f.gif")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundRepeat = 'no-repeat';
    weatherIcon.textContent = '☀️'; // Change icon to sun
}
}


// Function to toggle temperature between Celsius and Fahrenheit
function toggleTemperatureUnit() {
var temperatureText = document.querySelector('.temperature').textContent;
var currentTemperature = parseFloat(temperatureText);

var unitToggle = document.getElementById('unitToggle');
var currentUnit = unitToggle.textContent;

if (currentUnit === 'C') {
    // Convert temperature to Fahrenheit
    var fahrenheitTemp = celsiusToFahrenheit(currentTemperature);
    document.querySelector('.temperature').textContent = fahrenheitTemp.toLocaleString('en-US', {
      minimumIntegerDigits: 1,
        useGrouping: false
    }) + '°F';
    updateWeatherConditions(fahrenheitTemp);
    unitToggle.textContent = 'F';
} else {
    // Convert temperature to Celsius
    document.querySelector('.temperature').textContent = currentTemperature.toLocaleString('en-US', {
        minimumIntegerDigits: 1,
        useGrouping: false
    }) + '°C';
    updateWeatherConditions(currentTemperature);
    unitToggle.textContent = 'C';
}
}

// Add event listener to the C/F link in the navbar
var celsiusLink = document.getElementById('unitToggle');
celsiusLink.addEventListener('click', toggleTemperatureUnit);

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
return Math.round((celsius * 9 / 5) + 32);
}


