/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    var plus = 1;
    var re = [];
    for(var i = len-1; i >= 0; i--) {
    	var n = digits[i] + plus;
    	if(n > 9) {
    		re.push(n%10);
    		plus = 1;
    	}else{
    		re.push(n);
    		plus = 0;
    	}
    }
    if(plus > 0) {
    	re.push(plus);
    }
    return te.reverse();
};