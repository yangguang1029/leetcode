/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy1 = function(n) {
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


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	function tmp(number) {
		let re = 0;
		let num = number
		while(num > 0) {
			re += Math.pow((num%10), 2)
			num = Math.floor(num/10) 
		}
		return re;
	}

	// 用一个字典存储得到过的数字，以判断循环
	let s = new Set()
	s.add(n)
	let num = n;
	while(num !== 1) {
		num = tmp(num)
		if(s.has(num)) {
			return false
		}else {
			s.add(num)
		}
	}
	return true
};



console.log(isHappy(19))