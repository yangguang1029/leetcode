/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num = 0;
    var acode = "A".charCodeAt(0)-1;
    var len = s.length;
    for(var i = len - 1; i >= 0; i--) {
    	var c = s.charCodeAt(i);

    	num += ( (c-acode) * Math.pow(26, -i + len - 1))
    }
    return num;
};

console.log(titleToNumber("AA"));