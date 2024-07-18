/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */


// 想到了动态规划，但是没想对 dp 方程，实际上是需要二维动态规划。
// 暂时不做了，面试不太可能涉及二维动态规划

var minDistance = function(word1, word2) {

    // 用 dp 找到最长公共子串的长度，则步数为 maxlen 减去这个长度
   const len1 = word1.length;
   const len2 = word2.length;
    const short = len1 < len2 ? word1 : word2;
    const long = len1 < len2 ? word2 : word1;
    const slen = short.length;
    const llen = long.length;
    let index = 1;
    const dp = [{
        endindex: -1,
        len: 0
    }]
    while(index <= slen) {
        const c = short.charAt(index-1)
        let endindex = -1;
        let len = 0;
        for(let i = 0; i < index; i++) {
            const dpi = dp[i]
            const cindex = long.indexOf(c, dpi.endindex+1)
            let newindex = cindex >= 0 ? cindex : dpi.endindex;
            let newlen = cindex >= 0 ? dpi.len+1 : dpi.len;
            if(newlen > len) {
                endindex = newindex;
                len = newlen;
            }
        }
        dp[index] = {
            endindex,
            len
        }
        index += 1
    }
    return llen - dp[slen].len
};

console.log(minDistance('intention', 'execution'));