/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
     if(n < 2) {
        return n;
    }
    var m = Math.floor(Math.sqrt(n) * Math.sqrt(2));
    while(m * (m + 1) / 2 <= n) {
    	m += 1;
    }
    return m - 1;
};

console.log(arrangeCoins(3));

m * (m+1)/2 <= n < (m+1)*(m+2)/2