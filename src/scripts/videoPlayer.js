let VideoPlayer = {
  updateProgressBar: () => {
    var progressBar = document.getElementById('videoTrackProcent');
    var percentage = Math.floor((100 / VideoPlayer.mediaPlayer.duration) * VideoPlayer.mediaPlayer.currentTime);
    console.log(percentage)
    progressBar.style.width = percentage + '%';
    // progressBar.innerHTML = percentage + '% played';
  },
  init: () => {
    console.log('Player init');
    if(VideoPlayer.mediaPlayer === undefined){
      VideoPlayer.mediaPlayer = document.getElementById('videoPlayerDOM');
    }
    VideoPlayer.mediaPlayer.addEventListener('timeupdate', VideoPlayer.updateProgressBar, false);
  },
  play: () => {
    VideoPlayer.mediaPlayer.play();
    document.getElementsByClassName('pauseVideo')[0].style.display = 'block';
    document.getElementsByClassName('playVideo')[0].style.display = 'none';
    document.getElementsByClassName('minVideoPause')[0].style.display = 'block';
    document.getElementsByClassName('minVideoPlay')[0].style.display = 'none';
  },
  pause: () => {
    VideoPlayer.mediaPlayer.pause();
    document.getElementsByClassName('playVideo')[0].style.display = 'block';
    document.getElementsByClassName('pauseVideo')[0].style.display = 'none';
    document.getElementsByClassName('minVideoPlay')[0].style.display = 'block';
    document.getElementsByClassName('minVideoPause')[0].style.display = 'none';
  },
  fullScreenVideo: () => {
    if (VideoPlayer.mediaPlayer.requestFullscreen) {
      VideoPlayer.mediaPlayer.requestFullscreen();
    } else if (VideoPlayer.mediaPlayer.mozRequestFullScreen) { /* Firefox */
      VideoPlayer.mediaPlayer.mozRequestFullScreen();
    } else if (VideoPlayer.mediaPlayer.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      VideoPlayer.mediaPlayer.webkitRequestFullscreen();
    } else if (VideoPlayer.mediaPlayer.msRequestFullscreen) { /* IE/Edge */
      VideoPlayer.mediaPlayer.msRequestFullscreen();
    }
  }
}

export default VideoPlayer;
