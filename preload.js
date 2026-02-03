const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('edubrowser', {
  ping: () => ipcRenderer.invoke('ping')
});
