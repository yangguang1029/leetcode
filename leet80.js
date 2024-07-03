/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let p = 0;
    
    
    const len = nums.length;

    // 初始状态，找到第一个需要写入 p 的地方
    while(p+2 < len && (nums[p] !== nums[p+1] || nums[p] !== nums[p+2])) {
        p += 1
    }
    p+=2;
    if(p >= len) {
        // 没有需要替换的
        return len;
    }
    // 开始寻找 q
    let q = p+1
    while(q<len && nums[q] === nums[p]) {
        q+=1
    }

    while(q<len) {
        const v = nums[q]
        let count = 0;
        while(q < len && nums[q] === v) {
            q +=1;
            count +=1
        }
        if(count === 1) {
            nums[p] = v;
            p+=1;
        }else {
            nums[p] = nums[p+1] = v;
            p +=2;
        }
    }
    return p
};

// console.log(removeDuplicates([1]))
// console.log(removeDuplicates([1,1]))
// console.log(removeDuplicates([1,1,1]))
console.log(removeDuplicates([1,1,1,2]))
console.log(removeDuplicates([1,2,3,4]))
console.log(removeDuplicates([1,1,2,2,2,3,4]))