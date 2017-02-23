/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = 0;
    var len = nums.length;
    while(index < len && nums[index] < target) {
    	index += 1;
    }
    return index;
};