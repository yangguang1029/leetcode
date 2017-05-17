/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 0) {
        return false;
    }
    var index = 2;
    var sum = 1;
    let end = Math.sqrt(num);
    while (index < end) {
        if (num % index === 0) {
            sum += index;
            sum += (num / index);
        }
        index += 1;
    }
    if (num % end === 0) {
        sum += end;
    }
    return num === sum;
};

console.log(checkPerfectNumber(28))
console.log(checkPerfectNumber(9))