/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    const bytes = []
    nums.forEach(num => {
        for(let i = 0; i < 32; i++) {
            const b = (num >> i ) & 1
            // console.log('b ', b);
            bytes[i] = (bytes[i] || 0) + b
        }
        // console.log('bytes ', bytes);
    })

    let result = 0
    for(let i = 0; i < 31; i++) {
        const b = bytes[i]
        if(b % 3 === 1) {
            result += Math.pow(2, i)
        }
    }
    return bytes[31]%3===0 ? result :  result - Math.pow(2, 31)
};

console.log(singleNumber([2,2,3,2]));