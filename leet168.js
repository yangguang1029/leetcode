/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let str = "";
    let cs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while (n > 0) {
        n -= 1;
        str = cs[n % 26] + str;
        n = Math.floor(n / 26);
    }
    return str;
};