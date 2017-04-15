/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var len = nums.length;
	if(len === 0) {
		return 0;
	}
  nums.sort(function(left, right) {
  	return left-right;
  });  
  var start = 0;
  while(start < len && nums[start] !== val) {
  	start += 1;
  }
  if(start === len) {	//没找到
  	return len;
  }
  var end = start;
  while(end < len && nums[end] === val) {
  	end += 1;
  }
  while(end < len) {
  	nums[start] = nums[end];
  	start += 1;
  	end += 1;
  }
  return len - end + start;
};

var fuck = [3,2,3,3,2]
console.log(removeElement(fuck, 2));