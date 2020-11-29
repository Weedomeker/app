'use strict'

var app = require("electron").app;
var BrowserWindow = require("electron").BrowserWindow;
var os = require("os");
var { dialog } = require("electron");
var mainWindow = null;
var ipc = require("electron").ipcMain;

ipc.on("close-main-window",function(){
  app.quit();
});


app.on("ready", function() {
  var mainWindow = new BrowserWindow({
    resizable: true,
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    } 
  });
  mainWindow.loadURL("file://"+__dirname+"/index.html");

  mainWindow.on("closed",function(){
    mainWindow = null;
 });

 ipc.on("open-file-dialog-for-file", function(event) {
   if (os.platform() === "linux" || os.platform() === "win32")
   {
    dialog.showOpenDialog({
        properties:["openFile"]
    },function(files){
      if(files)
          event.sender.send("selected-file",files[0]);
    });
   } else {
      dialog.showOpenDialog({
        properties:["openFile", "openDirectory"]
      }, function(files){
        if(files)
          event.sender.send("selected-file",files[0]);
      });
   }});

});