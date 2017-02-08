/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var mul= 1;
    nums.sort(function(left,right) {return left - right})
    var len = nums.length;
    if(len === 1) {
        return 0;
    }
    var re = 0;
    for(var i = len -1; i > 0; i--) {
        re += (nums[i] - nums[i - 1]) * mul;
        mul += 1;
    }
    return re;
};