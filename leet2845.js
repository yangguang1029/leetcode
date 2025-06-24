/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    // 用最笨的方法把所有子数列列举出来，然后去判断的话，时间复杂度一定会超了
    // 用动态规划，也超时了
    const len = nums.length
    let last = [nums[0]%modulo === k ? 1 : 0]
    let count = last[0]%modulo === k ? 1 : 0
    for(let i = 1; i < len; i++) {
        last.push(0)
        const isadd = nums[i] % modulo === k
        last = last.map(item=>{
            item += (isadd ? 1: 0)
            if(item%modulo === k) {
                count += 1
            }
            return item
        })
    }
    return count
};

console.log(countInterestingSubarrays([3,2,4], 2, 1));
console.log(countInterestingSubarrays([3,1,9,6], 3, 0));