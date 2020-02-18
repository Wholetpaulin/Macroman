// This is not the entry file for electron.
// To see the file that bootstraps our electron app see main.js

const {desktopCapturer, ipcRenderer, remote} = require('electron')
const robot = require('robotjs');

const startButton = document.getElementById('macro-start');

startButton.addEventListener('click', (event) => {
  console.log('event', event);
  // move the mouse to the top left and click every 5 seconds
});