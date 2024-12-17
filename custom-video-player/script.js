//obtain the necessary DOM elements
const video = document.getElementById("video");
const play = document.getElementById("play");
const stopPlay = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stopPlay.addEventListener("click", stopvideo);

progress.addEventListener("change", setvideoProgress);
