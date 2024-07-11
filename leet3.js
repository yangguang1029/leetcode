/**
 * @param {string} s
 * @return {number}
 */

//使用dp，假设到第k个字母时，前面最长是n，那么第k+1个字母最长是max(n, k往前推的最长)
var lengthOfLongestSubstring1 = function(s) {
    let len = s.length;
    if(len <= 1) {
        return len;
    }
    let max = 1;
    let maxi = 1;   //一定包含了第i个元素的最长长度
    let index = 1;
    while(index < len) {
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


// 上面的解法，效率更高，因为用一个数字记录了包含最后一个字母的最长长度，而不是每次都临时去计算
// 从上面算法来看，动态规划不是一定需要 dp 数组的，只要遍历到 n，并且能记录数据就可以


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length
    if(n === 0) {
        return 0
    }
    // 第一反应就是使用动态规划，存储长度 n 时，最长无重复字串，对于第 n+1 个，从该字符往回找，如果长度大于等于原来的，就是新的，否则就还是原来的
    const arr = [s.slice(0,1)]
    for(let i = 1; i < n; i++) {
        let p = i;
        let set = new Set()
        while(p >= 0) {
            const newc = s.charAt(p)
            if(set.has(newc)) {
                break;
            }else {
                set.add(newc)
            }
            p -= 1
        }
        if(i - p >= arr[i-1].length) {
            arr[i] = s.slice(p+1, i+1)
        } else {
            arr[i] = arr[i-1]
        }
    }
    return arr[n-1].length
    
};

console.log(lengthOfLongestSubstring("pwwkew"));