/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    
    var len = prices.length;
    if(len < 2) {
    	return 0;
    }
    var re = 0;
    var start = 0;
    
    while(start < len - 1) {
    	while(start < len - 1 && prices[start] >= prices[start + 1]){
    		start += 1;
    	}
    	if(start === len - 1) {
    		break;
    	}
    	var end = start + 1;
    	while( (end < len - 1) && prices[end+1] > prices[end]) {
    		end += 1;
    	}
    	re += (prices[end] - prices[start]);
    	start = end+1;

    }
    return re;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let c = 0;
    let len = prices.length;
	prices.forEach((item, index) => {
		if(index < len-1 &&  prices[index+1]> item) {
			c += (prices[index+1]-item)
		}
	})
	return c;
};

console.log(maxProfit([7,3,5,4,6,9]))
console.log(maxProfit([5,4,3,2,1]))