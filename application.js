//const { app, BrowserWindow } = require('electron')
const { app } = require('electron')
const { BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    //titleBarStyle: "hidden",
    frame: false,
    //backgroundColor: '#3b10e6',
    //transparent: true,
    fullscreenable: true,
    hasShadow: true,
    width: 800,
    height: 600,
    minimizable: true,
		maximizable: true,
    //defaultFontFamily: "monospace",
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
  //win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})