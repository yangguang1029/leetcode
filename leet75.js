/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// 用双指针交换2次就好了，第一次交换0和非0，第二次交换1和2
// 但这个方法说时间度超过了，题目进阶里也要求只便利一次

// 这个题目非常考验逻辑推理能力，写了一个多小时都没弄好，就因为思路没有理清楚

// 用双指针的方案，p0表示存放0的位置，p1表示存放1的位置。遍历数组，遇到0和1时，放到对应的位置，然后指针后移
// 问题就是，如果需要放0时，p0<p1，那p0的位置已经放1了，交换的话就把1交换出去了，
// 因此首先p0位置放0，p1后面的位置放1，
var sortColors = function(nums){
    const len = nums.length
    let p0 = 0
    let p1 = 0
    for(let i = 0; i < len; i++) {
        const n = nums[i]
        if(n === 1) {
            [nums[p1], nums[i]] = [nums[i], nums[p1]]
            p1++
        }
        if(n === 0) {
            [nums[p0], nums[i]] = [nums[i], nums[p0]]
            if(p0 < p1) {
                [nums[p1], nums[i]] = [nums[i], nums[p1]]
            }
            p0++
            p1++
        }
        
    }

}

// 这个单指针的方法，实际上和下面一样，也是循环了2次，没本质的区别，想要精简，只能用双指针
var sortColors1 = function(nums) {
    const len = nums.length
   let zindex = 0
   while(zindex < len && nums[zindex] === 0) {
    zindex++
   }
   for(let i = zindex+1; i < len; i++) {
    if(nums[i] === 0) {
        [nums[zindex], nums[i]] = [nums[i], nums[zindex]]
        zindex+=1
    }
   }
   while(zindex < len && nums[zindex] === 1) {
    zindex++
   }

   for(let i = zindex+1; i < len; i++) {
    if(nums[i] === 1) {
        [nums[zindex], nums[i]] = [nums[i], nums[zindex]]
        zindex+=1
    }
   }
}


var sortColors1 = function(nums) {
    const len = nums.length
    let left = 0
    let right = len-1
    while(left < right) {
        while(nums[left] === 0) {
            left++
        }
        while(nums[right] !== 0) {
            right--
        }
        if(left < right) {
            [nums[left],nums[right]] = [nums[right],nums[left]]
            left++
            right--
        }
    }
    left = 0
    while(left < len && nums[left] === 0) {
        left++
    }
    right = len-1
    while(left < right) {
        while(nums[left] !== 2) {
            left++
        }
        while(nums[right] !== 1) {
            right--
        }
        if(left < right) {
            [nums[left],nums[right]] = [nums[right],nums[left]]
            left++
            right--
        }
    }

};

let nums = [1,0,1]
sortColors(nums)
console.log(nums);

nums = [2,0,2,1,1,0]
sortColors(nums)
console.log(nums);
 nums = [1,0,2]
sortColors(nums)
console.log(nums);
