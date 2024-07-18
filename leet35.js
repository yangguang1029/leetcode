/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function(nums, target) {
    // 这个不是 logn 的算法，必须用二分查找才是 logn
    var index = 0;
    var len = nums.length;
    while(index < len && nums[index] < target) {
    	index += 1;
    }
    return index;
};

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right-1) {
        const mid =  Math.floor((left+right)/2)
        const n = nums[mid]
        if(n === target) {
            return mid
        }else if(n < target) {
            left = mid
        }else {
            right = mid
        }
    }
    return left

}