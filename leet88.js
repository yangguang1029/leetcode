// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
// 	var p = m-1;
// 	var q = n-1;
// 	var index = m + n - 1;
//     while(p >= 0 && q >= 0) {
//     	var num1 = nums1[p];
//     	var num2 = nums2[q];
//     	if(num1 > num2) {
//     		nums1[index] = num1;
//     		p-=1;
//     	}else {
//     		nums1[index] = num2;
//     		q-=1;
//     	}
//     	index -= 1;
//     }
//     while(q >= 0) {
//     	nums1[index] = nums2[q];
//     	q -= 1;
//     	index-=1;
//     }
// };


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

	let index = m+n-1;
	let p = m-1;
	let q = n-1
	while(p>=0 && q >=0) {
		if(nums1[p] > nums2[q]) {
			nums1[index] = nums1[p]
			p-=1
		} else {
			nums1[index] = nums2[q]
			q-=1
		}
		index-=1
	}
	while(q>=0) {
		nums1[index] = nums2[q]
		q-=1
		index-=1
	}

};