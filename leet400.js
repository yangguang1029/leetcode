/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
	if(n < 10) {
		return n;
	}
    var index = 1;	//几位数,起始是1
    var count = 9 * Math.pow(10, index-1) * index;
    var interval = n;
    while(n > count) {
    	index += 1;
    	interval -= count;
    	count = count + 9 * Math.pow(10, index-1) * index;
    }
    var origin = Math.pow(10, index-1) - 1;
    var number = origin + Math.ceil(interval/index);
    var mod = interval % index;
    if(mod > 0) {
    	mod = index - mod;
    }
    var c = 0, tmp = 0;
    while(tmp <= mod) {
    	c = number % 10;
    	number = Math.floor(number/10);
    	tmp += 1;
    }
    return c;
};


//
//9*1 + 90*2 + 900*3 + 9000*4


// 1 0 0 1 0 1 1 0 2

// console.log(findNthDigit(13));
// console.log(findNthDigit(11));
console.log(findNthDigit(10000));