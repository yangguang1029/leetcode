/**
 * @param {number[]} nums
 * @return {number}
 */

// 用暴力肯定是不行的。要两个乘积最大，
// 对第i位，可以先找出到它为止的的最大差值，
// 接下来对第i位，再找出它之后的最大值
var maximumTripletValue = function(nums) {
    const len = nums.length
    const max = new Array(len)
    for(let i = 0; i < len; i++) {
        max[i] = []
    }
    let maxleft = nums[0]
    for(let i = 0; i < len;i++) {
        const n = nums[i]
        if(n > maxleft) {
            maxleft = n
        }
        max[i].push(maxleft - n)
    }
    let maxright = nums[len-1]
    for(let i = len-1; i >0; i--) {
        const n = nums[i]
        if(n > maxright) {
            maxright = n
        }
        max[i-1].push(maxright)
    }
    let maxtotal = 0
    for(let i = 1; i < len-1; i++) {
        const [left,right] = max[i]
        const n = left * right
        if(n > maxtotal) {
            maxtotal = n
        }
    }
    return maxtotal
};

let  nums = [12,6,1,2,7]
console.log(maximumTripletValue(nums));