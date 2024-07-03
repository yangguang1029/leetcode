/**
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function(n) {
    var arr = [0,1,2];
    if(n < 3) {
    	return arr[n]
    }
    for(var i = 3; i <= n; i++) {
    	arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const arr = [1, 2]
    for(let i = 2; i < n; i++) {
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[n-1]
};