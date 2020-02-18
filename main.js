const { app, BrowserWindow, ipcMain, Shell, Menu } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'src/index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

};

// -------------------------------------------------------------
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Define top bar menu options
const menu = Menu.buildFromTemplate([
  {
    label: 'Menu',
    submenu: [
      {
        label: 'Create New Macro',
        submenu: [
          { label: 'Create SIMPLE Macro' },
          { label: 'Create SMART Macro' },
          { label: 'Create Macro from Scratch' }
        ]
      },
      { label: 'Run Saved Macro' },
      { type: 'separator' },
      {
        label: 'Exit Application',
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'Info',
    submenu: [
      {
        label: 'Preferences',
        // TODO:  
      },
      {
        label: 'About Us',
        click() {
          Shell.openExternal('http://paultrettenero.com');
        }
      }
    ]
  }
]);

Menu.setApplicationMenu(menu);

