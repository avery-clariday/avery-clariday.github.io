import DisplayController from "./display-controller.js";

const displayController = new DisplayController();

// display the home screen
displayController.displayHome();
// add event listeners for section buttons
displayController.addEventListeners();

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
    video.addEventListener("mouseover", function (e) {
        video.play();
    })

    video.addEventListener("mouseout", function (e) {
        video.pause();
    })
})
