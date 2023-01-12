const path = require("path");
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  const windw = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true,
    },
  });


  windw.loadURL(
    isDev
      ? `http://127.0.0.1:5173/`
      : path.join(__dirname, "../build/index.html")
  );
}

app.whenReady().then(createWindow);

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
