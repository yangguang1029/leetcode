/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    // 先找出所有的对角线数据，然后排序，然后找出最大的质数
    const len = nums.length
    const diagonals = []
    for(let i = 0; i < len; i++) {
        diagonals.push(nums[i][i])
        diagonals.push(nums[i][len-1-i])
    }
    diagonals.sort((a,b)=>b-a)
    const isPrime = (num) => {
        if(num < 2) {
            return false
        }
        for(let i = 2; i*i <= num; i++) {
            if(num % i === 0) {
                return false
            }
        }
        return true
    }
    for(let i = 0; i < diagonals.length; i++) {
        if(isPrime(diagonals[i])) {
            return diagonals[i]
        }
    }
    return 0
};