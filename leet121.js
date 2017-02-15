/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var len = prices.length;
  if(len <= 1) {
  	return 0;
  }
  var min = prices[0];
  var re = 0;
  for(var i = 1; i < len; i++) {
  	var p = prices[i];
  	var tmp = p - min;
  	if(tmp > re) {
  		re = tmp;
  	}
  	if(p < min) {
  		min = p;
  	}
  }

  return re;
};

console.log(maxProfit([1,4, 2]))
// console.log(maxProfit([1, 2]))
// console.log(maxProfit([3, 2, 1]))
// console.log(maxProfit([7,2,5,1,8,4]))
// console.log(maxProfit([7,2,5,8,1,10,4]))