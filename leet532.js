/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
	if (k < 0) {
		return 0;
	}
	var dic = {};
	for (var i = 0, len = nums.length; i < len; i++) {
		var key = "" + nums[i];
		var v = dic[key];
		if (v) {
			dic[key] = v + 1;
		} else {
			dic[key] = 1;
		}
	}
	var re = 0;
	for (var key in dic) {
		var num = parseInt(key);
		if (k === 0) {
			if (dic[key] > 1) {
				re += 1;
			}
		} else {
			var n1 = num + k;
			var v1 = dic["" + n1];
			if (v1) {
				re += 1;
			}
			var n2 = num - k;
			var v2 = dic["" + n2];
			if (v2) {
				re += 1;
			}
		}


	}
	return k === 0 ? re : re / 2;
};

console.log(findPairs([1, 3, 1, 5, 4], 0))
console.log(findPairs([1, 3, 1, 5, 4], 2))