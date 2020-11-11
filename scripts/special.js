console.log("%c0" + "%c0" + "%c0" + "%cWelcome to the devtools of power notepad", "color: springgreen;", "color: darkorange;", "color: crimson;", "color: aqua;")
function creator() {
    shell.openExternal('https://imagineeeinc.github.io/')
}
function repo() {
    shell.openExternal('https://github.com/imagineeeinc/power-notepad')
}
function prosite() {
    shell.openExternal('https://github.com/imagineeeinc/power-notepad')
}
function tellspe() {
    openmodal('<h1>🎆🎇✨🎉🔮Special🔮🎉✨🎇🎆</h1><br>The special menu is full of special things, links, and extras!✨<br><span style="color: white;" onclick="devtool()">devtool</span>')
}
function devtool() {
    win.webContents.openDevTools()
    hidemodal()
}