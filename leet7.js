/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = ((1 << 31) >>> 0) - 1;
    let re = 0;
    let bNeg = x < 0;
    if (bNeg) {
        x = Math.abs(x);
    }
    while (x) {
        if (re >= max / 10) {
            return 0;
        }
        re *= 10;
        if (re >= (max - x % 10)) {
            return 0;
        }
        re += (x % 10);
        x = Math.floor(x / 10);
    }

    return bNeg ? -1 * re : re;
};

console.log(reverse(123));
console.log(reverse(-123));