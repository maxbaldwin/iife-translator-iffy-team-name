var translator = (function() {
  var buttonClick = document.getElementById("button");
  var chosenLang =document.getElementById("selected")

  return {
    
	  buttonClick.addEventListener("click", function() {
      var inputText = document.getElementById("words");

      
	  	if (chosenLang.value === "latin") {
	  		translator.translateToLatin(inputText.value);
	  	}else if (chosenLang.value === "haitian") {
	  		translator.translateToHaitian(inputText.value);
	  	}else if (chosenLang.value === "german") {
	  		translator.translateToGerman(inputText.value);
	  	}
	  })	
  }


  }

}());