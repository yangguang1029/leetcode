/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sums = [0];
    let sum = 0;
    nums.forEach((item) => {
        sum += item;
        sums.push(sum);
    });
    this.sums = sums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */