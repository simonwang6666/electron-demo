const { app, BrowserWindow } = require('electron')

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      enableRemoteModule: true,
      webviewTag: true,
      contextIsolation: false,
    }
  })

  // 在执行 npm run start 后，经常会窗口已经显示出来了，但代码还未构建好，此时捕获到 did-fail-load 事件，在之后延迟重载
  win.webContents.on('did-fail-load', function () {
    console.log(`createWindow: did-fail-load, reload soon...`)
    setTimeout(() => {
      win.reload()
    }, 1000)
  })

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:9090')
  } else {
    win.loadFile('./dist/index.html')
  }

}

app.whenReady().then(createWindow)
