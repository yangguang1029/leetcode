/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
	if(n === 2) {
		return 1;
	}else if(n === 3) {
		return 2;
	}

    var arr = [0,1,2,3];
    var index = 4;
    while(index <= n) {
    	arr[index] = Math.max(2*arr[index-2], 3* arr[index-3]);
    	index += 1;
    }

    return arr[n];
};