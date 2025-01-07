/**
 * @param {number[]} nums
 * @return {number}
 */

// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。


// 示例 1:

// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2
// 示例 2:

// 输入: nums =  [3,3,7,7,10,11,11]
// 输出: 10

// 从示例里很容易看出来，可以用二分查找法来做



var singleNonDuplicate = function(nums) {

    function inner(start,stop) {
        if(start === stop) {
            return nums[start]
        }
        const midindex = Math.floor((start+stop)/2)
        const mid = nums[midindex]
        const left = nums[midindex-1]
        const right = nums[midindex+1]
        if(mid !== left && mid !== right) {
            return mid
        }
        if(mid === left) {
            // 看看左边剩余数量是否是奇数
            return (midindex-2-start)%2===0 ? inner(start, midindex-2): inner(midindex+1, stop)
        }
        return (stop-midindex-2)%2===0 ? inner(midindex+2, stop): inner(start,midindex-1)

    }
    return inner(0, nums.length-1)    
};

let nums = [1,1,2,3,3,4,4,8,8]
// nums = [3,3,7,7,10,11,11]
// 输出: 10

console.log(singleNonDuplicate(nums));