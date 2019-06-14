console.log("online");
const YT_API_KEY = "AIzaSyDyCC_F0psdc0S0fjDC_5qp6xYPsfp99wY";

const URL =
  "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDyCC_F0psdc0S0fjDC_5qp6xYPsfp99wY&part=snippet,player";

const user = "TroyeSivan18";

const videos = user + "/videos";

const singingVideosPlaylistID = "PLCruzMXby65nwW7AcuE8Zh84ZPrEdTFDv";

const playlistURL = "https://www.googleapis.com/youtube/v3/playlistItems";

const options = {
  part: "snippet",
  key: YT_API_KEY,
  maxResults: 10,
  playlistId: singingVideosPlaylistID
};

const loadVids = () => {
  $.getJSON(playlistURL, options, data => {
    console.log(data);
  });
};

$(document).ready(() => {
    // loadVids();
});
