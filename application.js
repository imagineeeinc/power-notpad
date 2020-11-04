const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    //frame: false,
    //backgroundColor: '#3b10e6',
    fullscreenable: true,
    hasShadow: true,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
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