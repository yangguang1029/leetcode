/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let slen = A[0].length
  let alen = A.length
  let count = 0
  for(let i = 0; i < slen; i++) {
    for(let j = 0; j < alen-1; j++) {
      if(A[j].charCodeAt(i) > A[j+1].charCodeAt(i)) {
        count += 1
        break
      }
    }
  } 
  return count 
};