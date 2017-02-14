/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort(sortNumFunc);
    nums2.sort(sortNumFunc);
    var index1 = 0;
    var index2 = 0;
    var len1 = nums1.length;
    var len2 = nums2.length;
    var re = [];
    while(index1 < len1 && index2 < len2) {
    	var num1 = nums1[index1];
    	var num2 = nums2[index2];
    	if(num1 < num2) {
    		index1 += 1;
    	}else if(num1 > num2) {
    		index2 += 1;
    	}else {
    		re.push(num1);
    		index1 += 1;
    		index2 += 1;
    	}

    }
    return re;
};