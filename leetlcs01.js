/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function(n) {
    const haha = Math.floor(Math.log2(n))
return haha+ (Math.pow(2,haha) === n ? 1: 2)
};