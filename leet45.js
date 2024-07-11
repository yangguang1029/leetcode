/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    // 动态规划

    const n = nums.length
    // 只有一个元素时不需要跳，2 个元素时必须跳 1 次，因为规则设定了一定可以跳到，所以不考虑跳不到的情况
    let arr = [0, 1]

    for(let i = 2; i < n; i++) {
        let min = n;
        for(let j = 0; j < i; j++) {
            if((nums[j] + j >= i) && (min > (arr[j]+1))) {
                min = arr[j]+1
            }   
        }
        arr[i] = min
    }

    return arr[n-1]

};

console.log(jump([1,2,1,1,1]))