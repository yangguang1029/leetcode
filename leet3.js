/**
 * @param {string} s
 * @return {number}
 */

//使用dp，假设到第k个字母时，前面最长是n，那么第k+1个字母最长是max(n, k往前推的最长)
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if(len <= 1) {
        return len;
    }
    let max = 1;
    let maxi = 1;   //一定包含了第i个元素的最长长度
    let index = 1;
    while(index < len) {
        let len = 0;
        let c = s[index];
        let newMaxi = 1;
        while(newMaxi <= maxi && s[index-newMaxi] !== c) {
            newMaxi += 1;
        }
        maxi = newMaxi;
        if(maxi > max) {
            max = maxi;
        }
        index += 1;
    }
    return max;
};

console.log(lengthOfLongestSubstring("kewefw"));