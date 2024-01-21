//Add Date - NEW FORMAT
function formattedDate(now) {
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes}`;
}
let now = new Date();
let h6 = document.querySelector("h6");
h6.innerHTML = formattedDate(now);

//Add Form submission
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let cityDisplay = document.querySelector(".card-title-main");
  if (searchInput.value) {
    cityDisplay.innerHTML = `${searchInput.value}`;
  } else {
    cityDisplay.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//Form submission - with API
function displayTemp(response) {
  let temperatureDisplay = document.querySelector(".card-text-main");
  let temperature = Math.round(response.data.temperature.current);
  temperatureDisplay.innerHTML = `${temperature}°C`;
}

function fetchWeather(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let apiKey = "fad3604f59545d05634atobc1ad582a8";
  let units = "metric";
  let weatherAPI = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(weatherAPI).then(displayTemp);
}
form.addEventListener("submit", fetchWeather);

//DISABLED code - no longer relevant or prior submissions
/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
//refactored-original submission further below
let search = prompt("Enter a city?");
search = search.toLowerCase();
search = search.trim();
if (weather[search] == undefined) {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${search}`,
  );
} else {
  let temperature = weather[search].temp; //define
  let humidity = weather[search].humidity; //define
  let celsiusTemp = Math.round(temperature); //define
  let fahrenheitTemp = Math.round((temperature * 9) / 5 + 32); //define

  alert(
    `It is currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${search} with a humidity of ${humidity}%`,
  );
}*/

//Add Date - old submission
/*let now = new Date();
let h6 = document.querySelector("h6");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
h6.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;*/

/* let search = prompt("Enter a city?");
search = search.toLowerCase();
search = search.trim();
if (search === "paris") {
  alert(
    `It is currently ${Math.round(weather["paris"].temp)}°C (${Math.round(
      (weather["paris"].temp * 9) / 5 + 32
    )}°F) in ${search} with a humidity of ${Math.round(
      weather["paris"].humidity
    )}%.`
  );
} else if (search === "tokyo") {
  alert(
    `It is currently ${Math.round(weather["tokyo"].temp)}°C (${Math.round(
      (weather["tokyo"].temp * 9) / 5 + 32
    )}°F) in ${search} with a humidity of ${Math.round(
      weather["tokyo"].humidity
    )}%.`
  );
} else if (search === "lisbon") {
  alert(
    `It is currently ${Math.round(weather["lisbon"].temp)}°C (${Math.round(
      (weather["lisbon"].temp * 9) / 5 + 32
    )}°F) in ${search} with a humidity of ${Math.round(
      weather["lisbon"].humidity
    )}%.`
  );
} else if (search === "san francisco") {
  alert(
    `It is currently ${Math.round(
      weather["san francisco"].temp
    )}°C (${Math.round(
      (weather["san francisco"].temp * 9) / 5 + 32
    )}°F) in ${search} with a humidity of ${Math.round(
      weather["san francisco"].humidity
    )}%.`
  );
} else if (search === "oslo") {
  alert(
    `It is currently ${Math.round(weather["oslo"].temp)}°C (${Math.round(
      (weather["oslo"].temp * 9) / 5 + 32
    )}°F) in ${search} with a humidity of ${Math.round(
      weather["oslo"].humidity
    )}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${search}`
  );
} */
