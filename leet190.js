/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let p;
    let re = 0;
    let index = 31;
    while (n) {
        p = n & 1;
        if (p) {
            re = re | (p << index);
        }
        n = n >>> 1;
        index -= 1;
    }
    return re >>> 0;
};

// console.log(reverseBits(1))
console.log(reverseBits(2147483648))