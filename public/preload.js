const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("pokemon", {
  sendPokemon: (pokemon) => ipcRenderer.send("pokemon-chosen", pokemon),
  getPokemonDetails: (callback) => ipcRenderer.on("pokemon-chosen", callback),
});
