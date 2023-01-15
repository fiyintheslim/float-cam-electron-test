const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  const windw = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  windw.webContents.openDevTools();

  const windw2 = new BrowserWindow({
    width: 600,
    height: 800,
    resizable: false,
    minimizable: false,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  windw2.webContents.openDevTools();

  windw.loadURL(
    isDev
      ? `http://127.0.0.1:5173/`
      : path.join(__dirname, "../build/index.html")
  );
  windw2.loadFile(path.join(__dirname, "smallWindow/result.html"));

  ipcMain.on("pokemon-chosen", (event, pokemon) => {
    windw2.webContents.send("pokemon-chosen", pokemon);
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
