import { app, BrowserWindow, webContents } from 'electron'
import { setTimeout } from 'timers';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

let mainWindow;
// const winURL = process.env.NODE_ENV === 'development'
//   ? `http://localhost:9080`
//   : `file://${__dirname}/index.html`;
const winURL = 'https://b.qms888.com/qms-b/';
const options = {extraHeaders: 'pragma: no-cache\n'}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    minHeight: 500,
    useContentSize: true,
    width: 1000,
    minWidth: 800,
    webPreferences: {webSecurity: false, nodeIntegrationInWorker: false, allowRunningInsecureContent: true},
  })
  mainWindow.loadURL(winURL, options);
  setTimeout(() => {
    mainWindow.maximize();
  },1000)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  }
})

app.on('will-finish-launching', () => {
  if (shouldQuit) {
    app.quit()
  }
})

doing()

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
})

function doing(){
   require('./menu.js');
   require('./topMenu.js');
}
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
