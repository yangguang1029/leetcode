/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    let arr = [0, nums[0]];
    let index = 1;
    while (index < len) {
        arr[index + 1] = Math.max(nums[index] + arr[index - 1], arr[index]);
        index += 1;
    }
    return arr[len];
};