/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var len = strs.length;
	if(len === 0) {
		return "";
	}
	if(len === 1) {
		return strs[0];
	}
    var rlen = 0;
    var bend = false;
    var first = strs[0];
    while(!bend) {
    	var c = first[rlen];
    	for(var i = 1; i < len; i++) {
    		var str = strs[i];
    		if(str.length === rlen) {
    			bend = true;
    			break;
    		}
    		if(str[rlen] !== c) {
    			bend = true;
    			break;
    		}
    	}
    	if(!bend) {
    		rlen += 1;
    	}
    	
    }
    return first.slice(0, rlen);
};