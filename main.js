
var buttonClick = document.getElementById("translate");
var chosenLang =document.getElementById("selected")
var speak = document.getElementById('speak')


buttonClick.addEventListener("click", function() {
  var inputText = document.getElementById("message");
  if (chosenLang.value === "Latin") {
		var text = translator.translateToLatin(inputText.value);
	}else if (chosenLang.value === "Haitian") {
		var text = translator.translateToHaitian(inputText.value);
	}else if (chosenLang.value === "German") {
		var text = translator.translateToGerman(inputText.value);
	}
  document.getElementById('placement').innerHTML = text
})
speak.addEventListener("click", function() {
  var inputText = document.getElementById("placement").innerHTML
  var msg = new SpeechSynthesisUtterance(inputText);
  window.speechSynthesis.speak(msg);
})