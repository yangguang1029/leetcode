/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var arr = [nums[0]];
    var max = nums[0];
    for(var i = 1, len = nums.length; i < len; i++) {
    	var pre = arr[i-1];
    	var num = nums[i];
    	var tmp;
    	if(pre > 0) {
    		tmp = pre + num;
    	}else{
    		tmp = num;
    	}
    	if(tmp > max) {
    		max = tmp;
    	}
    	arr[i] = tmp;
    }
    return max;
};