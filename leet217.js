/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var len = nums.length;
    var dic = {};
    var re = false;
    for(var i = 0; i < len; i++) {
    	var key = "" + nums[i];
    	if(!dic[key]) {
    		dic[key] = 1;
    	}else {
    		re = true;
    		break;
    	}
    }
    return re;
};