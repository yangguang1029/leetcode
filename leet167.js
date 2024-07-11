/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(numbers, target) {
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

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    // 用双指针
    // 如果小于 target，则左指针右移，否则左移
    let start = 0;
    let end = numbers.length - 1
    while(start < end) {
        let n = numbers[start] + numbers[end]
        if(n === target) {
            return [start+1, end+1]
        }
        if(n < target) {
            start += 1
        } else {
            end -= 1
        }

    }
    return [-1, -1]

};