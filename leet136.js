var singleNumber = function(nums) {
    var a = 0;
    for(var i = 0, len = nums.length; i < len; i++) {
    	a = a ^ nums[i];
    }
    return a;
};