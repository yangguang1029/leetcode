/**
 * @param {number[][]} points
 * @return {number}
 */

//fuck  思路完全没问题，系统抽风time exceed limit
var numberOfBoomerangs = function(points) {
    var len = points.length;
	if(len < 3) {
		return 0;
	}
	
	var re = 0;
	var dic = {};
	for(var i = 0; i < len; i++) {
		var pi = points[i];
		for(var j = 0; j < len; j++) {
			if(i === j) continue;
			var pj = points[j];
			var dis = Math.pow((pi[0]-pj[0]), 2) + Math.pow((pi[1]-pj[1]), 2);
			var key = "" + i + "-"+dis;
			var value = dic[key];
			if(typeof value === "undefined") {
				dic[key] = 1;
			}else{
				dic[key] = value + 1;
			}
		}
	}

	for(var key in dic) {
		var value = dic[key];
		if(value < 2) {
			continue;
		}
		re += (value * (value-1))
	}
	return re;
};

console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));