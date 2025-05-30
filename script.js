const editor=document.getElementById("editor");

function format(command) {
    editor.focus();
    document.execCommand(command,false,null);
}

function changeColor(color) {
    document.execCommand ("foreColor",false,color);
}

function alignText (direction){
   const commands={

        
        center:"justifyCenter",
        justify:"justifyFull",
        right:"justifyRight",
        left:"justifyLeft",
       

    };
     editor.focus();
     document.execCommand(commands[direction], false, null);

     
     }
    


function undo(){
    document.execCommand ("undo",false,null);

}

function redo(){
    document.execCommand("redo",false,null);
}