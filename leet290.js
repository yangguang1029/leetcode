/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern1 = function(pattern, str) {
    var words = str.split(" ");
    var slen = words.length;
    var plen = pattern.length;
    if(slen !== plen) {
    	return false;
    }
    var dic = {};
    var dic1 = {};
    for(var i = 0; i < slen; i++) {
    	var word = words[i];
    	var pa = pattern[i];
    	var tmp = dic[word];
    	var tmp1 = dic1[pa];
    	if(!tmp && !tmp1) {
    		dic[word] = pa;
    		dic1[pa] = word;
    	}else{
    		if(tmp !== pa || tmp1 !== word) {
    			return false;
    		}
    	}
    }
    return true;
};

var wordPattern = function(pattern, s) {

	const arr = s.split(' ')
	if(pattern.length !== arr.length) {
		return false;
	}
	var pdic = {}
	var sdic = {}
	let ispattern = true
	for(let i = 0; i < arr.length; i++) {
		const pc = pattern.charAt(i)
		const sc = arr[i]
		const pindex = pdic[pc]
		const sindex = sdic.hasOwnProperty(sc) ? sdic[sc] : undefined
		if(pindex !== sindex) {
			ispattern = false;
			break;
		}
		if(!pindex) {
			pdic[pc] = i
		}
		if(!sindex) {
			sdic[sc] = i
		}
	}
	return ispattern
};

console.log(wordPattern('abba', 'dog cat cat dog'))