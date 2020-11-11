var rawver = fs.readFileSync('./file/version.json')
var ver = JSON.parse(rawver)
const contents = win.webContents
var request = require('request');

if (navigator.onLine == true) {
    // Save variable to know progress
    var received_bytes = 0;
    var total_bytes = 0;
    var req = request({
        method: 'GET',
        uri: "https://imagineeeinc.github.io/api/ver/power-notepad.ver.json"
    });
    var out = fs.createWriteStream("file/online-version.json");
    req.pipe(out);
    var raw_online_ver = fs.readFileSync('./file/online-version.json')
    var online_ver = JSON.parse(raw_online_ver)
}
console.log(ver)
console.log(online_ver)