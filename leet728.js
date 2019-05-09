/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

  let divide = function(num) {
    let arr = []
    while(num > 0) {
      let d = num % 10
      if(d === 0) {
        return null
      }
      arr.push(d)
      num = Math.floor( num / 10)
    }
    return arr
  }

  let arr = []
  let num = left
  while(num <= right) {
    let bSelfDivide = true
    if(num >= 10) {
      let ns = divide(num)
      if(ns === null) {
        bSelfDivide = false
      } else {
        for(let i = 0; i < ns.length; i++) {
          if(num % ns[i] !== 0) {
            bSelfDivide = false
            break
          }
        }
      }
    }
    if(bSelfDivide) {
      arr.push(num)
    }
    num += 1
  }
  return arr
};