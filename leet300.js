/**
 * @param {number[]} nums
 * @return {number}
 */

// 主要是 dp 方程要想清楚
var lengthOfLIS1 = function(nums) {

    let arr = [[nums[0]]]
    for(let i = 1; i < nums.length; i++) {
        // 对第 i 个，遍历其之前的每一个，如果其最大值小于自己，则记录下来
        let tmp = [nums[i]]
        if(i === 8) {
            debugger
        }
        for(let j = 0; j < i; j++) {
            let jarr = arr[j]
            if(nums[i] > jarr[jarr.length - 1]) {
                jarr = [...jarr, nums[i]]
            }
            if(jarr.length > tmp.length || (jarr.length === tmp.length && jarr[jarr.length - 1] < tmp[tmp.length - 1]) ) {
                tmp = jarr;
            }
        }
        arr[i] = tmp;
    }

    return arr[nums.length - 1].length

};

var lengthOfLIS = function(nums) {

    let arr = [1]
    let max = 1
    for(let i = 1; i < nums.length; i++) {
        let tmp = 1
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                tmp = Math.max(tmp, arr[j]+1)
            }
            
        }
        arr[i] = tmp;
        max = Math.max(tmp, max)
       
    }

    return max

};

// const nums = [10,9,2,5,3,7,101,18]
// const nums = [0,1,0,3,2,3]
// const nums = [3,5,6,2,5,4,19,5,6,7,12]
const nums = [4,10,4,3,8,9]

console.log(lengthOfLIS(nums));