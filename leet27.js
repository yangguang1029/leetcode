/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
// 	var len = nums.length;
// 	if(len === 0) {
// 		return 0;
// 	}
//   nums.sort(function(left, right) {
//   	return left-right;
//   });  
//   var start = 0;
//   while(start < len && nums[start] !== val) {
//   	start += 1;
//   }
//   if(start === len) {	//没找到
//   	return len;
//   }
//   var end = start;
//   while(end < len && nums[end] === val) {
//   	end += 1;
//   }
//   while(end < len) {
//   	nums[start] = nums[end];
//   	start += 1;
//   	end += 1;
//   }
//   return len - end + start;
// };


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length
  let p = 0
  while(p < len && nums[p]!== val) {
    p+=1
  }
  if(p === len) {
    return 0
  }
  let q = p+1
  while(q < len) {
    // 先找到第一个不等于 val 的值，然后进行替换，然后循环
    while(q<len && nums[q] === val) {
      q+=1
    }
    if(q < len) {
      nums[p] = nums[q]
      p+=1;
      q+=1
    }
  }
  return q-p;

};

// console.log(removeElement([1], 1))
// console.log(removeElement([1], 2))
// console.log(removeElement([1,2,2,2], 2))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
