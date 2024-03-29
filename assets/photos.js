console.log("Online with Photos!");

const observer = lozad();
observer.observe();

let offset = 0;

// Grab Gifs from Giphy
const grabGiphs = () => {
  const key = "g1Can9EJuWv920hp8qsAkS5yv0CX99se";

  fetch(
    `https://api.giphy.com/v1/gifs/search?q=troye+sivan&limit=25&offset=${offset}&api_key=${key}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      createGif(myJson.data);
    });
};

const createGif = gifArray => {
  console.log(gifArray);
  const container = $("<div>").addClass("masonry");
  const gifItemArray = gifArray.map(gifObj => {
    const img = $("<img>")
      .addClass("photo-gif lozad")
      .attr("data-src", gifObj.images.original.url)
      .attr("alt", gifObj.title);
    $(container).append(img);
    return container;
  });
  console.log(gifItemArray);
  const target = $("#main-photos");
  gifItemArray.forEach(item => {
    $(target).append(item);
  });
  observer.observe();
};

// Watch for scroll (for title-bar visuals)
const scrollTitle = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#hidden-title").css("font-size", "1.3em");
    $(".title").css("font-size", "1.3em");
  } else {
    $("#hidden-title").css("font-size", "2em");
    $(".title").css("font-size", "2em");
  }
};

window.onload = () => {
  grabGiphs();
};

window.onscroll = function() {
  scrollTitle();
};

$(window).on(
  "scroll",
  _.throttle(function() {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 100
    ) {
      console.log("near bottom!");
      offset += 25;
      grabGiphs();
    }
  }, 1500)
);
