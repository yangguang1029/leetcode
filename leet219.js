/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	var len = nums.length;
	if(len === 0 || k === 0) {
		return false;
	}
	
    var dic = Object.create(null);
    for(var i = 0, len = nums.length; i < len; i++){
    	var key = "" + nums[i];
    	if(!dic[key]) {
    		dic[key] = [i];
    	}else {
    		dic[key].push(i);
    	}
    }

    var containsInArray = function(arr) {
    	var len = arr.length;
    	if(len === 1) {
    		return false;
    	}
    	var index = 0;
    	while(index < len-1) {
    		if(arr[index+1]-arr[index] <= k) {
    			return true;
    		}
    		index += 1;
    	}
    	return false;
    }

    for(var key in dic) {
    	if(containsInArray(dic[key])) {
    		return true;
    	}
    }
    return false;
};