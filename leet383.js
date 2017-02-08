/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   
	var stringToDic = function(s) {
		var dic = {};
		for(var i = 0, len = s.length; i < len; i++) {
			var c = s[i];
			var tmp = dic[c];
			if(tmp) {
				dic[c] = tmp + 1;
			}else {
				dic[c] = 1;
			}
		}
		return dic;
	}

	var dicr = stringToDic(ransomNote);
	var dicm = stringToDic(magazine);

	var re = true;
	for(var key in dicr) {
		var value = dicm[key];
		if(!value || value < dicr[key]) {
			re = false;
			break;
		}
	}
	return re;
};