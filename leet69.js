/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    let index = 1;
    while (index * index < x) {
        index += 1;
    }
    return index * index === x ? index : index - 1;
};