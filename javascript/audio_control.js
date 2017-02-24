var myAudio = document.querySelector("#audio1");

var playPauseButton = document.querySelector("#playpause");
playPauseButton.addEventListener('click', playPause);

var stopButton = document.querySelector("#stop").addEventListener('click', stop);

var muteButton = document.querySelector("#mute");
muteButton.addEventListener('click', muteOnOff);

var volumeUpButton = document.querySelector("#volume-up");
volumeUpButton.addEventListener('click', volumeUp);

var volumeDownButton = document.querySelector("#volume-down");
volumeDownButton.addEventListener('click', volumeDown);

var bar = document.querySelector("#bar");
myAudio.addEventListener('timeupdate', updateProgress);

// display progress
function updateProgress() {
    bar.style.width = parseInt(((myAudio.currentTime / myAudio.duration) * 100), 10) + "%";
}

function playPause() {
    if (myAudio.paused) {
        myAudio.play();
        playPauseButton.className = "fa fa-pause-circle fa-2x";
    }
    else  {
        myAudio.pause();
        playPauseButton.className = "fa fa-play-circle fa-2x";
    }
}

function stop() {
    myAudio.pause();
    myAudio.currentTime = 0;
    playPauseButton.className = "fa fa-play-circle fa-2x";
}

function muteOnOff() {
    if (myAudio.muted) {
    	myAudio.muted=false;
    	muteButton.className = "fa fa-volume-up fa-2x";  }
    else {
   		myAudio.muted=true;
   		muteButton.className = "fa fa-volume-off fa-2x";  }
}

function volumeUp() {
    if (myAudio.volume < 1.0)
        myAudio.volume = myAudio.volume + 0.1;
}

function volumeDown() {
    if (myAudio.volume > 0.0)
        myAudio.volume = myAudio.volume - 0.1;
}
