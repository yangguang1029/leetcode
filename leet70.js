/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [0,1,2];
    if(n < 3) {
    	return arr[n]
    }
    for(var i = 3; i <= n; i++) {
    	arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};