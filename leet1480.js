/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let tmp = 0
    return nums.map(item=>{
        tmp += item
        return tmp
    })
};