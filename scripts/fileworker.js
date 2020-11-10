fs = require('fs');
const { dialog } = require('electron').remote
var curtxt = gettext()

text.onkeyup = function() {
    if (curtxt != gettext()) {
        document.getElementById("title-text").innerHTML = "Power Notepad *"
    } else if (curtxt == gettext()) {
        document.getElementById("title-text").innerHTML = "Power Notepad"
    }
}

document.onkeydown = function(event) {
    console.log(event)
    if (event.code === "KeyS" && event.ctrlKey === true) {
        openmodal("Save key combo pressed")
    }
}
function clickchoosefile() {
    document.getElementById('choose-file').click()
}
function openfile(that) {
    //console.log(dialog.showOpenDialog({ properties: ['openFile'] }))
    if(that.files && that.files[0]){
        var reader = new FileReader();
        reader.onload = function (e) {  
            var output = e.target.result;
            settext(output)
            curtxt = output
        };
        reader.readAsText(that.files[0]);
    }
}