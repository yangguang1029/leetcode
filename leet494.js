/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var nlen = nums.length;
    var count = 0;
    for(var i = 0, len = Math.pow(2, nlen); i < len; i++) {

    	var sub = 0;
    	var tmp;
    	for(var j = 0; j < nlen; j++) {
    		if(i & (1<<j) ) {
    			sub += nums[j];
    		}else {
    			sub -= nums[j];
    		}
    	}
    	if(sub === S) {
    		count += 1;
    	}

    }
    return count;
};


console.log(findTargetSumWays([1,1,1,1,1], 3));
// console.log(findTargetSumWays([1,1,1,1,1], 3));