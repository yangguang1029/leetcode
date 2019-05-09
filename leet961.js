/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A.sort((left,right)=>left-right)
    let mid = A.length / 2
    if(A[mid] === A[mid+1]) {
      return A[mid]
    }
    return A[mid-1]

};