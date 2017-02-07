window.addEventListener("DOMContentLoaded", handleWindowLoad)
//below are my functions for play pause, video, mute, seekbar and fullscreen
function handleWindowLoad() {
    var video = document.getElementById("video");
    var playButton = document.getElementById("playPause");
    var muteUnmuteButton = document.getElementById("mute");
    var scrubSlider = document.getElementById("seekBar");
    var fullScreen = document.getElementById("fullScreen");
    
    //function for play pause starts here
    function playPauseVideo() {
        if (video.paused === true) {
            video.play();
            //toggle button caption
            playButton.innerHTML = "Pause";
        } else {
            video.pause();
            //toggle button caption 
            playButton.innerHTML = "Play";
        } //end else
    } // end playVideo function

    playButton.addEventListener("click", playPauseVideo);
	
    muteUnmuteButton.addEventListener("click", muteAudio);
    
//script for muting audio starts here
    function muteAudio()	{
        if (video.muted === false) {
            video.muted = true;
            muteUnmuteButton.innerHTML = "Mute";
        } else {
            video.muted = false;
            muteUnmuteButton.innerHTML = "Muted";//text will change when activated
        }
    }
    //function for volume change starts here
    var volumeSlider = document.getElementById("volumeBar");

    function volumeChanges() {
        video.volume = this.value / 100;
    }
    volumeSlider.addEventListener("input", volumeChanges);
    fullScreen.addEventListener("click", switchFullScreen);

    function switchFullScreen()
    //detect fullsreen video method native to different browsers,
    {
        if (video.requestFullscreen) {
            video.requestFullsreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); //Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); //Chrome and Safari
        }
    } //end switchFullScreen funtion
    scrubSlider.addEventListener("change", scrubVideo);
    video.addEventListener("timeupdate", movePlaySlider);
    scrubSlider.addEventListener("mousedown", pauseSlider);
    scrubSlider.addEventListener("mouseup", resumeSlider);

    function scrubVideo() {
        var scrubTime = video.duration * (scrubSlider.value / 100);
        video.currentTime = scrubTime;
    }
    function movePlaySlider() {
        var playbackPoint = (100 / video.duration) * video.currentTime;
        scrubSlider.value = playbackPoint;
    }
    function pauseSlider() {
        video.pause();
    }
    function resumeSlider() {
        video.play();
    }

    var currentDurationDisplay = document.getElementById("currentDuration");
    function getCurrentDuration() {
        var videoDuration = video.currentTime;
        var minutes = Math.floor(videoDuration / 60);
        var seconds = Math.floor(videoDuration % 60);
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        currentDurationDisplay.setAttribute("value", (minutes + ":" + seconds));
    }
    //script for video speed starts here
	 video.addEventListener("timeupdate", getCurrentDuration);
	
	 var playBackRayt = document.getElementById("playbackList");
     function setPlaySpeedRate() {
     if("2x" === playBackRayt.options[playBackRayt.selectedIndex].value){        
     video.playbackRate = 2.0;
     }
     if("175x" === playBackRayt.options[playBackRayt.selectedIndex].value){        
     video.playbackRate = 1.75;
     }
     if("15x" === playBackRayt.options[playBackRayt.selectedIndex].value){        
     video.playbackRate = 1.5;
     }
     if("125x" === playBackRayt.options[playBackRayt.selectedIndex].value){        
     video.playbackRate = 1.25;
     }
     if("Normal" === playBackRayt.options[playBackRayt.selectedIndex].value){        
     video.playbackRate = 1; 
     }
     if("075x" === playBackRayt.options[playBackRayt.selectedIndex].value){        
     video.playbackRate = 0.75;
     }
     if("05x" === playBackRayt.options[playBackRayt.selectedIndex].value){        
     video.playbackRate = 0.5;
     }
         //script for forward button starts here
	 }
	playBackRayt.addEventListener("click", setPlaySpeedRate);
	 
	 var forwardbut = document.getElementById("forward");
	 function forwardPlay()
	 {
		 video.playbackRate = 3.0;
	 }
	 function forwardletgo()
	 {
		 video.playbackRate = 2.0;
	 }
	 function forwarddouble()
	 {
		 video.playbackRate = 1.0;
	 }
	 //the different operations the forward button will go through after being clicked multiple times
	 forwardbut.addEventListener("mousedown", forwardPlay);
	 forwardbut.addEventListener("mouseup", forwardletgo);
	 forwardbut.addEventListener("dblclick", forwarddouble);
	 
	 var rewindvid = document.getElementById("rewind");
	 	 function rewindfull()
	 {
		 video.currentTime = video.currentTime -500000000;
	 }
	 rewindvid.addEventListener("click", rewindfull);
	    
} // end of main function