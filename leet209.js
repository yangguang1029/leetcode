/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(target, nums) {

// 对题目的理解出错了，子数组意味着必须是从原数组里摘一段，不能改变其顺序，因此这个思路不对


//     // 最简单的就是从大到小排列，然后遍历，直到符合条件即可
//     nums.sort((left,right)=>right-left)
//     let n = 0;
//     let i = 0;
//     while(i < nums.length && n < target) {
//         n += nums[i]
//         i += 1
//     } 
    
//     return n >= target ? i : 0
// };


var minSubArrayLen = function(target, nums) {
    // 暴力解法就是双重循环，对每个元素，计算以它开始的符合条件的子数组长度，其时间复杂度为 n^2，这个显然是不符合要求的

    // 使用双指针可以简化时间复杂度
    // 初始是一个不符合要求的状态，将右指针往右移动，直到符合条件，这时候计算一次长度。然后将左指针往右移，直到不符合条件，这时候计算一次长度，然后开始下一次循环
    const len = nums.length
    let start = 0;
    let end = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let total = 0

    while(end < len) {
        while(end < len && total < target) {
            total += nums[end]
            end += 1
        }
        if(total < target && start === 0) {
            return 0
        }
        // start 是包含的，end 是不包含的
        let dis = end - start
        if(dis < min) {
            min = dis;
        }
        // 然后将左指针往右移，直到第一次不满足条件
        while(start < end && total >= target) {
            total -= nums[start]
            start += 1
        }
        dis = end - start + 1
        if(dis < min) {
            min = dis;
        }
    }
    

    return min;
}

let nums = [12,28,83,4,25,26,25,2,25,25,25,12]
let target = 213
console.log(minSubArrayLen(target, nums))

target = 7
nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target, nums))
