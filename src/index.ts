import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/AdsPlugin';

const video = document.querySelector("video");
const playButton: HTMLElement = document.querySelector("#playBtn");
const muteButton: HTMLElement = document.querySelector("#muteBtn");

const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay(),
  new AutoPause(),
  new AdsPlugin(),
]});

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(
    error => {
      console.log(error.message);
    }
  );
}