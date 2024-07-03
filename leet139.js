/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // dp[i]为，对于所有 0<j<i，s.slice(j,i)在 worddict 内，且 s.slice(0,j)满足

    const arr = [true]
    
    for(let i = 1; i <= s.length; i++) {
        // 当前检查到的字符串
        const str = s.slice(0, i)
        
        arr[i] = false
        // 如果自己就在，那加进去
        if(wordDict.indexOf(str) >= 0) {
            arr[i] = true
        }else {
            for(let j = i-1; j > 0; j--) {
                let tail = s.slice(j, i)
                if(arr[j] && wordDict.indexOf(tail) >= 0) {
                    arr[i] = true;
                    break
                }
            }
            
        }
    }
    return arr[s.length]
};

console.log(wordBreak('abc', ['a', 'ab', 'bc']))

