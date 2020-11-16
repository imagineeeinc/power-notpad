var dir = "Userfiles"
var size = 16

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

if (localStorage.getItem("userusage") === null) {
    localStorage.setItem("userusage", false)
}
if (localStorage.getItem("fontsize") === null) {
    localStorage.setItem("fontsize", size)
    size = localStorage.getItem("fontsize") 
}
s()
//check for first time
if (localStorage.getItem("userusage") == "false") {
    setTimeout(function() {
        about()
    }, 1)
    localStorage.setItem("userusage", true)
}
function s() {
    size = localStorage.getItem("fontsize")
    fsize.innerHTML = "#textbox {font-size: " + size +"px;}"
    document.getElementById("cursize").innerHTML = "Current Size: " + size
}
function incresefsize() {
    size = +size + 2
    setfsize(size + 2)
}
function decresefsize() {
    if (size - 2 <= 6) {

    } else {
        size -= 2
        setfsize(localStorage.getItem("fontsize") - 2)
    }
}
function setfsize() {
    fsize.innerHTML = "#textbox {font-size: " + size +"px;}"
    document.getElementById("cursize").innerHTML = "Current Size: " + size
    localStorage.setItem("fontsize", size)
}