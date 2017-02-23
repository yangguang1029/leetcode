/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
	if(num <= 0) {
		return false;
	}
    var index = 0;
    var bfind = false;
    while(index < 31) {
    	var tmp = 1 << index;
    	if(bfind && (num & tmp) !== 0) {
    		return false;
    	}
    	if(index % 2 === 0 && (num & tmp) !== 0) {
    		bfind = true;
    	}
    	if(index %2 === 1 && ((num&tmp) !== 0)) {
    		return false;
    	}
    	index += 1;
    }
    return true;
};



console.log(isPowerOfFour(5));