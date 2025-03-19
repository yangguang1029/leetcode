/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;
    // 首先找到最后一个升序的位置
    let firstindex = len -2
    while(firstindex >= 0 && nums[firstindex] >= nums[firstindex+1]) {
        firstindex--
    }
    if(firstindex >= 0) {
        // 找到第一个比它大的数字
       let secondindex = len -1
       while(secondindex > firstindex && nums[secondindex] <= nums[firstindex]) {
           secondindex--
       }
       //交换
       [nums[firstindex], nums[secondindex]] = [nums[secondindex], nums[firstindex]]
       // 把后面的数字改成升序
       const leftlen = len - firstindex - 1
       for(let j = 0; j < leftlen/2; j++) {
            [nums[firstindex+1+j], nums[len-1-j]] = [nums[len-1-j], nums[firstindex+1+j]]
       }
       
    }else {
        //没找到，完全是逆序，需要改成正序
        for(let i = 0; i < len/2;i++) {
            [nums[i], nums[len-1-i]] = [nums[len-1-i], nums[i]]
        }
    }
};

let nums = [2,3,1]
nextPermutation(nums)
console.log(nums)