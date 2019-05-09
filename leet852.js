/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let i = 0
  while(i < A.length - 1) {
      if(A[i] > A[i+1]) {
          return i
      }
      i += 1
  }
};