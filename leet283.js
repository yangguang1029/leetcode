/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	var len = nums.length;
	var index = 0;

	while(index < len) {
		while(index < len && nums[index] !== 0) {
			index += 1;
		}
		if(index >= len - 1) {
			break;
		}
		var next = index + 1;
		while(next < len && nums[next] === 0) {
			next += 1;
		}
		if(next === len) {
			break;
		}
		nums[index] = nums[next];
		nums[next] = 0;
		index += 1;
	}
};


var arr = [0,1,0,3,12];
moveZeroes(arr);

for(var i = 0, len = arr.length; i < len; i++) {
	console.log(arr[i]);
}