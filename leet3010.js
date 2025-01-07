/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {

    const newnums = nums.slice(1)
    newnums.sort((left,right)=>left-right)
    return nums[0]+newnums[0]+newnums[1]
    
};