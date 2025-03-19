/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const find = function(leftindex, rightindex) {
        if(leftindex > rightindex) {
            return -1
        }
        const midindex = Math.floor((leftindex+rightindex)/2)
        if(nums[midindex] === target) {
            return midindex
        }else if(nums[midindex] > target) {
            return find(leftindex, midindex-1, target)
        }else {
            return find(midindex+1, rightindex, target)
        }
    }
    let index = find(0, nums.length-1)
    if(index === -1) {
        return [-1,-1]
    }
    let leftindex = index
    let rightindex = index
    while(index !== -1) {
        leftindex = index
        index = find(0, leftindex-1)
    }
    index = rightindex
    while(index!== -1) {
        rightindex = index
        index = find(rightindex+1, nums.length-1)
    }
    return [leftindex, rightindex]
};