/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    let len = nums.length
    if(len === 0) {
        return 0
    }
    let sum0 = [Number.MIN_SAFE_INTEGER]
    let sum1 = [nums[0]]
    let i = 1
    while(i < len) {
        let s0 = sum0[i-1]
        let s1 = sum1[i-1]
        let n = nums[i]
        sum0.push(Math.max(s1, s0))
        sum1.push(Math.max(s0+n, n))
        i+=1
    }
    return Math.max(sum0[len-1], sum1[len-1])
    
};

let nums = [2,1,4,5,3,1,1,3]
console.log(massage(nums));