/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    const len = nums.length
    return nums.reduce((prev,current, index) => {
        if(index >= len - 2) {
            return prev
        }
        if(2*(current + nums[index+2]) === nums[index+1]) {
            return prev + 1
        }
        return prev
    }, 0)
};