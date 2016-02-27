
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
	newLanguage = [];
	inputArray.forEach(function(words) {
		newLanguage.push(haitian[words]);
	})
}


	return translator; 	
}(translator))

