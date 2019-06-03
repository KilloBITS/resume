let VideoPlayer = {
  play: () => {
    document.getElementById('videoPlayerDOM').play();
    document.getElementsByClassName('pauseVideo')[0].style.display = 'block';
    document.getElementsByClassName('playVideo')[0].style.display = 'none';
  },
  pause: () => {
    document.getElementById('videoPlayerDOM').pause();
    document.getElementsByClassName('playVideo')[0].style.display = 'block';
    document.getElementsByClassName('pauseVideo')[0].style.display = 'none';
  }
}

export default VideoPlayer;
