/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var isCapital = function(c) {
    	return c >= "A" && c <= "Z";
    }
    var bfirstCapital = isCapital(word[0]);
    var bAllCapital = true;
    var bAllNotCapital = true;
    for(var i = 1, len = word.length; i < len; i++){
    	if(isCapital(word[i])) {
    		bAllNotCapital = false;
    	}else {
    		bAllCapital = false;
    	}
    }
    if(bfirstCapital && bAllCapital) {
    	return true;
    }
    if(!bfirstCapital && bAllNotCapital) {
    	return true;
    }
    if(bfirstCapital && bAllNotCapital) {
    	return true;
    }
    return false;
};