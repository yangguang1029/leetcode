/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var index = 0;
    var count = 0;
    while(index < 32) {
    	if(n & (1<< index)) {
    		count += 1;
    	}
    	index += 1;
    }
    return count;
};