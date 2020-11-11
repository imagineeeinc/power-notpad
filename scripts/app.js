const { BrowserWindow } = require("electron");

const { remote } = require('electron')
const { shell } = require('electron')

win = remote.getCurrentWindow()

document.body.onkeydown = function(event) {
    if (event.keyCode === 73 && event.shiftKey === true && event.ctrlKey === true) {
        event.preventDefault()
    }
}