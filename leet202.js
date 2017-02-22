/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var dic = {}
    var interner = function(num, dic) {
    	var m = 0;
    	while(num > 0) {
    		m += Math.pow(num % 10, 2);
    		num = Math.floor(num/10);
    	}
    	if(m === 1) {
    		return true;
    	}
    	var key = ""+m;
    	if(dic[key]) {
    		return false;
    	}else {
    		dic[key] = true;
    		return interner(m, dic);
    	}
    }

    return interner(n, dic);
};

console.log(isHappy(2))