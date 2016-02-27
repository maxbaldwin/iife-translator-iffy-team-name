var translator = (function(oldLanguage) {
  var german = {
    "merry": "Fröhliche",
    "christmas": "Weihnachten",
    "happy": "schöne",
    "holidays": "Ferien",
    "new": "neues",
    "year": "Jahr",
    "and": "und"
  }
  oldLanguage.translateToGerman = function(text) {
    var array = text.split(" ")
    for (var i = 0; i < array.length; i++) {
      array[i] = german[array[i]]
      if (array[i] === undefined) {
        array [i] = "monkeybutt"
      }
    }
    text = array.join(" ")
    return text
  }
  return oldLanguage
}(translator || {}))