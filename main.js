var translator = (function() {
  var inputText = document.getElementById("words");
  var buttonClick = document.getElementById("button");
  var chosenLang =document.getElementById("selected")

  return {
  	getInput: function() {
  		return inputText;
  	},

	  buttonClick.addEventListener("click", function() {
	  	if (chosenLang.value === "latin") {
	  		translator.translateToLatin(inputArray.value);
	  	}else if (chosenLang.value === "haitian") {
	  		translator.translateToHaitian(inputArray.value);
	  	}else if (chosenLang.value === "german") {
	  		translator.translateToGerman(inputArray.value);
	  	}
	  })	
  }


  }

});