/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if(n <= 0) {
		return false;
	}
	if(n === 1) {
		return true;
	}
    while(n > 1) {
    	if(n%3 !== 0) {
    		return false;
    	}
    	n = Math.floor(n/3);
    }
    return true;
};

var isPowerOfThree = function(){
	return Math.pow(3, 19) % n === 0;
}