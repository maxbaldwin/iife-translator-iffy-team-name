
var translator = (function(translator) {

	var haitian = {
		"merry" : "jwaye", 
		"christmas" : "nwèl", 
		"and" : "ak", 
		"happy" : "kè kontan", 
		"new" : "nouvo", 
		"year" : "ane",
		"holidays" : "jou konje"
	}

translator.translateToHaitian = function(inputArray) {
  var newArray = inputArray.split(" ");
	newLanguage = [];
	for (var i = 0; i < newArray.length; i++) {
		newLanguage.push(haitian[newArray[i]])	 			
	}
	
	return newLanguage.join(" ")
}
	return translator; 	
	
}(translator))
