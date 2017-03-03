/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows <= 0) {
    	return [];
    }
    var re = [[1]];
    var index = 1;
    while(index < numRows) {
    	var last = re[re.length - 1];
    	var tmp = [1];
    	for(var i = 0, len = last.length; i < len - 1; i++) {
    		tmp.push(last[i] + last[i+1]);
    	}
    	tmp.push(1);
    	re.push(tmp);
    	index += 1;
    }

    return re;
};