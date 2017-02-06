/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sf = function(left, right){
    	if(left < right) {
    		return 1;
    	}else if(left > right) {
    		return -1;
    	}
    	return 0;
    }
    var sa = s.split("").sort(sf);
    var ta = t.split("").sort(sf);
    for(var i = 0, len = sa.length; i < len; i++) {
    	if(sa[i] !== ta[i]) {
    		return ta[i];
    	}
    }
    return ta[i];
};

console.log(findTheDifference("abacdef", "abacddef"))