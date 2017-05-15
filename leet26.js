/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    if (len <= 1) {
        return len;
    }
    let i = 1;
    let j;
    while (i < len && nums[i] !== nums[i - 1]) {
        i += 1;
    }
    j = i;
    i += 1;
    while (i < len) {
        while (i < len && nums[i] === nums[i - 1]) {
            i += 1;
        }
        if (i < len) {
            nums[j] = nums[i];
            j += 1;
            i += 1;
        }
    }
    return j;
};

console.log(removeDuplicates([1, 1, 2]))