/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var dic = stringToDic(s);
    var addplus = false;
    var re = 0;
    for(var key in dic) {
    	var v = dic[key];
    	if(v === 1) {
    	    addplus = true;
    		continue;
    	}
    	if(v % 2 === 0) {
    		re += v;
    	}else {
    	    addplus = true;
    		re += (v-1);
    	}
    }
    return addplus ? re+1 : re;
};