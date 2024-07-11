/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits1 = function(n) {
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


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let re = 0;
    let p = n;
    let count = 32;
    while(p) {
        let q = p % 2;
        re =  re * 2 + q
        p = Math.floor(p/2)
        count -= 1
    }
    while(count > 0) {
        re *= 2;
        count -= 1
    }
    return re;
};

// console.log(reverseBits(1))
console.log(reverseBits(1))