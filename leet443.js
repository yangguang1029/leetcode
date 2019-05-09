/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    let i = 0
    let current = 0
    while(current < chars.length) {
      let c = chars[current]
      let count = 1
      while(current + count < chars.length && chars[current + count] === c) {
        count += 1
      }
      chars[i] = c
      i += 1
      if(count ===1) {
        current += 1
      } else {
        current += count
        if(count >= 100) {
          chars[i] = '' + Math.floor(count/100)
          count = count % 100
          chars[i+1] = '' + Math.floor(count/10)
          chars[i+2] = '' + count % 10
          i += 3
        } else if(count >= 10) {
          chars[i] = '' + Math.floor(count/10)
          chars[i+1] = '' + count % 10
          i += 2
        } else {
          chars[i] = '' + count
          i += 1
        }
      }
    }
    return i
};

console.log(compress(['a','a','b','b','c','c','c']))