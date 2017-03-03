/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0;
    var index = 0;
    var len = s.length;
    while(index < len) {
    	while(index < len && s[index] === ' ') {
    		index += 1;
    	}
    	if(index < len) {
    		count += 1;
    	}
    	while(index < len && s[index] !== ' ') {
    		index += 1;
    	}
    }
    return count;
};

console.log(countSegments("hello, 123, 456"))