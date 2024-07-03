/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     var reverse = function(arr, from, to) {
//     	if(from === to) {
//     		return;
//     	}
//     	var len = to-from;
//     	var mid = Math.floor(len/2);
//     	var tmp;
//     	for(var i = 0; i < mid; i++) {
//     		tmp = arr[i+from];
//     		arr[i+from] = arr[to-1-i];
//     		arr[to-1-i] = tmp;
//     	}
//     }
//     var nlen = nums.length;
//     if(k <= 0) {
//     	return;
//     }
//     k = k % nlen;
//     reverse(nums,0,nlen);
//     reverse(nums, 0, k);
//     reverse(nums, k, nlen);

// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	// 先把 k 个接到末尾去
	let len = nums.length
	const count = k % len
	for(let i = 0; i < len - count; i++) {
		nums[len+i] = nums[i]
	}
	// 再整体往前平移
	for(let i = 0; i < len; i++) {
		nums[i] = nums[i + len - count]
	}
	// 把多余的去掉
	nums.length = len
};

function test(arr, k){
	console.log('before ', arr)
	rotate(arr, k)
	console.log('after ', arr)
}

test([1,2,3,4,5,6,7], 3)