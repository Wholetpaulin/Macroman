// This is not the entry file for electron.
// To see the file that bootstraps our electron app see main.js

const {desktopCapturer, ipcRenderer, remote} = require('electron')
const robot = require('robotjs');
const screenSize = robot.getScreenSize();
robot.setMouseDelay(2); // Make mouse move faster
const height = screenSize.height;
const width = screenSize.width;
const startButton = document.getElementById('macro-start');
let macroRun = false;
let randomInterval = 3000;

startButton.addEventListener('click', (event) => {
  macroRun = !macroRun;
  console.log('event', event);
  const maxX = width - 0.05 * width;
  const maxY = height - 0.95 * height; // Top left corner is origin soo...
  console.log('width', width, 'height', height);
  for (var x = 0; x < maxX; x+=1) {
    // TODO: Add some optional variance on the movement here..
    robot.moveMouse(x, maxY);
  }
  // if(macroRun) {
  //   // This needs a controllable exit condition. Like if X key is pressed
  //   setTimeout(() => {
  //     console.log('got into the setTimeout!!');
  //     randomInterval = Math.floor(Math.random() * 3000) + 3000;
  //     robot.moveMouse(x, y); // move the mouse to the top right 
  //     robot.mouseClick(); // and click
  //   }, randomInterval); // every 3000-6000 seconds
  // }
});

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }