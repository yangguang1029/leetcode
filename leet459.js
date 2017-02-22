/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
	var len = s.length;
	
	if(len <= 1) {
		return false;
	}
    var check = function(str, index) {
    	var mlen = str.length;
    	if(mlen % index !== 0) {
    		return false;
    	}
    	var tmp = mlen/index;
    	for(var i = 0; i < index; i++) {
    		var c = str[i];
    		for(var j = 1; j < tmp; j++) {
    			if(str[j * index + i] !== c) {
    				return false;
    			}
    		}
    	}
    	return true;
    }
    
    var index = 1;
    var first = s[0];
    var re = false;
    while(index < len) {
    	if(s[index] === first) {
    		re =  check(s, index);
    		if(re) {
    			break;
    		}
    	}
    	index += 1;
    }
    return re;
};