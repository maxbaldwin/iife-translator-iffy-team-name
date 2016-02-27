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
    console.log("array", array);
    for (var i = 0; i < array.length; i++) {
      if (array[i] === "merry") {
        array[i] = german.merry
      } else if (array[i] === "christmas") {
        array[i] = german.christmas
      } else if (array[i] === "and") {
        array[i] = german.and
      } else if (array[i] === "happy") {
        array[i] = german.happy
      } else if (array[i] === "new") {
        array[i] = german.new
      } else if (array[i] === "year") {
        array[i] = german.year
      } else if (array[i] === "holidays") {
        array[i] = german.holidays
      }
    }
    text = array.join(" ")
    return text
  }
  return oldLanguage
}(translator || {}))