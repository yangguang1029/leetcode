/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function(nums) {
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


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    if(len < 2) {
        return nums[0]
    }
    const arr = [nums[0], Math.max(nums[0], nums[1])]
    for(let i = 2; i < len; i++) {
        arr[i] = Math.max(arr[i-1], nums[i] + arr[i-2])
    }
    return arr[len-1]
};