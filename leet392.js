/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {
//     var dic = {};
//     for(var i = 0, len = t.length; i < len; i++) {
//     	var key = t[i];
//     	var v = dic[key];
//     	if(v) {
//     		v.push(i);
//     	}else{
//     		dic[key] = [i];
//     	}
//     }

//     var bfind = true;
//     var lastIndex = -1;
//     for(var j = 0, jlen = s.length; j < jlen; j++) {
//     	var v = dic[s[j]];
//     	if(!v) {
//     		bfind = false;
//     		break;
//     	}
//     	var vlen = v.length;
//     	var tmp = 0;
//     	while(tmp < vlen && v[tmp] <= lastIndex) {
//     		tmp += 1;
//     	}
//     	if(tmp === vlen) {
//     		bfind = false;
//     		break;
//     	}
//     	lastIndex = v[tmp];
//     	v.splice(0, tmp+1);
//     }

//     return bfind;

// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	let p = 0;
	let q = 0;
	while(p < s.length) {
		const c = s.charAt(p)
		while(q < t.length && t.charAt(q) !== c) {
			q +=1
		}
		if(q < t.length) {
			p += 1
			q += 1
		}else {
			break;
		}

	}
	return p === s.length
};

console.log(isSubsequence('axc', 'abcdef'))


