/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
   function startToEnd(start,end) {
    let isbegin = start === 0
    let isend = end === S.length -1
    let arr = []
    let mid = (end+start) / 2
     for(let i = start; i < end; i++) {
       let num
       if(isbegin) {
         num = end - i
       }else if()
       arr.push(i < mid ? (i-start) : (end-i))
     }
     return arr
   }
   let start = Number.MIN_SAFE_INTEGER
   let end = 0
   let i = 0
   let re = []
   while(i < S.length) {
     if(S[i] === C) {
       
      re = re.concat(startToEnd(start,i))
      start = i
     } else {
       i += 1
     }
   }
   return re.concat(startToEnd(start, Number.MAX_SAFE_INTEGER))
};