/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var reverse = function(arr, from, to) {
    	if(from === to) {
    		return;
    	}
    	var len = to-from;
    	var mid = Math.floor(len/2);
    	var tmp;
    	for(var i = 0; i < mid; i++) {
    		tmp = arr[i+from];
    		arr[i+from] = arr[to-1-i];
    		arr[to-1-i] = tmp;
    	}
    }
    var nlen = nums.length;
    if(k <= 0) {
    	return;
    }
    k = k % nlen;
    reverse(nums,0,nlen);
    reverse(nums, 0, k);
    reverse(nums, k, nlen);

};

var rotate = function(nums, k){
	
	
}