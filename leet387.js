/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	var dic = {};
    for(var i = 0, len = s.length; i < len; i++) {
    	var key = s[i];
    	var v = dic[key];
    	if(v) {
    		dic[key] = v+1;
    	}else {
    		dic[key] = 1;
    	}
    }

    for(var i = 0, len = s.length; i < len; i++) {
    	if(dic[s[i]] === 1){
    		return i;
    	}
    }
    return -1;
};