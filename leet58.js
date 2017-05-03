/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var len = s.length;
    var start = len-1;
    while(start >= 0 && s[start] === " ") {
    	start -= 1;
    }
    if(start < 0) {
    	return 0;
    }
    var end = start - 1;
    while(end >= 0 && s[end] !== " ") {
    	end -= 1;
    }
    return start - end;
};