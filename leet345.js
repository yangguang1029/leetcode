/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var isVowel = function(c) {
    	return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U'; 
    }
    var len = s.length;
    var p = 0, q = len - 1;
    var arr = s.split("");
    while(p < q) {
    	while(p < len && isVowel(arr[p]) === false) {
    		 p += 1;
    	}
    	while(q >= 0 && isVowel(arr[q]) === false) {
    		 q -= 1;
    	}
    	if(p < q) {
    		var tmp = arr[p];
    		arr[p] = arr[q];
    		arr[q] = tmp;
    		p += 1;
    		q-=1;
    	}
    }
    return arr.join('');
};