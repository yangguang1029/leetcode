/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let y = 0;
    let tmp = x;
    while (x > 0) {
        y = y * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return tmp === y;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));