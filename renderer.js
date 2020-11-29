const ipc = require("electron").ipcRenderer;
const buttonCreated = document.getElementById("Upload");

buttonCreated.addEventListener("click",function(event){
  
  ipc.send("open-file-dialog-for-file");
  

})