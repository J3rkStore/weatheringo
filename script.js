var osm = L.tileLayer('https://tile.openstreetmap.org/10/40.75/-111.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});


var map = L.map('map').setView([40.75, -111], 7);


var baseMaps = {
  "OpenStreetMap": osm,
};

var clouds = L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374', {
 ocacity: .8, attribution: "OpenWeatherMap"

})
var precipitation = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374' , {id: "openWeatherMap-v1",
ocacity: .8,  attribution: "OpenWeatherMap"

}) 
var temp = L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374' , {id: "openWeatherMap-v1",
ocacity: .8, attribution: "OpenWeatherMap"

})
var wind = L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=4fd6f21c09387bdd2ef7e9728c3da374' , {id: "openWeatherMap-v1",
ocacity: .8,attribution: "OpenWeatherMap"

})

var overlayMaps = {
"Clouds": clouds,
"Precipitation": precipitation,
"Temperature": temp,
"Wind": wind
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup();
var APIKey = '4fd6f21c09387bdd2ef7e9728c3da374';
var currentWeather;

function onMapClick(e) {
  var lat = e.latlng.lat.toString().slice(0, 5);
  var lon = e.latlng.lng.toString().slice(0, 5);

var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

  fetch(queryURL)
  .then((response) => response.json())
  .then((data) => generateIcon(data));

  function generateIcon (data) {

    var playlistID = data.weather[0].icon;

if (playlistID == "01d" || playlistID == "01n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if (playlistID == "02d" || playlistID == "02n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if(playlistID == "03d" || playlistID == "03n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if (playlistID == "04d" || playlistID == "04n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if (playlistID == "09d" || playlistID == "09n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if (playlistID == "10d" || playlistID == "10n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if (playlistID == "11d" || playlistID == "11n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if (playlistID == "13d" || playlistID == "13n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else if (playlistID == "50d" || playlistID == "50n") {
  currentWeather = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'
}else {
  currentWeather = ""
}
    var img = document.createElement("img");
    img.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png';
    popup
        .setLatLng(e.latlng)
        .setContent(img)
        .openOn(map);
  
  }
  remove();
  fetchPlaylist(currentWeather);
  return;
}


//end of map/weather data

function remove() {if ( document.getElementById("now-playing").innerHTML = "") {
  return;
}else {
  document.getElementById("now-playing").innerHTML = ""
}}

async function fetchPlaylist(url) {
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


map.on('click', onMapClick);
//comment out what does what