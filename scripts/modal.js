var modal = document.getElementById("Modal");
var mtext = document.getElementById("m-txt");

var close = document.getElementsByClassName("close-m")[0];

function openmodal(text) {
    modal.style.display = "block";
    if (text != "<&none&>") {
        mtext.innerHTML = text
    }
}

close.onclick = function() {
  modal.style.display = "none";
}
function hidemodal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}