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


function onMapClick(e) {
  var lat = e.latlng.lat.toString().slice(0, 5);
  var lon = e.latlng.lng.toString().slice(0, 5);
console.log(lat)
console.log(lon)

var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

  fetch(queryURL)
  .then((response) => response.json())
  .then((data) => generateIcon(data));

  function generateIcon (data) {
    console.log(data)
    var img = document.createElement("img");
    img.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png';
    popup
        .setLatLng(e.latlng)
        .setContent(img)
        .openOn(map);

  }
}

map.on('click', onMapClick);


//end of map/weather data

//take weather data
//somehow link to certain playlist

//plays playlist
//name playlists after the code gained from the api call ex: d12
//then on click plays the playlist
var currentWeather = "data.whatever" 


var d12 = 'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk'





map.addEventListener('click', function () {fetchPlaylist(d12)});




function fetchPlaylist(url) {
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      let iFrame = document.createElement("iframe");
      console.log("hi hi hi hi");
      console.log(data);
      console.log(data.items[0].id);
      iFrame.src =
        "https://www.youtube.com/embed/videoseries?list=" + data.items[0].id;
      iFrame.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      );

      document.body.appendChild(iFrame);
    });
}


//comment out what does what
//
