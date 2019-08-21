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

let slideIndex = 1;

// Next/prev controls
const plusSlides = n => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
const currentSlide = n => {
  showSlides((slideIndex = n));
};

const showSlides = n => {
  let i;
  let slides = $(".mySlides");
  let dots = $(".dot");

  // at last slide (n=max) and click "next" (n+=1), go to first slide (n=1)
  if (n > slides.length) {
    slideIndex = 1;
  }
  // at first slide (n=1) and click "prev" (n+=-1), go to last slide (n=max)
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
};

const loadVids = () => {
  $.getJSON(playlistURL, options, data => {
    console.log(data);
    // array of objects
    const dataArr = data.items;
    /* data.items = [
      {
        snippet: {
          channelId: "",
          channelTitle: "Troye Sivan",
          description: "",
          playlistId: "",
          position: 0,
          publishedAt: "2018-07-19T17 : 23:00.000Z",
          resourceId: {
            videoId: ""
          },
          thumbnails: {
            default: { height: 90, url: "", width: 120 },
            high: {},
            maxres: {},
            medium: {},
            standard: {}
          },
          title: "Troye Sivan - Dance to This ft. Ariana Grande"
        }
      }
    ] */
    const videoInfo = dataArr.map(video => {
      return `<div class="video-div"><iframe width="400px" height="300px" src="https://www.youtube.com/embed/${
        video.snippet.resourceId.videoId
      }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    });

    const totalvideos = data.items.length;

    const videoSlide = dataArr.map(video => {
      return `
        <div class="mySlides fade">
          <div class="numbertext">${video.snippet.position +
            1} / ${totalvideos}</div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${
              video.snippet.resourceId.videoId
            }"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `;
    });

    video(videoSlide);
  });
};

const video = video => {
  console.log(video);
  if ($(window).width() < 1024) {
    $("#slideshow-container1").append(video);
    showSlides(slideIndex);
  } else {
    $("#slideshow-container2").append(video);
    showSlides(slideIndex);
  }
};

$(() => {
  loadVids();
});
