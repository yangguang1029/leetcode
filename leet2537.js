/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {

    // 用动态规划，arr[i][j]表示从第i个元素到第j个元素的所有好的子数组数目
    // 然后arr[i][j+1]就是看第j+1个元素，前面有多少与它相同的
    // arr[i+1][j]，这个思路不行，复杂度太高了
    // 看了题解，用双指针加map。突破口在于，对于nums[i,j]如果是好的子数组，那么j之后的所有的都是

    let total = 0
    let left = 0
    let right = left
    const len = nums.length
    let countmap = {}
    let count = 0
    for(left = 0; left < len-1; left++) {
        while(right < len && count < k) {
            const n = nums[right]
            const c = (countmap[n] || 0)+1
            if(c > 1) {
                count += countmap[n]
            }
            countmap[n] = c
            right += 1
        }
        if(count >= k) {
            total += (len+1 - right)
            countmap[nums[left]] -= 1
            count -= countmap[nums[left]]
        }
    }
    return total
};

let nums = [1,1,1,1,1]
nums = [3,1,4,3,2,2,4]
let k = 10
k=2
console.log(countGood(nums, k));