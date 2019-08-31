console.log("Online with Photos!");

// Grab Gifs from Giphy
const grabGiphs = () => {
  const key = "g1Can9EJuWv920hp8qsAkS5yv0CX99se";

  fetch(
    `http://api.giphy.com/v1/gifs/search?q=troye+sivan&limit=50&api_key=${key}`
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
  const gifItemArray = gifArray.map(gifObj => {
    const itemDiv = $("<div>").addClass("item");
    const contentDiv = $("<div>").addClass("content");
    const img = $("<img>").addClass("photo-gif")
      .attr("src", gifObj.images.original.url)
      .attr("alt", gifObj.title);
    $(contentDiv).append(img);
    $(itemDiv).append(contentDiv);
    return itemDiv;
  });
  console.log(gifItemArray);
  const target = $("#main-photos");
  gifItemArray.forEach(item => {
    $(target).append(item);
  });
};

// Watch for scroll (for title-bar visuals)
const scrollTitle = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#hidden-title").css("font-size", "1.3em");
    $("#title").css("font-size", "1.3em");
  } else {
    $("#hidden-title").css("font-size", "2em");
    $("#title").css("font-size", "2em");
  }
};

window.onload = () => {
  grabGiphs();
};

window.onscroll = function() {
  scrollTitle();
};