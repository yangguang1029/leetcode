/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function(nums) {
    let len = nums.length;
    if (len <= 1) {
        return len;
    }
    let i = 1;
    let j;
    while (i < len && nums[i] !== nums[i - 1]) {
        i += 1;
    }
    j = i;
    i += 1;
    while (i < len) {
        while (i < len && nums[i] === nums[i - 1]) {
            i += 1;
        }
        if (i < len) {
            nums[j] = nums[i];
            j += 1;
            i += 1;
        }
    }
    return j;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

   
    let len = nums.length
    if(len < 2) {
        return len;
    }
    let p = 0;
    while(p < len && nums[p-1] !== nums[p]) {
        p+=1
    }
    let q = p+1
    while(q<len) {
        // 找到第一个和 p 值不一样的
        while(q<len&& nums[q] === nums[p-1]) {
            q+=1;
        }
        if(q<len) {
            nums[p] = nums[q]
            p+=1
            q+=1
        }
    }
    return p

};

console.log(removeDuplicates([1, 1, 2]))