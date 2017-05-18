/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n < 10) {
        return n;
    }
    var index = 1; //几位数,起始是1
    var count = 0;
    var sub = n;
    let interval;
    while (n > count) {
        interval = 9 * Math.pow(10, index - 1) * index;
        sub -= interval;
        count += interval;
        index += 1;
        interval = 9 * Math.pow(10, index - 1) * index;
        count += interval;
    }

    var origin = Math.pow(10, index - 1) - 1;
    var number = origin + Math.ceil(sub / index);
    var mod = sub % index;
    if (mod > 0) {
        mod = index - mod;
    }
    var c = 0,
        tmp = 0;
    while (tmp <= mod) {
        c = number % 10;
        number = Math.floor(number / 10);
        tmp += 1;
    }
    return c;
};


//
//9*1 + 90*2 + 900*3 + 9000*4


// 1 0 0 1 0 1 1 0 2

console.log(findNthDigit(19));
// console.log(findNthDigit(11));
// console.log(findNthDigit(10000));