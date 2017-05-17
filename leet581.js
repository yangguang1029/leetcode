/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let len = nums.length;
    let from = 0;
    let newarr = nums.slice(0);
    newarr.sort((left, right) => {
        return left - right;
    })
    while (from < len && nums[from] === newarr[from]) {
        from += 1;
    }
    let to = len - 1;
    while (to >= from && nums[to] === newarr[to]) {
        to -= 1;
    }
    return to - from + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([1, 2, 3]))
console.log(findUnsortedSubarray([3, 2, 1]))