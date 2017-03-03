/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

	var countstr = function(str) {
		var len = str.length;
		var start = 0;
		var re = "";
		while(start < len) {
			var c = str[start];
			var count = 1;
			while(start + count < len && str[start + count] === c) {
				count += 1;
			}
			re = re + count;
			re = re + c;
			start += count;
		}
		return re;
	}


    var s = "1";
    var index = 1;
    var tmp;
    while(index < n) {
    	tmp = countstr(s);
    	s = tmp;
    	index += 1;
    }
    return s;
};

for(var i = 4; i < 6; i++) {
	console.log(countAndSay(i))
}


// 1
// 11
// 21
// 1211
// 111221
// 312211
// 13112221