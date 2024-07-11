/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    // 显然是动态规划，能跳到第 n 个台阶，意味着前面的 n-1 个台阶中，能跳到的加上自己的步数，大于等于 n

    let dp = [true]
    for(let i = 1; i < nums.length; i++) {
        dp[i] = false;
        for(let j = 0; j < i; j++) {
            if(dp[j] && nums[j] + j >= i) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[nums.length -1]

};