/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return "0";
    }
    let bNeg = num < 0;
    let re = "";
    num = Math.abs(num);
    while (num > 0) {
        re = (num % 7) + re;
        num = Math.floor(num / 7);
    }
    return bNeg ? "-" + re : re;
};