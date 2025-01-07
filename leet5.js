/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    const ispalindrome = function(str) {
        const len = str.length;
        let start = 0
        let end = len-1
        while(start < end && str[start] === str[end]) {
            start+=1
            end-=1
        }
        if(len%2 === 0) {
            return start == end+1
        }
        return start == end
        
    }

    // 第i个位置的回文子串为si，那么第i+1个的就是s[si.length]，如果是回文就存储新的，否则存储原来的

   const result = [s.slice(0,1)]
   for(let i = 1; i < s.length; i++) {
    let last = result[i-1]
    let start = i-last.length-1
    if(start>=0) {
        let str1 = s.slice(start, i+1)
        if(ispalindrome(str1)) {
            result[i] = str1
            continue
        }
    }
    start = i-last.length
    if(start>=0) {
        let str1 = s.slice(start, i+1)
        if(ispalindrome(str1)) {
            result[i] = str1
            continue
        }
    }
    str1 = s.slice(start+1, i+1)
    if(ispalindrome(str1)) {
        result[i] = str1
        continue
    }
    result[i] = last
   }
   return result[s.length-1]
    
};