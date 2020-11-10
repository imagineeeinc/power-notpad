/*fs = require('fs');
var dir = "Userfiles"
var userusage = { isfirst: true, first: { open: "yes", time: 10 } }
try {
  if (fs.existsSync(dir + "/userusage.json" || dir + "/userconfig.json")) {
    //file exists
  }
} catch(err) {
    var userusage = { isfirst: true, first: { open: "yes", time: 10 } }
    console.error(err)
    fs.writeFile(dir + "/userusage.json", JSON.stringify(userusage),  function (err) {
      if (err) return console.log(err);
    })
    fs.writeFile(dir + "/userconfig.json", "{}",  function (err) {
        if (err) return console.log(err);
    })
}
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
//JSON.stringify()
//JSON.parse()
fs.writeFile(dir + "/userusage.json", JSON.stringify(userusage),  function (err) {
    if (err) return console.log(err);
})
fs.writeFile(dir + "/userconfig.json", "{}",  function (err) {
    if (err) return console.log(err);
})
//check for first time
fs.readFile(dir + "/userusage.json", {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        //console.log('received data: ' + data);
        uusage = JSON.parse(data)
        console.log(uusage)
        if (uusage.isfirst === true) {
            openmodal("<span style='text-align: center;'><h1>Power Notepad</h1><h4>welcome to power notepad, a more powerful note pad than your default notpad</h4></span>Current version: 1.0.0")
            userusage.isfirst = false
            fs.writeFile(dir + "/userusage.json", JSON.stringify(userusage),  function (err) {
                if (err) return console.log(err);
            })
        }
    } else {
        console.log(err);
    }
});
*/