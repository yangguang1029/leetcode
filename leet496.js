/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let dic = [];
  nums.forEach((item, index)=>{
    dic[""+item] = index;
  });
  let re = [];
  let len = nums.length;
  findNums.forEach((item, index, array)=>{
        let from = dic[""+item] + 1;
        while(from < len && nums[from] <= item) {
            from += 1;
        }
        re.push(from < len ? nums[from] : -1);
  });
  return re;  
};


