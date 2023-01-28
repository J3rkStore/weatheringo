/*oath client id
795485937584-qqif5vqf6g397bje2jsfbr8pe0h7vfu9.apps.googleusercontent.com

client secret
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
Creation date
January 25, 2023 at 8:14:10 PM GMT-7

API KEY AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk
*/

/*
function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}

function loadClient() {
  gapi.client.setApiKey("AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk");
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}

function execute() {
  return gapi.client.youtube.search
    .list({
      channelId: "GoreGrinder",
      channelType: "any",
      eventType: "none",
      videoDefinition: "any",
      videoDimension: "2d",
      videoDuration: "any",
      videoEmbeddable: "any",
      videoLicense: "any",
      videoSyndicated: "any",
      videoType: "any",
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}
gapi.load("client:auth2", function () {
  gapi.auth2.init({
    client_id:
      "795485937584-qqif5vqf6g397bje2jsfbr8pe0h7vfu9.apps.googleusercontent.com",
  });
});

//authenticate().then(loadClient);
//execute();

fetch("https://www.googleapis.com/youtube/v3/playlists");


https://youtube.googleapis.com/youtube/v3/playlists?part=id&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=1&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

*/

playlist =
  "https://youtube.googleapis.com/youtube/v3/playlists?part=id&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=1&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";

playlistTwo =
  "https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=PLPVY23FuV_VM_t2_lpxfJpAp5B2JX5SAH&maxResults=2&contentDetails&key=AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";

var apiKey = "AIzaSyAWjdHyeEO6RozX9uMc1GnPAafHJiVIpCk";
//var search = "horse";

//  "https://www.youtube.com/embed/kU88l6hhWak"

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

fetchPlaylist(playlistTwo);

///////////////kayvon's stuff//////////////////

var videoUrl =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" +
  search +
  "&type=video&key=" +
  apiKey;

console.log("video url is " + videoUrl);
console.log(search);

function fetchFromYoutube() {
  fetch(videoUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("kayvons data");
      console.log(data);
      console.log("end of kayvons data");
      let iFrame = document.createElement("iframe");
      console.log(data.items[1].id.videoId);
      iFrame.src = "https://www.youtube.com/embed/" + data.items[0].id.videoId;
      document.body.appendChild(iFrame);
      console.log(data);
    });
}

fetchFromYoutube();
