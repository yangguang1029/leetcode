/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let len = nums.length;
    let first, second, third;
    first = second = third = Number.MIN_SAFE_INTEGER;
    let writeCount = 0;
    nums.forEach((item) => {
        if (item > first) {
            third = second;
            second = first;
            first = item;
            writeCount += 1;
        } else if (item === first) {

        } else if (item > second) {
            third = second;
            second = item;
            writeCount += 1;
        } else if (item === second) {

        } else if (item > third) {
            third = item;
            writeCount += 1;
        }
    });

    return writeCount > 2 ? third : first;
};

console.log(thirdMax([2, 1, 1, 1]))
console.log(thirdMax([4, 3, 1, 1]))