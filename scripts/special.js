console.log("%c✰" + "%c✰" + "%c✰" + "%c✰Welcome to the devtools of power notepad✰", "color: springgreen;", "color: darkorange;", "color: crimson;", "color: aqua;")  
function creator() {
    shell.openExternal('https://imagineeeinc.github.io/')
}
function repo() {
    shell.openExternal('https://github.com/imagineeeinc/power-notepad')
}
function prosite() {
    shell.openExternal('https://imagineeeinc.github.io/power-notepad')
}
function tellspe() {
    openmodal('<h1>🎆🎇✨🎉🔮Special🔮🎉✨🎇🎆</h1><br>The special menu is full of special things, links, and extras!✨<br><span style="color: white;" onclick="devtool()">devtool</span>')
}
function devtool() {
    win.webContents.openDevTools()
    hidemodal()
}
function reload() {
    win.reload()
}
function about() {
    openmodal("<h1 style='font-size: 69.23px;'><img src='file/power-notepad.svg' style='width: 100px;'>Power Notepad</h1><br><p>Version: " + version['cur-full-ver'] + "<br>Copyright © " + new Date().getFullYear() + " Imagineee<br><br>This app is under <button onclick='licence()'>MIT Licence</button></p><br><p>Power Notepad is more powerful notepad than the default one on your system, with a unique and minimlist ui and more features coming soon.</p><br><p><button onmouseup='creator()'>Creator's Website</button><br><button onmouseup='repo()'>Project Repo</button><br><button onmouseup='prosite()'>Project Website</button></p>")
}
function licence() {
    openlin("https://github.com/imagineeeinc/power-notepad/blob/main/LICENSE")
}
function openlin(link) {
    shell.openExternal(link) 
}