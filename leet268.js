/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var len = nums.length;
    var sum = (1+n) * n / 2;
    var sum1 = 0;
    for(var i = 0; i < len; i++) {
    	sum1 += nums[i];
    }
    return sum-sum1;
};