const { app, BrowserWindow } = require("electron");
const path = require("node:path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: true,
      nodeIntegration: true,
      devTools: false,
    },
  });

  // win.loadFile(path.join(__dirname, "./fe/dist/index.html"));
  win.loadURL("http://localhost:5173");

  // Mở DevTools khi cửa sổ khởi tạo
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//https://www.youtube.com/watch?v=rZTmnfD00AU
