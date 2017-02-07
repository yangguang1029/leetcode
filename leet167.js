/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var dic = {};
    for(var i = 1, len = numbers.length; i <= len; i++) {
    	dic[""+numbers[i-1]] = i;
    }
    for(var i = 1, len = numbers.length; i <= len; i++) {
    	var value = dic["" + (target - numbers[i-1])];
    	if(value && value != i) {
    		return [i, value];
    	}
    }
    return [-1,-1];
};