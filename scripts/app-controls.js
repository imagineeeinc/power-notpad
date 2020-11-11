/*const { BrowserWindow } = require("electron");
const { remote } = require('electron')*/

win = remote.getCurrentWindow()

document.getElementById("close-app").onmouseup = function() {
    win.close()
};
document.getElementById("clo-win").onmouseup = function() {
    win.close()
};
document.getElementById("maximize-app").onmouseup = function() {
    if (win.isMaximized()) {
        win.unmaximize()
    } else {
        win.maximize()
    }
}
document.getElementById("max-win").onmouseup = function() {
    if (win.isMaximized()) {
        win.unmaximize()
    } else {
        win.maximize()
    }
}
document.getElementById("minimize-app").onmouseup = function() {
    win.minimize()
};
document.getElementById("min-win").onmouseup = function() {
    win.minimize()
};