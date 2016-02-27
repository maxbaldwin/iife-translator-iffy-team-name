
var translator = (function(translator) {

	var haitian = {
		"merry" : "jwaye", 
		"christmas" : "nwèl", 
		"and" : "ak", 
		"happy" : "kè kontan", 
		"new" : "nouvo", 
		"year" : "ane"
		"holidays" : "jou konje"
	}

translator.translateToHaitian = function(inputArray) {
  var newArray = inputArray.split(" ");
	newLanguage = [];
	inputArray.forEach(function(words) {
		newLanguage.push(haitian[newArray[words]]);
	})
}

	return translator; 	
	
}(translator))

