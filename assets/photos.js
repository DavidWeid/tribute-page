console.log("Online with Photos!");

const grabGiphs = () => {
  const key = "g1Can9EJuWv920hp8qsAkS5yv0CX99se";

  fetch(`http://api.giphy.com/v1/gifs/trending?q=troye+sivan&api_key=${key}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
};

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
