/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	
    var alen = a.length;
    var blen = b.length;
    if(alen === 0) {
    	return b;
    }
    if(blen === 0) {
    	return a;
    }
    var re = "";
    var plus = 0;
    var min = Math.min(alen, blen);
    var max = Math.max(alen, blen);
    var index = 0;
    var ai, bi, c;
    while(index < min) {
    	ai = parseInt(a[alen - 1 - index]);
    	bi = parseInt(b[blen - 1 - index]);
    	c =  ai + bi + plus;
    	if(c > 1) {
    		plus = 1;
    		c = c % 2;
    	}else {
    		plus = 0;
    	}
    	re = "" + c + re;
    }
    var left = index < alen ? a : b;
    while(index < max) {
    	ai = parseInt(left[max - 1 - index]);
    	c = ai + plus;
    	if(c > 1) {
    		plus = 1;
    		c = c % 2;
    	}else {
    		plus = 0;
    	}
    	re = "" + c + re;
    }
    if(plus > 0) {
    	re = "1" + re;
    }
    return re;
};