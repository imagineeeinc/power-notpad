fs = require('fs');
const { dialog } = require('electron').remote
var curtxt = gettext()
var curfile = ""

text.onkeyup = function() {
    if (curtxt != gettext()) {
        document.getElementById("title-text").innerHTML = "Power Notepad *"
    } else if (curtxt == gettext()) {
        document.getElementById("title-text").innerHTML = "Power Notepad"
    }
    undoli.push(gettext())
}

document.onkeydown = function(event) {
    //console.log(event)
    if (event.code === "KeyS" && event.ctrlKey === true) {
        //openmodal("Save key combo pressed")
        savefile()
    }
}
function clickchoosefile() {
    document.getElementById('choose-file').click()
}
function openfile(that) {
    //console.log(dialog.showOpenDialog({ properties: ['openFile'] }))
    //console.log(that.files[0].path)
    if(that.files && that.files[0]){
        var reader = new FileReader();
        reader.onload = function (e) {  
            var output = e.target.result;
            var newout = output.replaceAll("<", "&lt");
            settext(newout);
            curtxt = newout;
            curfile = that.files[0].path;
        };
        reader.readAsText(that.files[0]);
        document.getElementById("file").click();
    }
}
function savefile() {
    if (curfile != "") {
        fs.writeFile(curfile, gettext(),  function (err) {
            if (err) return console.log(err);
        })
        curtxt = gettext()
    } else if (curfile == "") {
        var save = dialog.showSaveDialogSync([BrowserWindow, ], {title: "Save File as"})
        //console.log(save)
        if (save != undefined) {
            curfile = save
            fs.writeFile(curfile, gettext(),  function (err) {
                if (err) return console.log(err);
            })
            curtxt = gettext()
        }
    }
}
function savenclose() {
    if (curfile != "") {
        fs.writeFile(curfile, gettext(),  function (err) {
            if (err) return console.log(err);
        })
        curtxt = gettext()
    } else if (curfile == "") {
        var save = dialog.showSaveDialogSync([BrowserWindow, ], {title: "Save File as"})
        //console.log(save)
        if (save != undefined) {
            curfile = save
            fs.writeFile(curfile, gettext(),  function (err) {
                if (err) return console.log(err);
            })
            curtxt = gettext()
            closeapp()
        }
    }
}
function saveas() {
    var save = dialog.showSaveDialogSync([BrowserWindow, ], {title: "Save File as"})
    //console.log(save)
    if (save != undefined) {
        curfile = save
        fs.writeFile(curfile, gettext(),  function (err) {
            if (err) return console.log(err);
        })
        curtxt = gettext()
    }
}
