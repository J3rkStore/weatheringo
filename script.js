// loads the Leaflet map API to the DOM
var osm = L.tileLayer("https://tile.openstreetmap.org/10/40.75/-111.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
});


var map = L.map("map").setView([40.75, -111], 7);

//declares the initial map
var baseMaps = {
  OpenStreetMap: osm,
};

//pulls the current weather data and converts it into map layers
var clouds = L.tileLayer(
  "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374",
  {
    ocacity: 0.8,
    attribution: "OpenWeatherMap",
  }
);
var precipitation = L.tileLayer(
  "https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374",
  { id: "openWeatherMap-v1", ocacity: 0.8, attribution: "OpenWeatherMap" }
);
var temp = L.tileLayer(
  "https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374",
  { id: "openWeatherMap-v1", ocacity: 0.8, attribution: "OpenWeatherMap" }
);
var wind = L.tileLayer(
  "https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374",
  { id: "openWeatherMap-v1", ocacity: 0.8, attribution: "OpenWeatherMap" }
);

// defines the options available for different layers of the map
var overlayMaps = {
  Clouds: clouds,
  Precipitation: precipitation,
  Temperature: temp,
  Wind: wind,
};
//allows the user to control the latey displayed on the weather map
var layerControl = L.control.layers(overlayMaps).addTo(map);

// dipslays the base layer of the weather map
setTimeout(() => {
  

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);}, 500);
// don't add anything above line 46 - map will not work. 
var popup = L.popup();
//openWeatherMap API key
var APIKey = "4fd6f21c09387bdd2ef7e9728c3da374";
//variable that is later defined as the proper youtube playlist to display
var currentWeather;

//executes when the map is clicked on
function onMapClick(e) {
  //gets the lat and lon based on where the user clicked
  var lat = e.latlng.lat.toString().slice(0, 5);
  var lon = e.latlng.lng.toString().slice(0, 5);

  //calls the openweathermap api and takes the lat and lon variable gained from the map click
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => generateIcon(data));

  function generateIcon(data) {
    //pulls current weather data
    var playlistID = data.weather[0].icon;
    //generates the correct playlist on current weather information
    if (playlistID == "01d" || playlistID == "01n") {
      //clear skies - reggae
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLp7pAH9am84O9Cd9VlW0W_qVVCL5PC3BI&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "02d" || playlistID == "02n") {
      //few clouds - space rock
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PL85wZONVBFaBiLS-gf5RKtljiTpNL9YoG&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "03d" || playlistID == "03n") {
      //scattered clouds - musicals
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PL6rfTXx-6y2U9LPalxmyWb4Z9_YDomxfs&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "04d" || playlistID == "04n") {
      //broken clouds - breakcore
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PL4KHWpNILhVhTtXmPotnrou515HYNsGGC&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "09d" || playlistID == "09n") {
      //shower rain - all aphex
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PL6F97C596DB1CF200&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "10d" || playlistID == "10n") {
      // rain - trip hop.  RN it's 70s japanese jazz though because that's what I could get to work
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLfhJP2GIcJCvJdqRmuFxffA84dYlC651J&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "11d" || playlistID == "11n") {
      // thunderstorm -  blackened grindcore PLPVY23FuV_VN0NrKZHziMbkUS7nliGF4I
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VN0NrKZHziMbkUS7nliGF4I&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "13d" || playlistID == "13n") {
      //snow - funeral doom PL-K_YiMt4bvwM57GL5DmHRf0RgiNVEXge
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PL-K_YiMt4bvwM57GL5DmHRf0RgiNVEXge&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else if (playlistID == "50d" || playlistID == "50n") {
      //mist - drone
      currentWeather =
        "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PL0IEgTCG6xMxD4BoloaI5tTquupJzdu2a&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
    } else {
    }
    // displays the weather Icon based on the location
    var img = document.createElement("img");
    img.src =
      "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    popup.setLatLng(e.latlng).setContent(img).openOn(map);
  }

  //executes the remove funciton, appears first so it will clear the DOM before appending a new element
  remove();

  //makes this function wait .5 seconds before executing so the request for the current playlist can load properly
  setTimeout(() => {
    fetchPlaylist(currentWeather);
  }, 500);
  return;
}

//end of map/weather data

//removes the previous Playlist from the DOM
function remove() {
  if ((document.getElementById("now-playing").innerHTML = "")) {
    return;
  } else {
    document.getElementById("now-playing").innerHTML = "";
  }
}

//Fetches playlist from the youtube API
function fetchPlaylist(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let iFrame = document.createElement("iframe");
      iFrame.src =
        "https://www.youtube.com/embed/videoseries?list=" + data.items[0].id;
      iFrame.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      );
      document.getElementById("now-playing").appendChild(iFrame);
    });
  return;
}
map.on("click", onMapClick);


// When I add the functions below, the map brakes. It breaks no mas 

// Functions for dark/light modes below
// Project already in dark mode, create light mode in html
// add light mode bg colors to tailwind css


// Icons
var dayIcon = document.querySelector(".day");
var nightIcon = document.querySelector(".night");

// Theme Vars 
var userTheme = localStorage.getItem("theme");
// Map breaks when I use "function" below instead of const
// Initial Theme Check
var darkmode = false;

function themeCheck() {
  if (userTheme === "dark") {
    themeSwitchDark();
    darkmode = true;
    return;
  }else {
    themeSwitchLight();
    darkmode = false;
    return;
  }

}
// Manual Theme Switch 
//const themeSwitch = () => {};
function themeSwitchDark() {
  localStorage.setItem('theme', 'dark')
 darkmode = true;

 if (darkmode) {
  document.getElementById("main").style.backgroundColor="black";
 }
 
}
function themeSwitchLight() {
  localStorage.setItem("theme", "light")
 darkmode = false;

  if (darkmode == false) {
    document.getElementById("main").style.backgroundColor="white";
  }
}
// Call theme switch by clicking the icons/images
document.getElementById("day").addEventListener("click", themeSwitchLight);

document.getElementById("night").addEventListener("click", themeSwitchDark);

// Calls the theme check when page is loaded
themeCheck();