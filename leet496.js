
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let dic = [];
nums2.forEach((item, index)=>{
  dic[""+item] = index;
});
let re = [];
let len = nums2.length;
nums1.forEach((item, index, array)=>{
      let from = dic[""+item] + 1;
      while(from < len && nums2[from] <= item) {
          from += 1;
      }
      re.push(from < len ? nums2[from] : -1);
});
return re;  
};


