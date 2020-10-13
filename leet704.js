/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length
    while(start < end) {
        let mid = Math.floor((start+end)/2)
        let v = nums[mid]
        if(v > target) {
            end = mid
        } else if(v < target) {
            start = mid + 1
        } else {
            return mid
        }
    }
    return nums[start] === target ? start : -1
};

// console.log(search([-1,0,3,5,9,12], 2))

