/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // 指针
    const len = nums.length;
    let arr = []
    let p = 0;
    while(p < len) {
        let c = 1;
        const n = nums[p]
        while(nums[p+c]-n === c) {
            c += 1
        }
        if(c === 1) {
            arr.push(`${n}`)
        }else {
            arr.push(`${n}->${nums[p+c-1]}`)
        }
        p += c
    }
    return arr;

};