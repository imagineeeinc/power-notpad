var findtxt
var finder = false

find.onkeyup = function() {
    var txt = gettext()
    findtxt = find.value
    txt = txt.replaceAll(findtxt, "<mark id='markey'>" + findtxt + "</mark id='markey'>")
    settext(txt)
    finder = true
}

text.onkeydown = function() {
    if (finder == true) {
        var txt = gettext()
        findtxt = find.value
        txt = txt.replaceAll("<mark id='markey'>" + findtxt + "</mark id='markey'>", findtxt)
        settext(txt)
        finder = false
    }

    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode == text) {
        caretPos = range.endOffset;
      }
    }
    /*var Pos = text.selectionStart + 1;
    text.focus();
    text.setSelectionRange(Pos, Pos);
    console.log(caretPos)*/
}

function replacef() {
  var txt = gettext()
  findtxt = find.value
  retxt = replace.value
  txt = txt.replace(findtxt, retxt)
  settext(txt)
}

function replacea() {
  var txt = gettext()
  findtxt = find.value
  retxt = replace.value
  txt = txt.replaceAll(findtxt, retxt)
  settext(txt)
}