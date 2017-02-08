/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
	var sf = function(left, right) {
		return left - right;
	}
    g.sort(sf);
    s.sort(sf);
    var i = 0;
    var j = 0;
    var glen = g.length;
    var slen = s.length;
    var re = 0;
    while(i < glen && j < slen) {
    	if(s[j] >= g[i]) {
    		i += 1;
    		re += 1;
    	}
    	j += 1;
    	
    }
    return re;
};

console.log(findContentChildren([10,9,8,7], [5,6,7,8]));