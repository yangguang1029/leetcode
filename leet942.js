/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let len = S.length
    let min = 0
    let max = len
    let arr = []
    for(let i = 0; i < len; i++) {
      let c = S[i]
      if(c === 'I') {
        arr.push(min)
        min += 1
      }else {
        arr.push(max)
        max -= 1
      }
    }
    S[len-1] === 'I' ? arr.push(min) : arr.push(max)
    return arr
};


