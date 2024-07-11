/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    // 用两个数组记录，before表示之前的所有乘积，after 表示之后的所有乘积
    // 对于第 i 个元素，则是用 before[i]乘以 after[i]

    const len = nums.length

    const before = [1]
    for(let i = 1; i < len; i++) {
        before[i] = before[i-1] * nums[i-1]
    }
    const after = []
    after[len-1] = 1
    for(let i = len-2; i>=0; i--) {
        after[i] = after[i+1]*nums[i+1]
    }
    const arr = []
    for(let i = 0; i < len; i++) {
        arr[i] = before[i]*after[i]
    }
    return arr

};