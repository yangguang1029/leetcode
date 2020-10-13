/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let re = []
    for(let i = 0; i < n; i++) {
        re.push(nums[i])
        re.push(nums[i+n])
    }
    return re
};