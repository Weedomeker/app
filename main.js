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
    width: 640,
    height: 480,
    autoHideMenuBar: false,
    useContentSize: true,
    transparent: false,
    frame: true,
    webPreferences: {
      nodeIntegration: true
    } 
  })
  mainWindow.loadURL("file://"+__dirname+"/index.html");

  mainWindow.on("closed",function(){
    mainWindow = null;
 });

 

});