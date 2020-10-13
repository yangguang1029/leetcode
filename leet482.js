/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
 var licenseKeyFormatting = function(S, K) {
    let i = 0
    let str = ''
    while(i < K && S[i] !== '-') {
      let c = S[i]
      if(c >= 'a' && c <= 'z') {
        c = c.toLocaleUpperCase()
      }
      str += c
      i += 1
    }
    str += '-'
    if(S[i] === '-') {
      i += 1
    }
    let len = S.length 
    while(i < len) {
      let j = 0
      while(i < len - j && j < K) {
        i += 1
        let c = S[i+j]
        if(c === '-') {
          break
        }
        if(c >= 'a' && c <= 'z') {
          c = c.toLocaleUpperCase()
        }
        str += c
        j += 1
      }
      str += '-'
    }
    return str
};