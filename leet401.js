/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
	if(num === 0) {
		return ['0:00'];
	}

	var hours = [1,2,4,8];
	var minutes = [1,2,4,8,16,32];

	var re = [];

	for(var hnum = 0; hnum <= num; hnum ++) {
		if(hnum > 4) {
			break;
		}
		var mnum = num - hnum;

		var harr = getSubArray(hours, hnum);
		var marr = getSubArray(minutes, mnum);

		for(var i = 0, hlen = harr.length; i < hlen; i++) {
		    var hadd = addArr(harr[i]);
		    if(hadd > 11) {
		        continue;
		    }
			var str = "" + hadd;
			for(var j = 0, mlen = marr.length; j < mlen; j++) {
				var madd = addArr(marr[j]);
				if(madd > 59) {
				    continue;
				}
				var mstr = madd < 10 ? "0" + madd : "" + madd;
				re.push(str + ":" + mstr);
			}
		}
	}

	return re;
};

var fuck = readBinaryWatch(1);
printArr(fuck);