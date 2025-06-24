/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    // 先排序，然后用双指针
    /* 思路对了，但数据量大的时候超时了。我的解法还是双重循环，而题解是用二分查找法来减少时间复杂度 */
    nums.sort((left,right)=>left-right)
    const len = nums.length

    const findmin = function(num, start, end) {
        // 找到第一个minindex使得nums[minindex] >= lower - num
        while(start < end) {
            let mid = Math.floor((start+end)/2)
            if(nums[mid] < (lower - num)) {
                start = mid + 1
            }else {
                end = mid
            }
        }
        return nums[start] >= (lower - num) ? start : -1
    }
    const findmax = function(num, start, end) {
        // 找到第一个maxindex使得nums[maxindex] <= upper - num
        while(start < end) {
            let mid = Math.ceil((start+end)/2)
            if(nums[mid] > (upper - num)) {
                end = mid-1
            }else {
                start = mid
            }
        }
        return nums[start] <= (upper - num) ? start : -1
    }
    console.log('nums ', nums);
    
    return nums.reduce((prev, current, index) => {
        console.log('当前元素 ', current, 'index ', index);
        const min = findmin(current, index+1, len-1)
        console.log('min ', min);
        const max = findmax(current, index+1, len-1)
        console.log('max ', max);
        
        return (max >0 && min > 0) ?  prev + (max-min)+1 : prev
    }, 0)
    
};

let nums = [0,1,7,4,4,5]
let lower = 3
let upper = 6
nums = [1,7,9,2,5]
lower = 11
upper = 11

console.log(countFairPairs(nums, lower, upper));