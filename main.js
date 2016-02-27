
var buttonClick = document.getElementById("translate");
var chosenLang =document.getElementById("selected")
var speak = document.getElementById('speak')


buttonClick.addEventListener("click", function() {
  var inputText = document.getElementById("message").value.toLowerCase();
  if (chosenLang.value === "Latin") {
		var text = translator.translateToLatin(inputText);
	}else if (chosenLang.value === "Haitian") {
		var text = translator.translateToHaitian(inputText);
	}else if (chosenLang.value === "German") {
		var text = translator.translateToGerman(inputText);
	}
  document.getElementById('placement').innerHTML = text
})
speak.addEventListener("click", function() {
  var inputText = document.getElementById("placement").innerHTML
  var msg = new SpeechSynthesisUtterance(inputText);
  window.speechSynthesis.speak(msg);
})