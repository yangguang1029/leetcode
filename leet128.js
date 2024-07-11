/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    // 要求时间复杂度位 n，但空间复杂度无要求，
    
    // 想到了用 map 存储，但遍历 nums 时去修改调整这个 map，就会有双重循环，导致时间复杂度增加
    // 题解中用了个技巧来避免，但实际上差别不大，所以无关紧要
    // 这个题解意义不大，纯粹是技巧而已

    const max = 0;

    const s = new Set(nums)
    nums.forEach(num => {
        if(!s.has(num-1)) { // 如果 num 不是最小，那就不用管，等走到最小那个再开始计数

            let c = 1;
            while(s.has(num+c)) {
                c+=1
            }
            if(c>max) {
                max = c
            }
        }
    })
    return max

};