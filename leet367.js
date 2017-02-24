/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) {
    	return true;
    }
    var index = 2;
 	var current = index * index;
    while(current <= num) {
    	if(num % current === 0) {
    		return isPerfectSquare(num/current);
    	}else {
    		index += 1;
    		current = index * index;
    	}
    }
    return false;
};