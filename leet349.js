/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var arrToDic = function(arr) {
    	var dic = {};
    	for(var i = 0, len = arr.length; i < len; i++) {
    		var key = "" + arr[i];
    		if(!dic[key]) {
    			dic[key] = 1;
    		}
    	}
    	return dic;
    }

    var dic1 = arrToDic(nums1);
    var dic2 = arrToDic(nums2);
    var rearr = [];
    for(var key in dic1) {
    	if(dic2[key]) {
    		rearr.push(parseInt(key));
    	}
    }
    return rearr;
};