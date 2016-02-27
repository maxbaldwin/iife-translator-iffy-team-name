// first variables set in row 3 - 11

var translator = (function(oldLanguage) {
  var latin = {
    "merry": "epulari",
    "christmas": "Christus",
    "happy": "laeta",
    "holidays": "Feriae",
    "new": "novus",
    "year": "anno",
    "and": "et"
  }

// IFFE statements 16 - 42

  oldLanguage.translateToLatin = function(text) {
    var array = text.split(" ")
    for (var i = 0; i < array.length; i++) {
      
// list all arrays used, lines 23 - 36

      if (array[i] === "merry") {
        array[i] = latin.merry
      } else if (array[i] === "christmas") {
        array[i] = latin.christmas
      } else if (array[i] === "year") {
        array[i] = latin.year
      } else if  (array[i] === "holidays") {
        array[i] = latin.holidays
      }else if (array[i] === "and") {
        array[i] = latin.and
      } else if (array[i] === "happy") {
        array[i] = latin.happy
      } else if (array[i] === "new") {
        array[i] = latin.new
      }
  }
  text = array.join("")
  return text
}
return oldLanguage
}(translator || {}))

// End of coding for JS used lines 3 - 42


