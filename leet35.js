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
    const len = nums.length;
    
    let left = 0;
    let right = len-1
    while(left < right) {
        const mid = Math.floor((left+right)/2)
        const n = nums[mid]
        if(n === target) {
            return mid
        }else if(n < target) {
            left = mid+1

        } else {
            right = mid
        }
    }
    // 到这里时，left 和 right 一定想等了
    return target === nums[left] ? left : (target < nums[left] ? left : left + 1 )

}

console.log(searchInsert([1], 1));