/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //kmp
    var nlen = needle.length;
    var hlen = haystack.length;
    if(nlen === 0) {
        return 0;
    }
    if(hlen === 0) {
        return -1;
    }
    
    //算出一个字符串的匹配值
    var getSub = function(str) {
    	var len = str.length;
    	if(len === 1) {
    		return 0;
    	}
    	var max = 0;
    	for(var i = 1; i < len; i++) {
    		if(str.slice(0, i) === str.slice(len-i)) {
    			max = i;
    		}
    	}
    	return max;
    }
    //算出needle的部分匹配表
    var subs = [];
    
    for(var i = 0; i < nlen; i++) {
    	subs[i] = getSub(needle.slice(0, i+1));
    }

    var index = 0;
    
    while(index <= hlen - nlen) {
    	if(haystack[index] !== needle[0]) {
    		index += 1;
    		continue;
    	}
    	var step = 1;
    	while(step < nlen && haystack[index + step] === needle[step]) {
    		step += 1;
    	}
    	if(step === nlen) {
    		return index;
    	}
    	index += (step- subs[step-1]);
    }

    return -1;
};

console.log(strStr("bbc abcdab abcdabcdabde", "abcdabd"))


