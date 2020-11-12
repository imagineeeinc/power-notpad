var dir = "Userfiles"
var userusage = { isfirst: true }
var userconfig = { font_size: 16 }

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

try {
  if (!fs.existsSync(dir + "/userusage.json")) {
    //file exists
    var userusage = { isfirst: true }
    fs.writeFile(dir + "/userusage.json", JSON.stringify(userusage),  function (err) {
      if (err) return console.log(err);
    })
  }
} catch(err) {
    console.error(err)
}
try {
    if (!fs.existsSync(dir + "/userconfig.json")) {
      //file exists
      userconfig = { font_size: 16 }
      fs.writeFile(dir + "/userconfig.json", JSON.stringify(userconfig),  function (err) {
        if (err) return console.log(err);
      })
    }
  } catch(err) {
      console.error(err)
  }
//JSON.stringify()
//JSON.parse()
/*fs.writeFile(dir + "/userconfig.json", "{}",  function (err) {
    if (err) return console.log(err);
})*/
//check for first time
fs.readFile(dir + "/userusage.json", {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        //console.log('received data: ' + data);
        userusage = JSON.parse(data)
        //console.log(userusage)
        if (userusage.isfirst === true) {
            about()
            userusage.isfirst = false
            fs.writeFile(dir + "/userusage.json", JSON.stringify(userusage),  function (err) {
                if (err) return console.log(err);
            })
        }
    } else {
        console.log(err);
    }
});
fs.readFile(dir + "/userconfig.json", {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        //console.log('received data: ' + data);
        userconfig = JSON.parse(data)
        setfsize(userconfig.font_size)
    } else {
        console.log(err);
    }
});

function incresefsize() {
    setfsize(userconfig.font_size + 2)
    userconfig.font_size = userconfig.font_size + 2
    fs.writeFile(dir + "/userconfig.json", JSON.stringify(userconfig),  function (err) {
        if (err) return console.log(err);
      })
}
function decresefsize() {
    if (userconfig.font_size - 2 <= 6) {

    } else {
        setfsize(userconfig.font_size - 2)
        userconfig.font_size = userconfig.font_size - 2
        fs.writeFile(dir + "/userconfig.json", JSON.stringify(userconfig),  function (err) {
            if (err) return console.log(err);
        })
    }
}
function setfsize(size) {
    fsize.innerHTML = "#textbox {font-size: " + size +"px;}"
    document.getElementById("cursize").innerHTML = "Current Size: " + size
}