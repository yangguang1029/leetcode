/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var words = str.split(" ");
    var slen = words.length;
    var plen = pattern.length;
    if(slen !== plen) {
    	return false;
    }
    var dic = {};
    var dic1 = {};
    for(var i = 0; i < slen; i++) {
    	var word = words[i];
    	var pa = pattern[i];
    	var tmp = dic[word];
    	var tmp1 = dic1[pa];
    	if(!tmp && !tmp1) {
    		dic[word] = pa;
    		dic1[pa] = word;
    	}else{
    		if(tmp !== pa || tmp1 !== word) {
    			return false;
    		}
    	}
    }
    return true;
};