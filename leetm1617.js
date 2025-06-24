/**
 * @param {number[]} nums
 * @return {number}
 */


// 保存一个包含最后一位数字，不包含最后一个数字的最大值

var maxSubArray = function(nums) {
    const len = nums.length
    let sum0 = [Number.MIN_SAFE_INTEGER]
    let sum1 = [nums[0]]
    let i = 1
    while(i < len) {
        const n = nums[i]
        const s0 = sum0[i-1]
        const s1 = sum1[i-1]
        sum0.push(Math.max(s0, s1))
        sum1.push(Math.max(n, n+s1))
        i+=1
    }
    return Math.max(sum0[len-1], sum1[len-1])
};
let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));