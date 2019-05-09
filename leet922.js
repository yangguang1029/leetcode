/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let len = A.length
    let p1 = 0
    let p2 = 1
    let tmp
    while(p1 < len) {
      while(p1 < len && A[p1] % 2 === 0) {
        p1 += 2
      }
      while(p2 < len && A[p2] % 2 === 1) {
        p2 += 2
      }
      if(p1 < len) {
        tmp = A[p1]
        A[p1] = A[p2]
        A[p2] = tmp
        p1 += 2
        p2 += 2
      }
    }
    return A
};