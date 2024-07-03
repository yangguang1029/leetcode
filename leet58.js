/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function(s) {
    var len = s.length;
    var start = len-1;
    while(start >= 0 && s[start] === " ") {
    	start -= 1;
    }
    if(start < 0) {
    	return 0;
    }
    var end = start - 1;
    while(end >= 0 && s[end] !== " ") {
    	end -= 1;
    }
    return start - end;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    const len = s.length;

    let q = len-1
    while(q >= 0 && s.charAt(q) === '') {
        q-=1
    }
    let p = q
    while(p >= 0 && s.charAt(p) !== '') {
        p-=1
    }
    return q-p
};

console.log(lengthOfLastWord('hello world'))