/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var count = 0;
    var m = 1;
    var tmp = Math.pow(5, m);
    while(tmp < n) {
    	count += Math.floor(n/tmp);
    	m+=1;
    	tmp = Math.pow(5, m);
    }
    return count;
};

