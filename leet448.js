var findDisappearedNumbers = function(nums) {
    for(var i = 0, len = nums.length; i < len; i++) {
    	var idx = Math.abs(nums[i]) - 1;
    	var num = nums[idx];
    	if(num > 0) {
    		nums[idx] = -1 * num;
    	}
    }
    var re = [];
    for(var i = 0, len = nums.length; i < len; i++) {
    	if(nums[i] > 0) {
    		re.push(i);
    	}
    }
    return re;
};

var xor = function(arr, arr1) {
	var re = 0;
	for(var i = 0, len = arr.length; i < len; i++) {
		re  = re ^ arr[i];
	}
	for(var i = 0, len = arr1.length; i < len; i++) {
		re  = re ^ arr1[i];
	}
	return re;
}

var findone = function(nums) {	//数组里有一个重复的，找出来
	var len = nums.length;
	var arr = [];
	for(var i = 1; i <= len - 1; i++) {
		arr[i-1] = i;
	}
	return xor(nums, arr);
}

var findtwo = function(nums) {	//数组里有两个重复的，找出来
	var len = nums.length;
	var arr = [];
	for(var i = 1; i <= len - 2; i++) {
		arr[i-1] = i;
	}
	var m = 0;

	for(var i = 0; i < len; i++) {
		m  = m ^ nums[i];
	}
	for(var i = 0; i < len-2; i++) {
		m  = m ^ arr[i];
	}
	//得到了2^4 然后找到最右边的一个1，用来区分这两个数
	var index = 0;
	while(index < 31 && (m & (2 << index) === 0)) {
		index += 1;
	}
	var tmp = 2 << index;
	var nums1 = [];		// 2,3
	var nums2 = [];		//1,4,5
	var arr1 = [];		//2,2,3
	var arr2 = [];		//1,4,4,5

	nums.forEach(function(element){
		element & tmp ? nums1.push(element) : nums2.push(element);
	});
	arr.forEach(function(element){
		element & tmp ? arr1.push(element) : arr2.push(element);
	});
	return [xor(nums1, arr1), xor(nums2, arr2)];
}

console.log(findone([5,4,3,2,2,1]));

var arr = findtwo([1,2,2,3,4,4,5]);
console.log(arr[0]);
console.log(arr[1]);