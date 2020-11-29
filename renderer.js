const ipc = require("electron").ipcRenderer;
const buttonCreated = document.getElementById("upload");

buttonCreated.addEventListener("click",function(event){
  
  ipc.send("open-file-dialog-for-file");
  
});

ipc.on("selected-file",function(event, path){
  console.log("Full Path: ", path);
});