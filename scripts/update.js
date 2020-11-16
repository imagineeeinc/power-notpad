var ver = JSON.parse('{"cur-rel-type": "beta","cur-ver": 1,"cur-sur-ver": 0,"cur-min-ver": 3,"cur-full-ver": "1.0.3"}')
var online_ver
if (navigator.onLine == true) {
    //get online ver
    ipc.send("download")
        //edit online ver to be correct
        setTimeout(function() {
            fs.readFile('Userfiles/online-version.json', 'utf8' , (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.writeFile("Userfiles/online-version.json", data.substr(0, data.length),  function (err) {
                    if (err) return console.log(err);
                })
                //console.log(data)
            })
            //read online ver and put in variable
            try {
                var raw_online_ver = fs.readFileSync('Userfiles/online-version.json')
                online_ver = JSON.parse(raw_online_ver)
            } catch (err) {
                console.error(err)
            }
            //var raw_online_ver = fs.readFileSync('Userfiles/online-version.json')
            //var online_ver = JSON.parse(raw_online_ver)

            console.log(ver)
            console.log(online_ver)

            if (navigator.onLine == true) {
                if (ver["cur-rel-type"] == "beta" && online_ver["cur-rel-type"] == "beta") {
                    if (ver["cur-ver"] < online_ver["cur-ver"]) {
                        console.log("need update");
                        needupdate();
                    } else if (ver["cur-sur-ver"] < online_ver["cur-sur-ver"]) {
                        console.log("need update");
                        needupdate();
                    } else if (ver["cur-min-ver"] < online_ver["cur-min-ver"]) {
                        console.log("need update");
                        needupdate();
                    }
                    console.log("beta version")
                } else if (ver["cur-rel-type"] == "main" && online_ver["cur-rel-type"] == "main") {
                    if (ver["cur-ver"] < online_ver["cur-ver"]) {
                        console.log("need update");
                        needupdate();
                    } else if (ver["cur-sur-ver"] < online_ver["cur-sur-ver"]) {
                        console.log("need update");
                        needupdate();
                    } else if (ver["cur-min-ver"] < online_ver["cur-min-ver"]) {
                        console.log("need update");
                        needupdate();
                    }
                    console.log("main version")
                } else if (ver["cur-rel-type"] == "dev" && online_ver["cur-rel-type"] == "dev") {
                    if (ver["cur-ver"] < online_ver["cur-ver"]) {
                        console.log("need update");
                        needupdate();
                    } else if (ver["cur-sur-ver"] < online_ver["cur-sur-ver"]) {
                        console.log("need update");
                        needupdate();
                    } else if (ver["cur-min-ver"] < online_ver["cur-min-ver"]) {
                        console.log("need update");
                        needupdate();
                    }
                    console.log("dev version")
                } else if (ver["cur-rel-type"] == "beta" && online_ver["cur-rel-type"] == "main") {
                    console.log("need update");
                    needupdate();
                    console.log("need to update to main")
                } else if (ver["cur-rel-type"] == "alpha") {
                    openmodal("Looks like you are running a weird version, update to lattest lattest version. <br> <button onclick='openupdatelin()'>Link to lattest download page</button>")
                }
            }
        }, 1500)
}
var version = ver

function needupdate() {
    openmodal("<h1>You are running a older version of Power Notepad</h1><br>Running an older version of power notepad means you miss out on the lattest features and fixes! <br><br> <button onclick='openupdatelin()'>Link to lattest download page</button><button onclick='hidemodal()'>cancel</button>")
    document.getElementById("update").style.display = "block"
}
function openupdatelin() {
    openlin(online_ver['lat-dow-lin'])
}