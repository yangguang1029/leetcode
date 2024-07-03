/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
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


/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {

// 	function getMinMax(arr, start, end) {
// 		let min = Number.MAX_SAFE_INTEGER
// 		let max = Number.MIN_SAFE_INTEGER
// 		let minindex = -1
// 		let maxindex = -1
// 		for(let i = start; i < end; i++) {
// 			const n = arr[i]
// 			if(n > max) {
// 				max = n;
// 				maxindex = i
// 			}
// 			if(n < min) {
// 				min = n;
// 				minindex = i
// 			}
// 		}
// 		return {
// 			min,max,minindex,maxindex
// 		}
// 	}

// 	const {min, max, minindex, maxindex} = getMinMax(prices, 0, prices.length)
// 	if(minindex < maxindex) {
// 		return max - min;
// 	}
// 	const rightdata = getMinMax(prices, minindex+1, prices.length)
// 	const leftdata = getMinMax(prices, 0, maxindex)
// 	let right = null;
// 	let left = null;
// 	if(rightdata.max > min) {
// 		right = rightdata.max - min;
// 	}
// 	if(leftdata.min < max) {
// 		left = max - leftdata.min
// 	}
// 	if(left && right) {
// 		return Math.max(left,right)
// 	}
// 	if(left && !right) {
// 		return left
// 	}
// 	if(right && !left) {
// 		return right
// 	}
// 	return 0;

// };

console.log(maxProfit([7,2,4,1]))