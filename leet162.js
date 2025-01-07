/**
 * @param {number[]} nums
 * @return {number}
 */

// 主要是想明白峰值的特征，对于任何一个位置 i，如果 i+1 值大于它，那么右边一定有峰值，否则的话往左边有峰值
//如果 i 的取值，每次都取中点，那就变成了二分查找法


var findPeakElement = function(nums) {

    let left = 0;
    let right = nums.length - 1
    while(left < right) {
        const mid = Math.floor((left+right)/2)
        const n1 = nums[mid]
        const n2 = nums[mid+1]
       if(n2 > n1) {
        // 检查 mid+1
        
       }
    }
    
};