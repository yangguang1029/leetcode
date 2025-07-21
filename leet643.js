/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = nums.slice(0,k).reduce((prev, current)=>prev+current, 0)
    let sum = max;
    for(let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i-k]
        if(sum > max) {
            max = sum
        }
    }
    return max/k
};
let nums = [0,4,0,3,2]
let k = 1

console.log(findMaxAverage(nums, k));