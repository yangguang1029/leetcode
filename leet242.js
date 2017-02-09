/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var slen = s.length;
    var tlen = t.length;
    if(slen !== tlen) {
    	return false;
    }
    var sdic = stringToDic(s);
    var tdic = stringToDic(t);
    var re = true;
    for(var key in sdic) {
    	if(sdic[key] !== tdic[key]) {
    		re = false;
    		break;
    	}
    }
    return re;
};