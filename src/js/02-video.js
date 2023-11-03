import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

function saveCurrentTime() {
  player.getCurrentTime().then((time) => {
    localStorage.setItem('videoplayer-current-time', time);
  });
}

function restoreCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
}

player.on('play', () => {
  saveCurrentTime();
});

player.on('ended', () => {
  localStorage.removeItem('videoplayer-current-time');
});


player.on('timeupdate', () => {
  saveCurrentTime();
});

restoreCurrentTime();
