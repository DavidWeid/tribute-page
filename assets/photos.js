console.log("Online with Photos!");

const scrollTitle = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#hidden-title").css("font-size", "1.3em");
    $("#title").css("font-size", "1.3em");
  } else {
    $("#hidden-title").css("font-size", "2em");
    $("#title").css("font-size", "2em");
  }
};

window.onscroll = function() {
  scrollTitle();
};
