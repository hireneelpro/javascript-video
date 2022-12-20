// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const button = document.querySelector(".button");
const video = document.querySelector(".video-container");
button.addEventListener("click", function () {
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    video.play();
  } else {
    button.classList.add("active");
    {
      video.pause();
    }
  }
});

//  preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("preloader-hide");
});
